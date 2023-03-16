import classes from "./Videos.module.css";

function Videos() {
  return (
    <section className={classes.section}>
      <div className={classes.container}>
        <h2 className={classes.title}>Videos</h2>
        <div className={classes.containerVideo}>
          <iframe
            src="https://youtu.be/UmJEMCqjl3w"
            className={classes.video}
            width="500vh"
            height="315"
            title="Saudades"
          ></iframe>
          <iframe
            src="https://youtu.be/d2feZqdh2Zg"
            className={classes.video}
            width="500vh"
            height="315"
            title="Antinomias"
          ></iframe>
          <iframe
            src="https://www.youtube.com/watch?v=UmJEMCqjl3w"
            className={classes.video}
            width="500vh"
            height="315"
          ></iframe>
          <iframe
            src="https://youtu.be/UmJEMCqjl3w"
            className={classes.video}
            width="500vh"
            height="315"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default Videos;
