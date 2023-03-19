import "../../css/index.css";
import "../../css/style.css";
import "../../css/queries.css";

import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useEffect, useState } from "react";

function MainNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  const mobileNavHandler = () => {
    setIsOpen(!isOpen);
  };

  const navLinkHandler = (e) => {
    ///////////////////////////////////////////////////////////
    // Smooth scrolling animation

    e.preventDefault();
    const href = e.target.getAttribute("href");
    console.log(e.target);
    console.log(e.target.getAttribute("class"));

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
      // console.log(sectionEl);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    setIsOpen(!isOpen);
  };

  useEffect(() => {
    // Set current year
    const yearEl = document.querySelector(".year");
    const currentYear = new Date().getFullYear();
    yearEl.textContent = currentYear;

    ///////////////////////////////////////////////////////////
    // Sticky navigation

    const sectionHeroEl = document.querySelector(".section-hero");
    // const sectionHeroEl = document.querySelector(`.${heroClasses.sectionHero}`);

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
  }, []);

  return (
    <header className={`header ${isOpen && "nav-open"}`}>
      {/* <a href="#" className="icon">
        <AiOutlineHome size={22} />
      </a> */}

      <nav className="main-nav">
        <ul className="main-nav-list">
          <li>
            <a className="main-nav-link" href="#" onClick={navLinkHandler}>
              Home
            </a>
          </li>
          <li>
            <a
              className="main-nav-link"
              href="#videos"
              onClick={navLinkHandler}
            >
              Videos
            </a>
          </li>
          <li>
            <a className="main-nav-link" href="#about" onClick={navLinkHandler}>
              About Me
            </a>
          </li>
          <li>
            <a
              className="main-nav-link cta"
              href="#mailing"
              onClick={navLinkHandler}
            >
              Mailing List
            </a>
          </li>
        </ul>
      </nav>

      <button className={"btn-mobile-nav"} onClick={mobileNavHandler}>
        <AiOutlineMenu className="icon-mobile-nav" name="menu" />
        <AiOutlineClose className="icon-mobile-nav" name="close" />
      </button>
    </header>
  );
}

export default MainNavigation;
