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
  TextField,
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
      .then((response) =>dispatch(getResults(response.results))) 
  };

  return (
    <div style={{display:"flex", alignItems:"center"}}>
      <TextField
      variant='outlined'
        value={search}
        type="text"
        onChange={handleInput}
        style={{ maxWidth: "500px", padding:"1rem" }}
        placeholder="search movie"
      />
      <Button type="submit" onClick={handleSearch} disabled={search.length < 3}>
        submit
      </Button>
    </div>
  );
};

export default Search;
