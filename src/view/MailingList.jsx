import "../../css/index.css";
import "../../css/style.css";

import { useTranslation } from "react-i18next"; // Import useTranslation

function MailingList() {
  const { t } = useTranslation(); // Initialize translation

  return (
    <section className="section-mailing" id="subscribe">
      {" "}
      {/* Changed id to subscribe */}
      <div className="container">
        <h2 className="title" data-aos="fade-up">
          {" "}
          {/* Add AOS animation here */}
          {t("subscribe")}
        </h2>
        <div className="mailing-box" data-aos="fade-up" data-aos-delay="100">
          {" "}
          {/* Add AOS animation here */}
          <div className="mailing-text-box">
            <form
              className="mailing-form"
              name="mailing-list"
              method="POST"
              action="/?success=true"
              data-netlify="true"
              onSubmit="submit"
            >
              <input type="hidden" name="form-name" value="mailing-list" />
              <div>
                <label htmlFor="name">{t("nameLabel")}</label>
                <input
                  id="name"
                  type="text"
                  placeholder="John Smith"
                  name="name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email">{t("emailLabel")}</label>
                <input
                  id="email"
                  type="email"
                  placeholder="jsmith@example.com"
                  name="email"
                  required
                />
              </div>
              <div>
                <label htmlFor="city">{t("cityLabel")}</label>
                <input
                  id="city"
                  type="text"
                  placeholder="San Juan, Puerto Rico"
                  name="city"
                  required
                />
              </div>
              <div>
                <label htmlFor="select-where">{t("selectWhereLabel")}</label>
                <select id="select-where" name="select-where" required>
                  <option value="">{t("selectOption")}</option>
                  <option value="spotify">{t("spotify")}</option>
                  <option value="apple">{t("apple")}</option>
                  <option value="amazon">{t("amazon")}</option>
                  <option value="instagram">{t("instagram")}</option>
                  <option value="twitter">{t("twitter")}</option>
                  <option value="facebook">{t("facebook")}</option>
                  <option value="others">{t("others")}</option>
                </select>
              </div>

              <button className="btn btn--form" type="submit">
                {t("submitButton")}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MailingList;
