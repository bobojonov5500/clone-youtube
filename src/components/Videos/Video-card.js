import {
  Avatar,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Typography,
  Checkbox,
  Box,
} from "@mui/material";
import moment from "moment";
import React from "react";
import { Link } from "react-router-dom";

const VideoCard = ({ item }) => {
  return (
    <Card
      sx={{
        width: "100%",
        maxWidth: 360,
        height: "100%", // 🔑 teng balandlik
        display: "flex",
        flexDirection: "column",
        cursor: "pointer",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: 3,
        },
      }}
    >
      {/* Thumbnail */}
      <Link
        style={{ textDecoration: "none", color: "#212121" }}
        to={`/video/${item?.id?.videoId}`}
      >
        <Box sx={{ position: "relative", width: "100%", aspectRatio: "16/9" }}>
          <CardMedia
            component="img"
            image={item?.snippet?.thumbnails?.high?.url}
            alt={item?.snippet?.title}
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "8px 8px 0 0",
            }}
          />
        </Box>
      </Link>

      {/* Content */}
      <CardContent sx={{ flexGrow: 1, p: 1.5 }}>
        <Link
          to={`/channel/${item?.snippet?.channelId}`}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Stack direction="row" alignItems="flex-start" spacing={1.5}>
            {/* Avatar */}
            <Avatar
              sx={{ height: 45, width: 45 }}
              src={item?.snippet?.thumbnails?.high?.url}
              imgProps={{ style: { objectFit: "cover" } }}
            />

            {/* Text */}
            <Box>
              {/* Title */}
              <Typography
                variant="subtitle1"
                fontWeight="bold"
                sx={{
                  maxWidth: 250,
                  lineHeight: 1.3,
                  display: "-webkit-box",
                  WebkitLineClamp: 2, // faqat 2 qator
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {item?.snippet?.title}
              </Typography>

              {/* Channel */}
              <Stack
                sx={{
                  cursor: "pointer",
                  "&:hover .MuiTypography-root": { color: "red" },
                }}
                direction="row"
                alignItems="center"
                spacing={0.5}
              >
                <Typography variant="body2" color="text.secondary">
                  {item?.snippet?.channelTitle}
                </Typography>
                <Checkbox
                  disabled
                  checked
                  sx={{
                    padding: 0,
                    "& .MuiSvgIcon-root": { fontSize: 16 },
                  }}
                />
              </Stack>

              {/* Views + Time */}
              <Typography variant="body2" color="text.secondary">
                {`${item?.statistics?.viewCount} views • ${moment(
                  item?.snippet?.publishedAt
                ).fromNow()}`}
              </Typography>
            </Box>
          </Stack>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
