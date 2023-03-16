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
            <a href="#" className={classes.icon}>
              <BsFacebook size={18} />
            </a>
            <a href="#" className={classes.icon}>
              <BsTwitter size={18} />
            </a>
            <a href="#" className={classes.icon}>
              <BsInstagram size={18} />
            </a>
            <a href="#" className={classes.icon}>
              <BsSpotify size={18} />
            </a>
            <a href="#" className={classes.icon}>
              <BsApple size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
