import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { Apiservice } from "../Service/api.service";
import { Box, Container, Typography } from "@mui/material";
import Videos from "../Videos/Videos";

const SearchItems = () => {
  const { id } = useParams();
  const { data, isLoading, error, isError } = useQuery(
    ["search-query", id],
    () => Apiservice.fetching(`search?part=snippet&q=${id}`),
    {
      refetchOnWindowFocus: false,
    }
  );
  return (
    <Box>
      <Container maxWidth={"90%"}>
        <Typography
          sx={{ fontWeight: "bold", my: 2, fontFamily: "sans-serif" }}
        >
          {isError ? (
            " "
          ) : (
            <span>
              Search results for <span style={{ color: "red" }}>{id}</span> {""}
              videos
            </span>
          )}
        </Typography>
        <Videos
          data={data}
          isLoading={isLoading}
          error={error}
          isError={isError}
        />
      </Container>
    </Box>
  );
};

export default SearchItems;
