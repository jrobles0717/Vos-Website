import "../../../css/index.css";
import "../../../css/style.css";

import vosImg1 from "../../../img/vos-1.jpg";
import vosImg2 from "../../../img/vos-2.jpg";
import vosImg3 from "../../../img/vos-3.jpg";
import vosImg4 from "../../../img/vos-4.jpeg";

function AboutMe() {
  return (
    <section className="section-about" id="about">
      <div className="container">
        <h2 className="title">About Me</h2>
        <div className="container--about-box">
          <div className="about-box">
            <h3 className="secondary-title">Sobre Voş</h3>
            <p className="paragraph-text">
              <span className="paragraph-text--bold">Voş</span>, pronunciado
              "vosh", nació y creció en San Juan, Puerto Rico. Empezó a escribir
              canciones a los 16 años y, luego de 11 años de conectar
              individualmente con la música y las letras, finalmente, se está
              exponiendo como artista. Debido a su curiosidad y ganas de crear
              propuestas sonoras excéntricas, su género musical aterriza en la
              música experimental que reúne géneros como el{" "}
              <span className="paragraph-text--bold">House</span>,{" "}
              <span className="paragraph-text--bold">Soul</span>,{" "}
              <span className="paragraph-text--bold">Electrónica</span>,{" "}
              <span className="paragraph-text--bold">Rock</span>,{" "}
              <span className="paragraph-text--bold">R&B</span>, and{" "}
              <span className="paragraph-text--bold">Jazz</span>. Y todo esto,
              con su toque caribeño.
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
