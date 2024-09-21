import { Stack, Box, Container, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Category from "../Category/Category";
import Videos from "../Videos/Videos";
import { useQuery } from "react-query";
import { Apiservice } from "../Service/api.service";
import { useLocation, useParams } from "react-router-dom";

const Home = () => {
  const location = useLocation();
  const { category } = useParams();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [fetchOnMount, setFetchOnMount] = useState(true);

  useEffect(() => {
    if (location.pathname === "/home") {
      setSelectedCategory("Random");
    } else {
      setSelectedCategory(category);
    }
    setFetchOnMount(true);
  }, [location]);
  const { data, isLoading, error, isError } = useQuery(
    ["api-fetch", selectedCategory],
    () => Apiservice.fetching(`search?part=snippet&q=${selectedCategory}`),
    {
      enabled: fetchOnMount,
      onSuccess: () => setFetchOnMount(false),
    }
  );
  return (
    <Stack>
      <Category
        setSelectedCategory={setSelectedCategory}
        selectedCategory={selectedCategory}
      />
      <Box sx={{ height: "90vh", padding: "20px" }}>
        <Container maxWidth="90%">
          <Typography variant="h4" fontWeight={"bold"} mb={2}>
            {selectedCategory} <span style={{ color: "red" }}>videos</span>
          </Typography>
          <Videos
            data={data}
            isLoading={isLoading}
            error={error}
            isError={isError}
          />
        </Container>
      </Box>
    </Stack>
  );
};

export default Home;
