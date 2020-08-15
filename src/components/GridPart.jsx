import React from "react";
// import { Paper, Grid } from '@material-ui/core'

const GridPart = ({ image, movieId, actor, crew }) => {
  if (actor) {
    return (
      <div style={{ margin: "2px", position:"relative", zIndex:"-1" }}>
        <img
          src={image}
          alt=""
          style={{ maxWidth: "100%", maxHeight: "320px",  }}
        />
        <p style={{position:"absolute", bottom:"-10px", left:"0px", right:"0px", color:'white', fontWeight:"600", backgroundColor:`rgba(0,0,0,0.5)`, padding:"10px"}}>{crew.name} as {crew.character}</p>
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
