import PropTypes from "prop-types";
import React from "react";
import classes from "./Videos.module.css";

function Video({ embedId, title }) {
  return (
    <div className={classes.containerVideo}>
      <iframe
        width="500vh"
        height="315"
        src={`https://www.youtube.com/embed/${embedId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title={title}
        className={classes.video}
      ></iframe>
    </div>
  );
}

Video.propTypes = {
  embedId: PropTypes.string.isRequired,
};

export default Video;
