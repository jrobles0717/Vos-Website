import "../../../css/index.css";
import "../../../css/style.css";

import { useTranslation } from "react-i18next"; // Import useTranslation
import vosImg1 from "../../../img/vos-1.jpg";
import vosImg2 from "../../../img/vos-2.jpg";
import vosImg3 from "../../../img/vos-3.jpg";
import vosImg4 from "../../../img/vos-4.jpeg";

function AboutMe() {
  const { t } = useTranslation(); // Initialize translation

  return (
    <section className="section-about" id="about">
      <div className="container">
        <h2 className="title">{t("aboutMeTitle")}</h2>
        <div className="container--about-box">
          <div className="about-box">
            <h3 className="secondary-title">{t("aboutVoş")}</h3>
            <p className="paragraph-text">{t("aboutVoşDescription")}</p>
          </div>
          <div className="grid--gallery">
            <figure className="gallery-item">
              <img src={vosImg2} alt="Gallery of Voş photos" />
            </figure>
            <figure className="gallery-item">
              <img src={vosImg1} alt="Gallery of Voş photos" />
            </figure>
            <figure className="gallery-item">
              <img src={vosImg3} alt="Gallery of Voş photos" />
            </figure>
            <figure className="gallery-item">
              <img src={vosImg4} alt="Gallery of Voş photos" />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
