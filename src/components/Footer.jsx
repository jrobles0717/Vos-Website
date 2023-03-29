import "../../css/index.css";
import "../../css/style.css";

import { useEffect } from "react";

function Footer() {
  useEffect(() => {
    // Set current year
    const yearEl = document.querySelector(".year");
    const currentYear = new Date().getFullYear();
    yearEl.textContent = currentYear;
  }, []);

  return (
    <footer className="footer">
      <div className="container">
        <p className="copyright">
          Copyright &copy; <span className="year">2028</span> by Voş. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
