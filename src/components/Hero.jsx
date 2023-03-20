import "../../css/index.css";
import "../../css/style.css";

import {
  BsCurrencyExchange,
  BsFacebook,
  BsInstagram,
  BsTiktok,
  BsTwitter,
  BsYoutube,
} from "react-icons/bs";

import { AiOutlineMail } from "react-icons/ai";
import BuyOptions from "./BuyOptions";
import { FaStream } from "react-icons/fa";
import StreamOptions from "./StreamOptions";
import { useState } from "react";

function Hero() {
  const [isStreamBtn, setIsStreamBtn] = useState(false);
  const [isBuyBtn, setIsBuyBtn] = useState(false);

  const StreamBtnHandler = () => {
    if (isBuyBtn) {
      setIsBuyBtn(!isBuyBtn);
      setIsStreamBtn(!isStreamBtn);
    } else {
      setIsStreamBtn(!isStreamBtn);
    }
  };

  const BuyBtnHandler = () => {
    if (isStreamBtn) {
      setIsStreamBtn(!isStreamBtn);
      setIsBuyBtn(!isBuyBtn);
    } else {
      setIsBuyBtn(!isBuyBtn);
    }
  };

  return (
    <section className="section-hero">
      <div className="hero">
        <div className="img-box">
          <picture>
            <img
              src="../../img/vos-img.png"
              className="hero-img"
              alt="Vos photo"
            />
          </picture>
        </div>
        <div className="hero-text-box">
          <h1 className="hero-heading-primary">VOS</h1>
          <p className="hero-text-out">listen now</p>
          <div className="hero-container-btn">
            <div className="option-container-btn">
              <button
                className={`btn btn--options ${
                  isStreamBtn ? "options-btn--active" : ""
                }`}
                onClick={StreamBtnHandler}
              >
                <div className="btn--options-container">
                  <FaStream size={20} />
                  <span className="name-options-btn">stream songs</span>
                </div>
              </button>
              <StreamOptions
                active={isStreamBtn ? "stream-options--active" : ""}
              />
            </div>
            <div className="option-container-btn">
              <button
                className={`btn btn--options cta--options ${
                  isBuyBtn ? "options-btn--active" : ""
                }`}
                onClick={BuyBtnHandler}
              >
                <div className="btn--options-container">
                  <BsCurrencyExchange size={20} />
                  <span className="name-options-btn">buy songs</span>
                </div>
              </button>
              <BuyOptions active={isBuyBtn ? "stream-options--active" : ""} />
            </div>
          </div>
          {/* {<BuyOptions active={isBuyBtn ? "stream-options--active" : ""} />}
          <StreamOptions active={isStreamBtn ? "stream-options--active" : ""} /> */}
          <div className="hero-icons">
            <a
              href="https://www.facebook.com/esvosh/"
              target="_blank"
              className="icon"
              onClick={() => {}}
            >
              <BsFacebook size={22} className="icon--component" />
            </a>
            <a
              href="https://twitter.com/esvosh"
              target="_blank"
              className="icon"
            >
              <BsTwitter size={22} className="icon--component" />
            </a>
            <a
              href="https://www.instagram.com/es.vosh/"
              target="_blank"
              className="icon"
            >
              <BsInstagram size={22} className="icon--component" />
            </a>
            <a
              href="https://www.tiktok.com/@esvosh"
              target="_blank"
              className="icon"
            >
              <BsTiktok size={22} className="icon--component" />
            </a>
            <a
              href="https://www.youtube.com/channel/UCBJTfaNRAmX97_LgTlhRIIA"
              target="_blank"
              className="icon"
            >
              <BsYoutube size={24} className="icon--component" />
            </a>
            <a
              href="mailto:esvoshmusic@gmail.com"
              target="_blank"
              className="icon"
            >
              <AiOutlineMail size={24} className="icon--component" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
