import { AiFillAmazonCircle, AiOutlineAmazon } from "react-icons/ai";
import {
  BsApple,
  BsFacebook,
  BsInstagram,
  BsSpotify,
  BsTwitter,
} from "react-icons/bs";

import classes from "./Hero.module.css";

function Hero() {
  return (
    <section className={classes.section}>
      <div className={classes.hero}>
        <div className={classes.imgBox}>
          <picture>
            <img
              src="../../img/vos-img.png"
              className={classes.img}
              alt="Vos photo"
            />
          </picture>
        </div>
        <div className={classes.textBox}>
          <h1 className={classes.headingPrimary}>VOS</h1>
          <p className={classes.textOut}>listen now</p>
          <div className={classes.containerBtn}>
            <a href="#" className={classes.btn}>
              stream songs
            </a>
            <a href="#" className={classes.btn}>
              buy songs
            </a>
          </div>
          <div className={classes.icons}>
            <a
              href="https://www.facebook.com/esvosh/"
              target="_blank"
              className={classes.icon}
            >
              <BsFacebook size={18} />
            </a>
            <a
              href="https://twitter.com/esvosh"
              target="_blank"
              className={classes.icon}
            >
              <BsTwitter size={18} />
            </a>
            <a
              href="https://www.instagram.com/es.vosh/"
              target="_blank"
              className={classes.icon}
            >
              <BsInstagram size={18} />
            </a>
            <a
              href="https://open.spotify.com/artist/1D11d1x5X1HQ9govpTp5On?si=GWRNNaKLT5OcztppEqqXUA&nd=1"
              target="_blank"
              className={classes.icon}
            >
              <BsSpotify size={18} />
            </a>
            <a
              href="https://music.apple.com/us/artist/vo%C5%9F/1583875289"
              target="_blank"
              className={classes.icon}
            >
              <BsApple size={18} />
            </a>
            <a
              href="https://music.amazon.com/artists/B09F5KYTNW/voş?ref=dm_sh_oWjmMi53AFa05UFgDsZdFY59O"
              target="_blank"
              className={classes.icon}
            >
              <AiFillAmazonCircle size={22} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
