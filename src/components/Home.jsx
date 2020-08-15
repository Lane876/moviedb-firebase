import React, { useState } from "react";
import { useEffect } from "react";
import { API_URL, API_KEY, IMAGE_URL } from "../config";
import { Typography, Button } from "@material-ui/core";
import MainImage from "./MainImage";
import GridPart from "./GridPart";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  useEffect(() => {
    const endPoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
    fetchMovies(endPoint);
  }, []);

  function fetchMovies(path) {
    fetch(path)
      .then((response) => response.json())
      .then((response) => {
        setMovies([...movies, ...response.results]);
        setCurrentPage(response.page);
      });
  }

  function handleLoad() {
    const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${
      currentPage + 1
    }`;
    fetchMovies(endpoint);
  }

  return (
    <div>
      {movies[0] && (
        <MainImage
          image={`${IMAGE_URL}w1280${movies[0].backdrop_path}`}
          title={movies[0].original_title}
          text={movies[0].overview}
        />
      )}

      <div style={{ width: "85%", margin: "1rem auto" }}>
        <Typography variant="h4">Popular</Typography>
      </div>

      <div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {movies &&
            movies.map((movie, index) => (
              <React.Fragment key={index}>
                <GridPart
                  id="#down"
                  image={
                    movie.poster_path && `${IMAGE_URL}w500${movie.poster_path}`
                  }
                  movieId={movie.id}
                />
              </React.Fragment>
            ))}
        </div>
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", padding: "1rem" }}
      >
        <Button variant="contained" onClick={handleLoad}>
          Load More
        </Button>
      </div>
    </div>
  );
};

export default Home;
