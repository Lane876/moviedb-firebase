import React from "react";
import { useState } from "react";
import { API_URL, API_KEY, IMAGE_URL } from "../config";
import { useHistory, Link } from "react-router-dom";
import {
  Button,
  Tooltip,
  Fade,
  Paper,
  Typography,
  Modal,
} from "@material-ui/core";
import { getResults } from "../redux/search/searchAction";
import { useDispatch } from "react-redux";

const Search = () => {
  const dispatch = useDispatch();

  const history = useHistory();
  const [search, setSearch] = useState("");
  const [result, setResult] = useState([]);
  const [open, setOpen] = useState(false);
  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetch(`${API_URL}search/movie/?api_key=${API_KEY}&query=${search}`)
      .then((response) => response.json())
      .then((response) => setResult(response.results));

    dispatch(getResults(result));
  };

  const handleOpen = (id) => {
    setOpen(false);
    history.push(`/movie/${id}`);
    setSearch("");
  };

  console.log(open);

  return (
    <div>
      <input
        value={search}
        type="text"
        onChange={handleInput}
        style={{ width: "500px" }}
      />
      <Button type="submit" onClick={handleSearch} disabled={search.length < 3}>
        submit
      </Button>
      {open && (
        <div style={{ position: "absolute" }}>
          {result.map((movie, index) => (
            <Paper
              key={index}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "left",
                padding: "0.3rem",
                margin: "0.3rem",
              }}
              onClick={() => handleOpen(movie.id)}
            >
              <img src={`${IMAGE_URL}w200${movie.poster_path}`} width="50px" />
              <Typography>{movie.original_title}</Typography>
              <Typography>{movie.year}</Typography>
            </Paper>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
