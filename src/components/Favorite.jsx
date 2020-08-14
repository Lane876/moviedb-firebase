import React from "react";
import { Button } from "@material-ui/core";
import { useEffect } from "react";
import { db } from "../firebase";
import { useState } from "react";
import { useSelector } from "react-redux";

const Favorite = () => {
  const [favorites, setFavorites] = useState([]);
  const user = useSelector((state) => state.user.user);
  const useruid = user?.uid;


  useEffect(() => {
    const fetchData = async () => {
      const data = await db.collection(`${useruid}`).get();
      setFavorites(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    fetchData();
  }, []);




  return (
    <div>
      {favorites.map((movie, i) => (
        <div key={i}>
          <p>{movie.movieTitle}</p>
          <button onClick={()=> db.collection(`${useruid}`).doc(movie.id).delete()}>delete</button>
        </div>
      ))}
    </div>
  );
};

export default Favorite;
