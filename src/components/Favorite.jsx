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
    db.collection(`${useruid}`).onSnapshot(snapshot=>{
      setFavorites(snapshot.docs.map(doc=>({...doc.data(), id: doc.id})))
    })
    
  }, [useruid]);


  
  const handleDelete = async (id) => {
    await db.collection(`${useruid}`).doc(id).delete()
  }

  return (
    <div>
      {favorites.map((movie, i) => (
        <div key={i}>
          <p>{movie.movieTitle}</p>
          <button onClick={()=> handleDelete(movie.id)}>delete</button>
        </div>
      ))}
    </div>
  );
};

export default Favorite;
