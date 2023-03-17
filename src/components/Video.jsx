import "../../css/index.css";
import "../../css/style.css";

import PropTypes from "prop-types";
import React from "react";

function Video({ embedId, title }) {
  return (
    <div className="container-video">
      <iframe
        width="500vh"
        height="315"
        src={`https://www.youtube.com/embed/${embedId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title={title}
        className="video"
      ></iframe>
    </div>
  );
}

Video.propTypes = {
  embedId: PropTypes.string.isRequired,
};

export default Video;
