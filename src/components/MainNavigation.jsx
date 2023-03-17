import classes from "./MainNavigation.module.css";
import heroClasses from "./Hero.module.css";
import { useEffect } from "react";

function MainNavigation() {
  ///////////////////////////////////////////////////////////
  // Smooth scrolling animation

  const allLinks = document.querySelectorAll("a:link");

  allLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const href = link.getAttribute("href");

      // Scroll back to top
      if (href === "#") {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }

      // Scroll to other links
      if (href !== "#" && href.startsWith("#")) {
        const sectionEl = document.querySelector(href);
        sectionEl.scrollIntoView({ behavior: "smooth" });
      }

      // Close mobile navigation
      // if (link.classList.contains("main-nav-link")) {
      //   headerEl.classList.toggle("nav-open");
      // }
    });
  });

  ///////////////////////////////////////////////////////////
  // Sticky navigation

  useEffect(() => {
    // const sectionHeroEl = document.querySelector("#hero");
    const sectionHeroEl = document.querySelector(`.${heroClasses.sectionHero}`);

    console.log(sectionHeroEl);
    const obs = new IntersectionObserver(
      function (entries) {
        const ent = entries[0];
        console.log(ent);
        if (ent.isIntersecting === false) {
          document.body.classList.add("sticky");
        }

        if (ent.isIntersecting === true) {
          document.body.classList.remove("sticky");
        }
      },
      {
        // In the viewport
        root: null,
        threshold: 0,
        rootMargin: "-80px",
      }
    );
    obs.observe(sectionHeroEl);
  }, []);

  ///////////////////////////////////////////////////////////
  // Fixing flexbox gap property missing in some Safari versions
  function checkFlexGap() {
    var flex = document.createElement("div");
    flex.style.display = "flex";
    flex.style.flexDirection = "column";
    flex.style.rowGap = "1px";

    flex.appendChild(document.createElement("div"));
    flex.appendChild(document.createElement("div"));

    document.body.appendChild(flex);
    var isSupported = flex.scrollHeight === 1;
    flex.parentNode.removeChild(flex);
    console.log(isSupported);

    if (!isSupported) document.body.classList.add("no-flexbox-gap");
  }
  checkFlexGap();

  return (
    <header className={classes.header}>
      <nav className={classes.nav}>
        <ul className={classes.list}>
          <li>
            <a className={classes.link} href="#videos">
              Videos
            </a>
          </li>
          <li>
            <a className={classes.link} href="#about">
              About Me
            </a>
          </li>
          <li>
            <a
              className={[classes.link, classes.cta].join(" ")}
              href="#mailing"
            >
              Mailing List
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
