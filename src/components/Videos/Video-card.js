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
        width: { xs: "100%", sm: "360px", md: "300px" },
        height: 320,
        cursor: "pointer",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: 3,
        },
      }}
    >
      <Link
        style={{ textDecoration: "none", color: "#212121" }}
        to={`/video/${item?.id?.videoId}`}
      >
        <CardMedia
          image={item?.snippet?.thumbnails?.high?.url}
          sx={{
            width: { xs: "100%", sm: "360px", md: "320px" },
            height: "180px",
          }}
        />
      </Link>
      <Link
        to={`/channel/${item?.snippet?.channelId}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <Stack
          direction="row"
          alignItems="flex-start"
          spacing={1.5}
          sx={{ padding: "8px 16px" }}
        >
          {/* Avatar */}
          <Avatar
            sx={{ height: 45, width: 45 }}
            src={item?.snippet?.thumbnails?.high?.url}
            imgProps={{ style: { objectFit: "cover" } }}
          />

          {/* Text section */}
          <Box>
            {/* Title */}
            <Typography
              variant="subtitle1"
              fontWeight="bold"
              sx={{
                maxWidth: 250,
                whiteSpace: "normal",
                wordBreak: "break-word", // uzun so‘zlar qatorga sig‘masa bo‘linadi
                lineHeight: 1.3,
              }}
            >
              {item?.snippet?.title}
            </Typography>

            {/* Channel name + verified */}
            <Stack
              sx={{
                cursor: "pointer",
                "&:hover .MuiTypography-root": {
                  color: "red",
                },
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

            {/* Views + time */}
            <Typography variant="body2" color="text.secondary">
              {`${item?.statistics?.viewCount} views • ${moment(
                item?.snippet?.publishedAt
              ).fromNow()}`}
            </Typography>
          </Box>
        </Stack>
      </Link>
    </Card>
  );
};

export default VideoCard;
