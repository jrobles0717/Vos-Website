import "../../css/index.css";
import "../../css/style.css";

import {
  BsCurrencyExchange,
  BsFacebook,
  BsFillCheckCircleFill,
  BsInstagram,
  BsTiktok,
  BsTwitter,
  BsYoutube,
} from "react-icons/bs";
import { useEffect, useState } from "react";

import { AiOutlineMail } from "react-icons/ai";
import BuyOptions from "./BuyOptions";
import { FaStream } from "react-icons/fa";
import StreamOptions from "./StreamOptions";
import TwitterIcon from "./icons/TwitterIcon";
import vosImg from "../../img/vosh-hero-pic.png";

function Hero() {
  const [isStreamBtn, setIsStreamBtn] = useState(false);
  const [isBuyBtn, setIsBuyBtn] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (window.location.search.includes("success=true")) {
      setSuccess(true);
      successHandler();
    }
  }, []);

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

  const successHandler = () => {
    setTimeout(() => {
      setSuccess(false);
    }, 3000);
  };

  return (
    <section className="section-hero">
      <div className={`success-msg ${success && "success-msg--active"}`}>
        <BsFillCheckCircleFill className="icon--success" />
        <p className="success-msg-text">
          Successful submission! Thank you for your support!
        </p>
      </div>
      <div className={`hero ${!success && "hero--active"}`}>
        <div className="img-box">
          <picture>
            <img src={vosImg} className="hero-img" alt="Voş photo" />
          </picture>
        </div>
        <div className="hero-text-box">
          <h1 className="hero-heading-primary">Voş</h1>
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
          <div className="hero-icons">
            <a
              href="https://www.facebook.com/esvosh/"
              target="_blank"
              className="icon"
            >
              <BsFacebook size={22} className="icon--component" />
            </a>
            <TwitterIcon />
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
