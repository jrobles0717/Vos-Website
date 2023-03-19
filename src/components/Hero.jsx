import "../../css/index.css";
import "../../css/style.css";

import { AiFillAmazonCircle, AiOutlineAmazon } from "react-icons/ai";
import {
  BsApple,
  BsFacebook,
  BsInstagram,
  BsSpotify,
  BsTwitter,
} from "react-icons/bs";

function Hero() {
  return (
    <section className="section-hero" id="hero">
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
            <a href="#" className="btn">
              stream songs
            </a>
            <a href="#" className="btn">
              buy songs
            </a>
          </div>
          <div className="hero-icons">
            <a
              href="https://www.facebook.com/esvosh/"
              target="_blank"
              className="icon"
              onClick={() => {}}
            >
              <BsFacebook size={18} className="icon--component" />
            </a>
            <a
              href="https://twitter.com/esvosh"
              target="_blank"
              className="icon"
            >
              <BsTwitter size={18} className="icon--component" />
            </a>
            <a
              href="https://www.instagram.com/es.vosh/"
              target="_blank"
              className="icon"
            >
              <BsInstagram size={18} className="icon--component" />
            </a>
            <a
              href="https://open.spotify.com/artist/1D11d1x5X1HQ9govpTp5On?si=GWRNNaKLT5OcztppEqqXUA&nd=1"
              target="_blank"
              className="icon"
            >
              <BsSpotify size={18} className="icon--component" />
            </a>
            <a
              href="https://music.apple.com/us/artist/vo%C5%9F/1583875289"
              target="_blank"
              className="icon"
            >
              <BsApple size={18} className="icon--component" />
            </a>
            <a
              href="https://music.amazon.com/artists/B09F5KYTNW/voş?ref=dm_sh_oWjmMi53AFa05UFgDsZdFY59O"
              target="_blank"
              className="icon"
            >
              <AiFillAmazonCircle
                size={22}
                className="icon--component icon--component-amazon"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
