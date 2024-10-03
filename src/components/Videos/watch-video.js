import React from "react";
import { useParams, Link } from "react-router-dom";
import { useQuery } from "react-query";
import { Apiservice } from "../Service/api.service";
import { Box, Stack, Typography, Chip, Avatar } from "@mui/material";
import ReactPlayer from "react-player/lazy";
import TagIcon from "@mui/icons-material/Tag";
import VisibilityIcon from "@mui/icons-material/Visibility";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CommentIcon from "@mui/icons-material/Comment";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import VideoCard from "./Video-card";

const WatchVideo = () => {
  const { videoId } = useParams();
  const { data: videos, isLoading: isLoadingVideo, error, isError } = useQuery(
    ["watchingvideo", videoId],
    () => Apiservice.fetching(`videos?part=snippet, statistics&id=${videoId}`),
    {
      refetchOnWindowFocus: false,
    }
  );
  const {
    data: suggestedVideos,
    isLoading: isLoadingSuggestedVidoes,
    isError: suggestedVideosisError,
    error: suggestedVideosError,
  } = useQuery(
    ["suggestedvideos", videoId],
    () =>
      Apiservice.fetching(
        `search?part=snippet&relatedToVideoId=${videoId}&type=video`
      ),
    {
      refetchOnWindowFocus: false,
    }
  );

  console.log(suggestedVideos);
  if (isError) {
    <Typography>{error.message}</Typography>;
  }
  return isLoadingVideo ? (
    <Typography variant="h5" sx={{ fontWeight: "bold", textAlign: "center" }}>
      Loading...
    </Typography>
  ) : (
    <Box>
      <Stack sx={{ flexDirection: { xs: "column", md: "row" } }}>
        <Box sx={{ width: { sx: "100%", md: "75%" } }}>
          <Box sx={{ position: "relative", paddingTop: "50.25%" }}>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${videoId}`}
              controls
              className="video-player"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
            />
          </Box>
          <Box mt={"10px"} mb={"10px"} pl={"15px"}>
            {videos &&
              videos?.items[0]?.snippet?.tags?.map((tag, index) => (
                <Chip sx={{ mr: "5px", mt: "5px" }} key={index} label={tag} />
              ))}
            <Stack
              mt={2}
              direction={"row"}
              sx={{
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography width={"50%"} variant="h5">
                {videos?.items[0]?.snippet?.title}
              </Typography>
              <Stack direction={"row"} flexWrap={"wrap"} gap={"10px"}>
                <Typography
                  sx={{
                    padding: "3px",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "5px",
                  }}
                  variant=""
                >
                  <VisibilityIcon sx={{ height: "25px" }} />
                  {parseInt(
                    videos?.items[0]?.statistics?.viewCount
                  ).toLocaleString()}{" "}
                  Views
                </Typography>
                <Typography
                  sx={{
                    padding: "3px",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "5px",
                  }}
                >
                  <FavoriteIcon sx={{ height: "25px" }} />
                  {parseInt(
                    videos?.items[0]?.statistics?.likeCount
                  ).toLocaleString()}{" "}
                  Likes
                </Typography>
                <Typography
                  sx={{
                    padding: "3px",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "5px",
                  }}
                >
                  <CommentIcon sx={{ height: "25px" }} />{" "}
                  {parseInt(
                    videos?.items[0]?.statistics?.commentCount
                  ).toLocaleString()}{" "}
                  Comments
                </Typography>
              </Stack>
            </Stack>

            <Link
              to={`/channel/${videos?.items[0]?.snippet?.channelId}`}
              style={{
                textDecoration: "none",
                color: "black",
                cursor: "pointer",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", mt: "10px" }}>
                <Avatar
                  src={videos?.items[0]?.snippet?.thumbnails?.default?.url}
                />
                <Typography sx={{ ml: "5px" }}>
                  {videos?.items[0]?.snippet?.channelTitle}
                </Typography>
                <CheckCircleIcon sx={{ height: "20px", color: "grey" }} />
              </Box>
            </Link>
          </Box>
        </Box>
        <Box sx={{ pl: "15px" }} overflow={"scroll"} maxHeight={"100vh"}>
          {suggestedVideos?.items?.map((item, index) => (
            <Box key={index} sx={{ my: "10px" }}>
              <VideoCard item={item} />
            </Box>
          ))}
        </Box>
      </Stack>
    </Box>
  );
};

export default WatchVideo;
