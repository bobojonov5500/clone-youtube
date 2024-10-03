import { Stack } from "@mui/material";
import React from "react";
import { category } from "../constant/constant";
import { Link, useParams } from "react-router-dom";

const Category = ({ setSelectedCategory, selectedCategory }) => {
  const HandlerCategoryChange = (name) => {
    setSelectedCategory(name);
  };
  return (
    <Stack direction={"row"} sx={{ overflowX: "scroll" }}>
      {category.map((item, index) => (
        <Link
          to={`/home/${item.name}`}
          style={{
            textDecoration: "none",
            background:
              selectedCategory === item.name ? "rgb(175, 101, 101)" : "",
          }}
          onClick={() => HandlerCategoryChange(item.name)}
          className="category-btn"
          key={index}
        >
          <span
            style={{ color: selectedCategory === item.name ? "white" : "" }}
          >
            {item.icon}
          </span>
          <span style={{ color: "black", fontWeight: "bold" }}>
            {item.name}
          </span>
        </Link>
      ))}
    </Stack>
  );
};

export default Category;
