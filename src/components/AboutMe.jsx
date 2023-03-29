import "../../css/index.css";
import "../../css/style.css";

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
            <h3 className="secondary-title">So, who am I?</h3>
            <p className="paragraph-text">
              {/* <strong className={classes.firstLetter}>L</strong>orem ipsum */}
              <span className="paragraph-text--bold">Voş</span>, pronounced
              “vosh”, was born and raised in San Juan, Puerto Rico. He began
              writing songs when he was 16 years old and, after 11 years of
              individually connecting with music & lyrics, is finally exposing
              himself as an artist. Voş’ music style lands into experimental
              music and incorporates elements like art and dance as a compliment
              to lead listeners through the story of his songs. Similarly, his
              future projects include fusions with genres such as{" "}
              <span className="paragraph-text--bold">Electronic</span>,{" "}
              <span className="paragraph-text--bold">House</span>,{" "}
              <span className="paragraph-text--bold">Chillwave</span>,{" "}
              <span className="paragraph-text--bold">Jazz</span>,{" "}
              <span className="paragraph-text--bold">Rock</span>, and{" "}
              <span className="paragraph-text--bold">R&B</span>. Although the
              themes in his songs are based on life experiences, he takes the
              time to interpret his lyrics in a generic way so that anyone can
              identify with them and give them their own interpretation
              according to their own experiences.
            </p>
            <p className="paragraph-text">
              His first House single,{" "}
              <span className="paragraph-text--bold">ANTINOMIAS</span>, a
              mixture of upbeat sounds and tropical elements, expresses the
              contradictions of love: what is said versus what is done. Now, voş
              most recent single,{" "}
              <span className="paragraph-text--bold">SAUDADES</span>, reflects
              on the feeling of missing someone who is far away or no longer
              near. Through a sublime and intimate sound, listeners will
              encounter strong feelings of nostalgia. These songs have been
              worked with producer{" "}
              <span className="paragraph-text--bold">William Russell</span> and
              himself. At the moment, his taking the time to learn more about
              music production and working with many projects a long friends so
              eventually you’ll hear more about it. As a work in progress, he’s
              open to collaborate with producers and artists so feel free to
              email him or write him on his social media if you’re interested to
              create music for the future that is now.
            </p>
          </div>
          <div className="grid--gallery">
            <figure className="gallery-item">
              <img src="../img/vos-2.jpg" alt="Gallery of Voş photos" />
            </figure>
            <figure className="gallery-item">
              <img src="../img/vos-1.jpg" alt="Gallery of Voş photos" />
            </figure>
            <figure className="gallery-item">
              <img src="../img/vos-3.jpg" alt="Gallery of Voş photos" />
            </figure>
            <figure className="gallery-item">
              <img src="../img/vos-4.jpg" alt="Gallery of Voş photos" />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
