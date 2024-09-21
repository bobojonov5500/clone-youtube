import { Box, Stack } from "@mui/material";
import React from "react";
import Search from "../Search/search-bar";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <Stack
      sx={{
        padding: 1,
        position: "sticky",
        top: "0",
        zIndex: 99,
        background: "#BAF6CA",
        
      }}
      direction={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
    >
      <Link to="/home">
        <img
          width={50}
          src="https://www.svgrepo.com/show/79316/youtube.svg"
          alt="logo"
        />
      </Link>
      <Search />
      <Box />
    </Stack>
  );
}

export default Navbar;
