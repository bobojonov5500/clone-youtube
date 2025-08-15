import { Stack, Container, Typography } from "@mui/material";
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
    <Stack>
      <Category
        setSelectedCategory={setSelectedCategory}
        selectedCategory={selectedCategory}
      />

      <Container sx={{ height: "90vh", padding: "20px" }} maxWidth={false}>
        <Typography variant="h4" fontWeight="bold" mb={2}>
          {selectedCategory} <span style={{ color: "red" }}>videos</span>
        </Typography>

        <Videos
          data={data}
          isLoading={isLoading}
          error={error}
          isError={isError}
        />
      </Container>
    </Stack>
  );
};

export default Home;
