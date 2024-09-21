import { Box, Stack } from "@mui/material";
import React from "react";
import VideoCard from "./Video-card";

const Videos = ({ data, error, isError, isLoading }) => {
  if (isError) {
    return <h3>{error.message}</h3>;
  }
  return (
    <div>
      <Stack
        width={"100%"}
        direction={"row"}
        flexWrap={"wrap"}
        justifyContent={"start"}
        gap={2}
      >
        {isLoading && isLoading ? (
          <h1>loading...</h1>
        ) : (
          data?.items.map((item, index) => (
            <Box key={index}>
              <VideoCard item={item} />
            </Box>
          ))
        )}
      </Stack>
    </div>
  );
};

export default Videos;
