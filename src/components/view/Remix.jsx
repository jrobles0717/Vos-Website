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
            Elevate your event with a top-tier house DJ. For bookings,{" "}
            <a href="mailto:esvoshmusic@gmail.com" className="email-link">
              email me
            </a>
          </p>
          <a
            href="https://on.soundcloud.com/BJoje2jyGqBGsQ8y8"
            target="_blank"
            rel="noopener noreferrer"
            className="soundcloud-button"
          >
            Listen on SoundCloud
          </a>
        </div>
      </div>
    </section>
  );
};

export default Remix;
