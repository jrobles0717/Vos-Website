import "../../css/index.css";
import "../../css/style.css";

import { BsYoutube } from "react-icons/bs"; // Import the YouTube icon
import { FaSoundcloud } from "react-icons/fa"; // Import the SoundCloud icon
import React from "react";
import { useTranslation } from "react-i18next"; // Import useTranslation

const Remix = () => {
  const { t } = useTranslation(); // Initialize translation

  return (
    <section className="section-about" id="remixes">
      <div className="remix-container" data-aos="fade-up">
        {" "}
        {/* Add AOS animation here */}
        <div
          className="background-overlay"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {" "}
          {/* Add AOS animation here */}
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
            href="https://www.youtube.com/playlist?list=PLCkuhMYKUB3igFxDJFEmbjU5bSXdiCUdY" // Link to Voş's YouTube remixes
            target="_blank"
            rel="noopener noreferrer"
            className="youtube-button"
            data-aos="fade-up" // Add AOS animation here
            data-aos-delay="200" // Add delay for staggered effect
          >
            <BsYoutube size={24} className="icon--component" />{" "}
            {t("listenOnYoutube")} {/* Updated button text */}
          </a>
          {/* New SoundCloud button */}
          <a
            href="https://on.soundcloud.com/MdQp4fFCa2diaot28H"
            target="_blank"
            rel="noopener noreferrer"
            className="soundcloud-button"
            data-aos="fade-up"
            data-aos-delay="250"
          >
            <FaSoundcloud size={24} className="icon--component" /> Voş set
          </a>
        </div>
      </div>
    </section>
  );
};

export default Remix;
