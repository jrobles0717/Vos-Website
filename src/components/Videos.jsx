import Video from "./Video";
import classes from "./Videos.module.css";

function Videos() {
  return (
    <section className={classes.section}>
      <div className={classes.container}>
        <h2 className={classes.title}>Videos</h2>
        <div className={classes.containerVideos}>
          <Video embedId="UmJEMCqjl3w" title="Saudades" />
          <Video embedId="d2feZqdh2Zg" title="Antinomias" />
        </div>
      </div>
    </section>
  );
}

export default Videos;
