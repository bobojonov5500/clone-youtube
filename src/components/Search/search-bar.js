import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi"; 

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
    <form
      onSubmit={OnHandler}
      className="flex items-center bg-white rounded-full px-3 py-1 shadow-sm border border-gray-300"
    >
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="text"
        placeholder="Search..."
        className="outline-none flex-1 px-2 text-sm"
      />
      <button
        type="submit"
        className="text-gray-600 hover:text-red-500 transition-colors"
      >
        <FiSearch size={20} />
      </button>
    </form>
  );
};

export default Search;
