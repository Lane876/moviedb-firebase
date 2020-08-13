import React from "react";
// import { Paper, Grid } from '@material-ui/core'

const GridPart = ({ image, movieId, actor }) => {
  if (actor) {
    return (
      <div style={{ margin: "2px" }}>
        <img
          src={image}
          alt=""
          style={{ maxWidth: "100%", maxHeight: "320px" }}
        />
      </div>
    );
  } else {
    return (
      <a href={`/movie/${movieId}`} style={{ margin: "3px" }}>
        <img
          src={image}
          alt=""
          style={{ maxWidth: "100%", maxHeight: "400px" }}
        />
      </a>
    );
  }
};

export default GridPart;
