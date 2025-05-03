import "../../css/index.css";
import "../../css/style.css";
import "../../css/queries.css";

import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useEffect, useState } from "react";

import { useTranslation } from "react-i18next"; // Import useTranslation

function MainNavigation() {
  const { t, i18n } = useTranslation(); // Initialize translation
  const [isOpen, setIsOpen] = useState(false);

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

    setIsOpen(!isOpen);
  };

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang); // Change language dynamically
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
    <header className={`header ${isOpen && "nav-open"}`}>
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
              href="#subscribe" // Updated to point to #subscribe
              onClick={navLinkHandler}
            >
              {t("subscribe")} {/* Updated to use subscribe */}
            </a>
          </li>
          {/* Language Switcher */}
          <li className="language-switcher">
            <button
              onClick={() => handleLanguageChange("es")}
              className={`lang-btn ${i18n.language === "es" ? "active" : ""}`}
            >
              Español
            </button>
            <button
              onClick={() => handleLanguageChange("en")}
              className={`lang-btn ${i18n.language === "en" ? "active" : ""}`}
            >
              English
            </button>
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
