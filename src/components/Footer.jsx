import "../../css/index.css";
import "../../css/style.css";

import { useTranslation } from "react-i18next"; // Import useTranslation

function Footer() {
  const { t } = useTranslation(); // Initialize translation
  const currentYear = new Date().getFullYear(); // Get current year

  return (
    <footer className="footer">
      <div className="container">
        <p className="copyright">
          {t("copyright", { year: currentYear })} {/* Use translation */}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
