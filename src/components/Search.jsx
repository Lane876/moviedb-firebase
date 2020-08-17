import React from "react";
import { useState } from "react";
import { API_URL, API_KEY } from "../config";

import {
  Button,
  TextField,
  InputAdornment,
} from "@material-ui/core";
import { getResults } from "../redux/search/searchAction";
import {handleList} from '../redux/handleOpen/listAction'
import SearchIcon from '@material-ui/icons/Search';
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const Search = () => {
  const history = useHistory()
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
 
  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetch(`${API_URL}search/movie/?api_key=${API_KEY}&query=${search}`)
      .then((response) => response.json())
      .then((response) =>dispatch(getResults(response.results))) 

      dispatch(handleList(true))
      setSearch('')
  };

  return (
    <div style={{display:"flex", alignItems:"center", marginLeft:"2rem"}}>
      <TextField
      variant='outlined'
        value={search}
        type="text"
        onChange={handleInput}
        label='Search movie...'
        style={{ maxWidth: "500px" }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="start">
              <SearchIcon type="button" onClick={handleSearch} disabled={search.length < 3} style={{cursor:"pointer"}}/>
            </InputAdornment>
          ),
        }}
        
      />
    </div>
  );
};

export default Search;
