import "../../../css/index.css";
import "../../../css/style.css";

import { BsYoutube } from "react-icons/bs"; // Import the YouTube icon
import React from "react";
import { useTranslation } from "react-i18next"; // Import useTranslation

const Remix = () => {
  const { t } = useTranslation(); // Initialize translation

  return (
    <section className="section-about" id="remixes">
      <div className="remix-container">
        <div className="background-overlay">
          <h1 className="remix-title">{t("remixTitle")}</h1>
          <p className="statement">
            {t("remixDescription")}
            <br />
            <span
              className="booking-text"
              dangerouslySetInnerHTML={{ __html: t("contactText") }}
            />
          </p>
          <a
            href="https://www.youtube.com/channel/UCBJTfaNRAmX97_LgTlhRIIA" // Link to Voş's YouTube remixes
            target="_blank"
            rel="noopener noreferrer"
            className="youtube-button"
          >
            <BsYoutube size={24} className="icon--component" />{" "}
            {t("listenOnYoutube")} {/* Updated button text */}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Remix;
