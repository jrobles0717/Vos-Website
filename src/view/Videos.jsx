import "../../css/index.css";
import "../../css/style.css";
import "aos/dist/aos.css"; // Import AOS styles

import AOS from "aos"; // Import AOS
import Video from "../components/Video";
import { useEffect } from "react";
import { useTranslation } from "react-i18next"; // Import useTranslation

function Videos() {
  const { t } = useTranslation(); // Initialize translation

  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Initialize AOS with a duration of 1 second
  }, []);

  return (
    <section className="section-videos" id="videos">
      <div className="container">
        <h2 className="title" data-aos="fade-up">
          {t("videosTitle")}
        </h2>

        <div className="container-videos">
          <div data-aos="fade-up" data-aos-delay="100">
            <Video embedId="UmJEMCqjl3w" title="Saudades" />
          </div>
          <div data-aos="fade-up" data-aos-delay="200">
            <Video embedId="d2feZqdh2Zg" title="Antinomias" />
          </div>
          <div data-aos="fade-up" data-aos-delay="300">
            <Video embedId="FrnPuGPt4ls" title="Bayoya" />
          </div>
          <div data-aos="fade-up" data-aos-delay="400">
            <Video embedId="RQ3cl6uFa2I" title="Ryo" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Videos;
