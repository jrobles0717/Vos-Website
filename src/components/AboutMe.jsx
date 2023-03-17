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
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor ea
              nemo maxime? In, tenetur laborum autem illo ullam eaque voluptatem
              iure esse eius voluptate dicta odit voluptatibus. Provident, vero
              eligendi! Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Est animi at quidem dolore soluta officia doloribus, iste
              repudiandae magni accusamus voluptas eos hic dignissimos tenetur
              porro ex nisi eaque? Odit?
            </p>
            <p className="paragraph-text">
              Dorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi
              quis odit quae pariatur corporis debitis sint, maxime ipsam iste
              reprehenderit laborum sapiente quia qui, quod ducimus. Eligendi
              voluptatem ea blanditiis. Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Voluptatem iure aspernatur in velit hic officiis
              pariatur at officia neque voluptates error, vitae, adipisci minus
              corrupti distinctio eum praesentium quibusdam culpa!
            </p>
          </div>
          <div className="grid--gallery">
            <figure className="gallery-item">
              <img src="../../img/vos-2.jpg" alt="Gallery of Vos photos" />
            </figure>
            <figure className="gallery-item">
              <img src="../../img/vos-1.jpg" alt="Gallery of Vos photos" />
            </figure>
            <figure className="gallery-item">
              <img src="../../img/vos-3.jpg" alt="Gallery of Vos photos" />
            </figure>
            <figure className="gallery-item">
              <img src="../../img/vos-4.jpg" alt="Gallery of Vos photos" />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
