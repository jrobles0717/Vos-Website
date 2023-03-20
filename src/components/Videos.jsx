import "../../css/index.css";
import "../../css/style.css";

import Video from "./Video";

function Videos() {
  return (
    <section className="section-videos" id="videos">
      <div className="container">
        <h2 className="title">Videos</h2>

        <div className="container-videos">
          <Video embedId="UmJEMCqjl3w" title="Saudades" />
          <Video embedId="d2feZqdh2Zg" title="Antinomias" />
        </div>
      </div>
    </section>
  );
}

export default Videos;
