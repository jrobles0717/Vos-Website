import "../css/index.css";
import "./i18n"; // Import the i18n configuration

import App from "./App";
import React from "react";
import ReactDOM from "react-dom/client";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
