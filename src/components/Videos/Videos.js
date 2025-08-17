import React from "react";
import { Grid2 } from "@mui/material";
import VideoCard from "./Video-card";

const Videos = ({ data, error, isError, isLoading }) => {
  if (isError) {
    return <h3>{error.message}</h3>;
  }

  return (
    <Grid2
      container
  spacing={2}
  justifyContent="center"
    >
      {isLoading ? (
        <h1>loading...</h1>
      ) : (
        data?.items.map((item, index) => (
         <Grid2
      key={index}
  xs={12}   // mobil - 1 card
  sm={6}    // ≥600px - 2 card
  md={4}    // ≥900px - 3 card
  lg={3}    // ≥1200px - 4 card
  xl={3}    // ≥1536px - 4 card
    >
      <VideoCard item={item} />
    </Grid2>
        ))
      )}
    </Grid2>
  );
};

export default Videos;
