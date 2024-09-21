import { IconButton, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [value, setValue] = useState("");
  const navigate = useNavigate();
  const OnHandler = (e) => {
    e.preventDefault();
    if (value) {
      navigate(`/search/${value}`);
    }
  };
  return (
    <Paper
      onSubmit={OnHandler}
      component={"form"}
      sx={{ pl: 2, boxShadow: "none" }}
    >
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="search-input"
        type="text"
        placeholder="Search..."
      />
      <IconButton type="submit">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default Search;
