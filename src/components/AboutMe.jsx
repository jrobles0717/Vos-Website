import "../../css/index.css";
import "../../css/style.css";

import vosImg1 from "../../img/vos-1.jpg";
import vosImg2 from "../../img/vos-2.jpg";
import vosImg3 from "../../img/vos-3.jpg";
import vosImg4 from "../../img/vos-4.jpg";

function AboutMe() {
  return (
    <section className="section-about" id="about">
      <div className="container">
        <h2 className="title">About Me</h2>
        <div className="container--about-box">
          <div className="about-box">
            {/* <h3 className={classes.secondaryTitle}>
              I always dreamed beyong the sky
            </h3> */}
            <h3 className="secondary-title">So, who is he?</h3>
            <p className="paragraph-text">
              {/* <strong className={classes.firstLetter}>L</strong>orem ipsum */}
              <span className="paragraph-text--bold">Voş</span>, pronounced
              “vosh”, was born and raised in San Juan, Puerto Rico. He began
              writing songs when he was 16 years old and, after 11 years of
              individually connecting with music & lyrics, is finally exposing
              himself as an artist. As a control enthusiast introvert but also
              as a rebel and outrageous creative aries, his music genre lands
              into experimental music cause it gives him the freedom to explore
              authentic sounds. And this is, from the most subtle sounds to the
              most aggressive ones. At the moment, voş is creating fusions with
              genres such as{" "}
              <span className="paragraph-text--bold">Electronic</span>,{" "}
              <span className="paragraph-text--bold">House</span>,{" "}
              <span className="paragraph-text--bold">Chillwave</span>,{" "}
              <span className="paragraph-text--bold">Jazz</span>,{" "}
              <span className="paragraph-text--bold">Rock</span>, and{" "}
              <span className="paragraph-text--bold">R&B</span>. But those won't
              be the only ones he'll be exploring.
            </p>
            <p className="paragraph-text">
              After releasing his two singles, his taking the time to learn more
              about music production and working with many projects a long
              friends so eventually you’ll hear more about it. As a work in
              progress, he’s open to collaborate with producers and artists so
              feel free to email him or write him on his social media if you’re
              interested to create music for the future that is now.
            </p>
          </div>
          <div className="grid--gallery">
            <figure className="gallery-item">
              <img src={vosImg2} alt="Gallery of Voş photos" />
            </figure>
            <figure className="gallery-item">
              <img src={vosImg1} alt="Gallery of Voş photos" />
            </figure>
            <figure className="gallery-item">
              <img src={vosImg3} alt="Gallery of Voş photos" />
            </figure>
            <figure className="gallery-item">
              <img src={vosImg4} alt="Gallery of Voş photos" />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
