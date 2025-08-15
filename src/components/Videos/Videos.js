import { Box, Stack } from "@mui/material";
import React from "react";
import VideoCard from "./Video-card";

const Videos = ({ data, error, isError, isLoading }) => {
  if (isError) {
    return <h3>{error.message}</h3>;
  }

  return (
    <Stack
      sx={{ maxWidth: "1920px", width: "100%", margin: "0 auto" }}
      direction={"row"}
      flexWrap={"wrap"}
      justifyContent={"space-between"}
      gap={2}
    >
      {isLoading ? (
        <h1>loading...</h1>
      ) : (
        data?.items.map((item, index) => (
          <Box key={index}>
            <VideoCard item={item} />
          </Box>
        ))
      )}
    </Stack>
  );
};

export default Videos;
