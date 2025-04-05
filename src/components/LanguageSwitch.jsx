import "../../css/index.css";
import "../../css/style.css";
import "../../css/queries.css";

import React from "react";

const LanguageSwitch = ({ language, onToggle }) => {
  return (
    <div className="card-language-switch">
      <div
        className={`language-card ${language === "en" ? "active" : ""}`}
        onClick={() => onToggle("en")}
      >
        EN
      </div>
      <div
        className={`language-card ${language === "es" ? "active" : ""}`}
        onClick={() => onToggle("es")}
      >
        ES
      </div>
    </div>
  );
};

export default LanguageSwitch;
