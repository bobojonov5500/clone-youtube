import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";

const VideoCard = ({ item }) => {
  return (
    <div
      className="
         h-full flex flex-col cursor-pointer
        transition-transform duration-200 ease-in-out
        hover:-translate-y-1 hover:shadow-md rounded-lg
        shadow-md 
      "
    >
      {/* Thumbnail */}
      <Link to={`/video/${item?.id?.videoId}`} className="block">
        <div className="relative w-full aspect-video">
          <img
            src={item?.snippet?.thumbnails?.high?.url}
            alt={item?.snippet?.title}
            className="w-full h-full object-cover rounded-t-lg"
          />
        </div>
      </Link>

      {/* Content */}
      <div className="flex-grow p-3">
        <Link
          to={`/channel/${item?.snippet?.channelId}`}
          className="flex gap-3 items-start text-black no-underline"
        >
          {/* Avatar */}
          <img
            src={item?.snippet?.thumbnails?.high?.url}
            alt="avatar"
            className="w-11 h-11 rounded-full object-cover"
          />

          {/* Text */}
          <div className="flex flex-col">
            {/* Title */}
            <h3
              className="
                font-bold leading-snug max-w-[250px]
                line-clamp-2
              "
            >
              {item?.snippet?.title}
            </h3>

            {/* Channel */}
            <div
              className="
                flex items-center gap-1 cursor-pointer
                hover:text-red-500 transition-colors
              "
            >
              <p className="text-sm text-gray-600">{item?.snippet?.channelTitle}</p>
              <input type="checkbox" checked readOnly disabled className="w-3 h-3" />
            </div>

            {/* Views + Time */}
            <p className="text-sm text-gray-500">
              {`${item?.statistics?.viewCount} views • ${moment(
                item?.snippet?.publishedAt
              ).fromNow()}`}
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default VideoCard;
