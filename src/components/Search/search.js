import { React, useEffect } from "react";
import { useQuery } from "react-query";
import { useParams, useSearchParams } from "react-router-dom";
import { Apiservice } from "../Service/api.service";
import { Box, Container, Typography } from "@mui/material";
import Videos from "../Videos/Videos";

const SearchItems = () => {
  const { id } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("search") || "";
  useEffect(() => {
    setSearchParams({ query_search: id });
  }, [id]);
  console.log();
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
