import React from "react";
import { useQuery } from "react-query";
import { Apiservice } from "../Service/api.service";
import { Link } from "react-router-dom";
import {
  Avatar,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Typography,
  Checkbox,
} from "@mui/material";
import moment from "moment";

const ChannelVidoes = ({ name }) => {
  const { data, isLoading, isError, error } = useQuery(
    ["channel-vidoes", name],
    () => Apiservice.fetching(`search?part=snippet&channelId=${name}`),
    {
      refetchOnWindowFocus: false,
    }
  );
  if (isError) {
    <h1 style={{ textAlign: "center" }}>{error.message}</h1>;
  }
  return (
    // {
    // data.items.map((item)=>(
    <Stack
      width={"100%"}
      direction={"row"}
      flexWrap={"wrap"}
      justifyContent={"center"}
      gap={2}
      sx={{ padding: { xs: "20px" } }}
    >
      {data &&
        data.items.map((item, index) => (
          <Card
            key={index}
            sx={{
              width: { xs: "100%", sm: "360px", md: "300px" },
            }}
          >
            <Link
              style={{ textDecoration: "none" }}
              to={`/video/${item?.id?.videoId}`}
            >
              <CardMedia
                image={item?.snippet?.thumbnails?.high?.url}
                sx={{
                  width: { xs: "100%", sm: "360px", md: "320px" },
                  height: "180px",
                }}
              />
              <CardContent sx={{}}>
                <Typography sx={{ fontWeight: "bold" }}>
                  {moment(item?.snippet?.publishedAt).fromNow()}
                </Typography>
                <Typography>{item?.snippet?.title.slice(0, 50)}</Typography>
                <Typography>{item?.snippet?.description}</Typography>
              </CardContent>
              {/* <Link
              to={`/channel/${item?.snippet?.channelId}`}
              style={{ textDecoration: "none" }}
            > */}
            </Link>
            <Stack
              direction={"row"}
              alignItems={"center"}
              gap={"5px"}
              sx={{
                paddingLeft: "16px",
                paddingBottom: "16px",
              }}
            >
              <Avatar src={item?.snippet?.thumbnails?.high?.url} />
              <Typography variant="subtitle2">
                {item?.snippet?.channelTitle}
                <Checkbox disabled checked />
              </Typography>
            </Stack>
            {/* </Link> */}
          </Card>
        ))}
    </Stack>
    //     ))
    // }
  );
};

export default ChannelVidoes;
