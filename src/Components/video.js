import React from "react";

function Video (props) {
  return (
    <div className="trail">
      <iframe className="trailer" src={props.trailer}></iframe>
    </div>
  );
}

export default Video;
