import "../../css/index.css";
import "../../css/style.css";
import "../../css/queries.css";

import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useEffect, useRef, useState } from "react";

import { FaGlobe } from "react-icons/fa"; // Import a globe icon for the language selector

function MainNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState("en"); // Default language is English
  const [dropdownOpen, setDropdownOpen] = useState(false); // State for dropdown menu
  const languageSelectorRef = useRef(null); // Ref for the language selector

  const mobileNavHandler = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev); // Toggle dropdown on click
  };

  const selectLanguage = (selectedLanguage) => {
    setLanguage(selectedLanguage);
    setDropdownOpen(false); // Close the dropdown after selection
  };

  const navLinkHandler = (e) => {
    e.preventDefault();
    const href = e.target.getAttribute("href");

    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    setIsOpen(!isOpen);
  };

  const texts = {
    en: {
      home: "Home",
      remixes: "Remixes",
      videos: "Videos",
      about: "About Me",
      mailing: "Mailing List",
    },
    es: {
      home: "Inicio",
      remixes: "Remixes",
      videos: "Videos",
      about: "Sobre mí",
      mailing: "Lista de correo",
    },
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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        languageSelectorRef.current &&
        !languageSelectorRef.current.contains(event.target)
      ) {
        setDropdownOpen(false); // Close dropdown if clicked outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className={`header ${isOpen && "nav-open"}`}>
      <nav className="main-nav">
        <ul className="main-nav-list">
          <li>
            <a className="main-nav-link" href="#" onClick={navLinkHandler}>
              {texts[language].home}
            </a>
          </li>
          <li>
            <a
              className="main-nav-link"
              href="#remixes"
              onClick={navLinkHandler}
            >
              {texts[language].remixes}
            </a>
          </li>
          <li>
            <a
              className="main-nav-link"
              href="#videos"
              onClick={navLinkHandler}
            >
              {texts[language].videos}
            </a>
          </li>
          <li>
            <a className="main-nav-link" href="#about" onClick={navLinkHandler}>
              {texts[language].about}
            </a>
          </li>
          <li className="cta-container">
            <a
              className="main-nav-link cta"
              href="#mailing"
              onClick={navLinkHandler}
            >
              {texts[language].mailing}
            </a>
            <div
              className="language-selector"
              ref={languageSelectorRef} // Attach ref to the language selector
            >
              <button className="language-icon" onClick={toggleDropdown}>
                <FaGlobe size={20} color="#37b0e9" />
              </button>
              {dropdownOpen && (
                <ul className="language-dropdown">
                  <li onClick={() => selectLanguage("en")}>English</li>
                  <li onClick={() => selectLanguage("es")}>Español</li>
                </ul>
              )}
            </div>
          </li>
        </ul>

        <button className={"btn-mobile-nav"} onClick={mobileNavHandler}>
          <AiOutlineMenu className="icon-mobile-nav" name="menu" />
          <AiOutlineClose className="icon-mobile-nav" name="close" />
        </button>
      </nav>
    </header>
  );
}

export default MainNavigation;
