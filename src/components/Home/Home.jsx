import React, { useEffect, useState } from "react";
import Category from "../Category/Category";
import Videos from "../Videos/Videos";
import { useQuery } from "react-query";
import { Apiservice } from "../Service/api.service";
import { useLocation, useParams } from "react-router-dom";

const Home = () => {
  const location = useLocation();
  const { category } = useParams();
  const [selectedCategory, setSelectedCategory] = useState("Random");

  useEffect(() => {
    setSelectedCategory(location.pathname === "/home" ? "Random" : category);
  }, [location, category]);

  const { data, isLoading, error, isError } = useQuery(
    ["api-fetch", selectedCategory],
    () => Apiservice.fetching(`search?part=snippet&q=${selectedCategory}`)
  );

  return (
    <div className="flex flex-col">
      {/* Category bar */}
      <Category
        setSelectedCategory={setSelectedCategory}
        selectedCategory={selectedCategory}
      />

      {/* Main content */}
      <div className="w-full max-w-[1920px] mx-auto px-5 h-[90vh]">
        <h2 className="text-2xl font-bold mb-4">
          {selectedCategory} <span className="text-red-500">videos</span>
        </h2>

        <Videos
          data={data}
          isLoading={isLoading}
          error={error}
          isError={isError}
        />
      </div>
    </div>
  );
};

export default Home;
