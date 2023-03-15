import classes from "./Hero.module.css";

function Hero() {
  return (
    <section className={classes.section}>
      <div className={classes.hero}>
        <div className={classes.imgBox}>
          <picture>
            <img
              src="../../img/vos-img.jpg"
              className={classes.img}
              alt="Vos photo"
            />
          </picture>
        </div>
        <div className={classes.textBox}>
          <h1 className={classes.headingPrimary}>VOS</h1>
          <p className={classes.textOut}>out now</p>
          <div className={classes.containerBtn}>
            <a href="#" className={classes.btn}>
              stream songs
            </a>
            <a href="#" className={classes.btn}>
              buy songs
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
