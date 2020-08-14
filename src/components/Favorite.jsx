import React from "react";
import { Button } from "@material-ui/core";
import { useEffect } from "react";
import { db } from "../firebase";
import { useState } from "react";
import { useSelector } from "react-redux";

const Favorite = ({ movies, movieId }) => {
  const [favorites, setFavorites] = useState([]);
  const favorite = useSelector((state) => state.favorite);
  console.log(favorite);

  useEffect(() => {
    db.collection("favorite").onSnapshot((snapshot) =>
      setFavorites(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);

  return (
    <div>
      {favorites.map((movie, i) => (
        <p key={i}>{movie.movieTitle}</p>
      ))}
    </div>
  );
};

export default Favorite;
