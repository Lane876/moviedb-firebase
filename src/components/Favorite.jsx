import React from "react";
import { Button } from "@material-ui/core";

const Favorite = () => {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button variant="contained">Add to favorite</Button>
      </div>
    </div>
  );
};

export default Favorite;
