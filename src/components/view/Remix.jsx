import "../../../css/index.css";
import "../../../css/style.css";

import React from "react";

const Remix = () => {
  return (
    <section className="section-about" id="remixes">
      <div className="remix-container">
        <div className="background-overlay">
          <h1 className="remix-title">REMIXES</h1>
          <p className="statement">
            ¿Estás en busca de música ‘house’ exclusiva para tu evento o
            actividad?
            <br />
            <span className="booking-text">
              Contáctame enviando un{" "}
              <a href="mailto:esvoshmusic@gmail.com" className="email-link">
                correo electrónico.
              </a>
            </span>
          </p>
          <a
            href="https://on.soundcloud.com/BJoje2jyGqBGsQ8y8"
            target="_blank"
            rel="noopener noreferrer"
            className="soundcloud-button"
          >
            Escucha en SoundCloud
          </a>
        </div>
      </div>
    </section>
  );
};

export default Remix;
