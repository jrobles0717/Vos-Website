import "../../css/index.css";
import "../../css/style.css";
import "../../css/queries.css";

import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useEffect, useState } from "react";

import { useTranslation } from "react-i18next"; // Import useTranslation

function MainNavigation() {
  const { t, i18n } = useTranslation(); // Initialize translation
  const [isOpen, setIsOpen] = useState(false);
  const [transitionText, setTransitionText] = useState(""); // State for transition text
  const [isTransitioning, setIsTransitioning] = useState(false); // State for animation

  const mobileNavHandler = () => {
    setIsOpen(!isOpen);
  };

  const navLinkHandler = (e) => {
    e.preventDefault();
    const href = e.target.getAttribute("href");

    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    setIsOpen(false); // Close the menu after clicking a link
  };

  const handleLanguageChange = (lang) => {
    // Set the transition text
    setTransitionText(
      lang === "es" ? "Switching to Spanish..." : "Switching to English..."
    );
    setIsTransitioning(true); // Start the animation

    // Change language after a short delay
    setTimeout(() => {
      i18n.changeLanguage(lang);
      setIsTransitioning(false); // End the animation
    }, 1000); // Match the duration of the animation
  };

  useEffect(() => {
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

      if (!isSupported) document.body.classList.add("no-flexbox-gap");
    }
    checkFlexGap();
  }, []);

  return (
    <header className={`header ${isOpen ? "nav-open" : ""}`}>
      <nav className="main-nav">
        <ul className="main-nav-list">
          <li>
            <a className="main-nav-link" href="#" onClick={navLinkHandler}>
              {t("home")}
            </a>
          </li>
          <li>
            <a
              className="main-nav-link"
              href="#remixes"
              onClick={navLinkHandler}
            >
              {t("remixes")}
            </a>
          </li>
          <li>
            <a
              className="main-nav-link"
              href="#videos"
              onClick={navLinkHandler}
            >
              {t("videos")}
            </a>
          </li>
          <li>
            <a className="main-nav-link" href="#about" onClick={navLinkHandler}>
              {t("about")}
            </a>
          </li>
          <li>
            <a
              className="main-nav-link cta"
              href="#subscribe"
              onClick={navLinkHandler}
            >
              {t("subscribe")}
            </a>
          </li>
          {/* Language Switcher */}
          <li className="language-switcher">
            <button
              onClick={() => handleLanguageChange("es")}
              className={`lang-btn ${i18n.language === "es" ? "active" : ""}`}
              disabled={i18n.language === "es"} // Disable if currently selected
            >
              Español
            </button>
            <button
              onClick={() => handleLanguageChange("en")}
              className={`lang-btn ${i18n.language === "en" ? "active" : ""}`}
              disabled={i18n.language === "en"} // Disable if currently selected
            >
              English
            </button>
          </li>
        </ul>
      </nav>

      <button className={"btn-mobile-nav"} onClick={mobileNavHandler}>
        {isOpen ? (
          <AiOutlineClose className="icon-mobile-nav" name="close" />
        ) : (
          <AiOutlineMenu className="icon-mobile-nav" name="menu" />
        )}
      </button>

      {/* Transition Text */}
      {isTransitioning && (
        <div
          className={`language-transition-text ${isTransitioning ? "fade-in" : "fade-out"}`}
        >
          {transitionText}
        </div>
      )}
    </header>
  );
}

export default MainNavigation;
