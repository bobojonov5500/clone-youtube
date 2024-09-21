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
import React from "react";
import { Link } from "react-router-dom";

const VideoCard = ({ item }) => {
  return (
    <Card sx={{ width: { xs: "100%", sm: "360px", md: "300px" } }}>
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
      </Link>
      <Link
        to={`/channel/${item?.snippet?.channelId}`}
        style={{ textDecoration: "none" }}
      >
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
      </Link>
    </Card>
  );
};

export default VideoCard;
