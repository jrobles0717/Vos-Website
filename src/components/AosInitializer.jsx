import "aos/dist/aos.css";

// AosInitializer.js
import React, { useEffect } from "react";

import AOS from "aos";

const AosInitializer = ({ children }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Whether animation should happen only once
    });
  }, []);

  return <>{children}</>; // Render children components
};

export default AosInitializer;
