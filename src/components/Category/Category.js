import React from "react";
import { category } from "../constant/constant";
import { Link } from "react-router-dom";

const Category = ({ setSelectedCategory, selectedCategory }) => {
  const HandlerCategoryChange = (name) => {
    setSelectedCategory(name);
  };

  return (
    <div className="flex flex-row overflow-x-auto gap-2 scrollbar-hide">
      {category.map((item, index) => (
        <Link
          to={`/home/${item.name}`}
          key={index}
          onClick={() => HandlerCategoryChange(item.name)}
          className={`
            flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap
            transition-colors duration-200 hover:bg-red-500 hover:text-white
            ${
              selectedCategory === item.name
                ? "bg-red-500 text-white"
                : "bg-transparent text-black"
            }
          `}
        >
          <span>{item.icon}</span>
          <span className="font-bold">{item.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Category;
