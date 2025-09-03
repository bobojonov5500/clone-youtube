import React from "react";
import { useParams, Link } from "react-router-dom";
import { useQuery } from "react-query";
import { Apiservice } from "../Service/api.service";
import ReactPlayer from "react-player/lazy";
import VideoCard from "./Video-card";
import { Eye, Heart, MessageSquare, CheckCircle, Tag } from "lucide-react";
import { RotatingLines } from "react-loader-spinner";

const WatchVideo = () => {
  const { videoId } = useParams();

  const {
    data: videos,
    isLoading,
    isError,
    error,
  } = useQuery(
    ["watchingvideo", videoId],
    () => Apiservice.fetching(`videos?part=snippet,statistics&id=${videoId}`),
    { refetchOnWindowFocus: false }
  );

  const { data: suggestedVideos } = useQuery(
    ["suggestedvideos", videoId],
    () =>
      Apiservice.fetching(
        `search?part=snippet&relatedToVideoId=${videoId}&type=video`
      ),
    { refetchOnWindowFocus: false }
  );

  if (isError) {
    return <p className="text-center text-red-500">{error.message}</p>;
  }

  if (isLoading) {
    return (
      <div className=" w-full mx-auto ">
        <RotatingLines
          visible={true}
          height="80"
          width="80"
          color="rgb(59, 130, 246)"
          strokeWidth="5"
          animationDuration="0.75"
          ariaLabel="rotating-lines-loading"
          wrapperClass="mx-auto block"
        />
      </div>
    );
  }

  const video = videos?.items[0];

  return (
    <div className="flex flex-col md:flex-row gap-5 max-w-[1920px] mx-auto p-3">
      {/* Left: Main video */}
      <div className="w-full md:w-3/4">
        {/* Player */}
        <div className="relative aspect-video rounded-xl overflow-hidden">
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${videoId}`}
            controls
            width="100%"
            height="100%"
            className="absolute top-0 left-0 rounded-sm"
          />
        </div>

        {/* Tags */}
        <div className="mt-3 flex flex-wrap gap-2">
          {video?.snippet?.tags?.map((tag, i) => (
            <span
              key={i}
              className="flex items-center gap-1 px-2 py-1 bg-gray-200 rounded-full text-sm"
            >
              <Tag size={14} /> {tag}
            </span>
          ))}
        </div>

        {/* Title + Stats */}
        <div className="mt-4">
          <h1 className="text-xl font-semibold mb-2">
            {video?.snippet?.title}
          </h1>

          <div className="flex flex-wrap gap-4 text-gray-700 text-sm">
            <span className="flex items-center gap-1">
              <Eye size={18} />
              {parseInt(video?.statistics?.viewCount).toLocaleString()} Views
            </span>
            <span className="flex items-center gap-1">
              <Heart size={18} />
              {parseInt(video?.statistics?.likeCount).toLocaleString()} Likes
            </span>
            <span className="flex items-center gap-1">
              <MessageSquare size={18} />
              {parseInt(video?.statistics?.commentCount).toLocaleString()}{" "}
              Comments
            </span>
          </div>
        </div>

        {/* Channel Info */}
        <Link
          to={`/channel/${video?.snippet?.channelId}`}
          className="flex items-center gap-2 mt-4 no-underline text-black"
        >
          <img
            src={video?.snippet?.thumbnails?.default?.url}
            alt="channel avatar"
            className="w-10 h-10 rounded-full"
          />
          <p className="font-medium">{video?.snippet?.channelTitle}</p>
          <CheckCircle size={16} className="text-gray-500" />
        </Link>
      </div>

      {/* Right: Suggested videos */}
      <div className="w-full md:w-1/4 max-h-screen overflow-y-scroll pr-2">
        {suggestedVideos?.items?.map((item, i) => (
          <div key={i} className="mb-3">
            <VideoCard item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WatchVideo;
