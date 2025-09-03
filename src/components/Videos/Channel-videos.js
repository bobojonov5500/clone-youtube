import React from "react";
import { useQuery } from "react-query";
import { Apiservice } from "../Service/api.service";
import { Link } from "react-router-dom";
import { FiCheck } from "react-icons/fi"; // react-icons ishlatamiz
import moment from "moment";

const ChannelVideos = ({ name }) => {
  const { data, isLoading, isError, error } = useQuery(
    ["channel-videos", name],
    () => Apiservice.fetching(`search?part=snippet&channelId=${name}`),
    {
      refetchOnWindowFocus: false,
    }
  );

  if (isError) {
    return <h1 className="text-center text-red-500">{error.message}</h1>;
  }

  if (isLoading) {
    return <h2 className="text-center">Loading...</h2>;
  }

  return (
    <div className="flex flex-wrap justify-between w-full px-5">
      {data?.items.map((item, index) => (
        <div
          key={index}
          className="w-full sm:w-[360px] md:w-[300px] mt-4 bg-white rounded-lg shadow hover:shadow-lg transition"
        >
          {/* Thumbnail */}
          <Link to={`/video/${item?.id?.videoId}`} className="block">
            <img
              src={item?.snippet?.thumbnails?.high?.url}
              alt={item?.snippet?.title}
              className="w-full h-[180px] object-cover rounded-t-lg"
            />

            {/* Content */}
            <div className="p-3">
              <p className="font-bold text-sm text-gray-700">
                {moment(item?.snippet?.publishedAt).fromNow()}
              </p>
              <h3 className="font-semibold text-base line-clamp-2">
                {item?.snippet?.title}
              </h3>
              <p className="text-sm text-gray-600 line-clamp-2">
                {item?.snippet?.description}
              </p>
            </div>
          </Link>

          {/* Channel Info */}
          <div className="flex items-center gap-2 px-4 pb-4">
            <img
              src={item?.snippet?.thumbnails?.high?.url}
              alt="channel avatar"
              className="w-10 h-10 rounded-full object-cover"
            />
            <div className="flex items-center gap-1 text-sm font-medium text-gray-800">
              {item?.snippet?.channelTitle}
              <FiCheck className="text-green-500" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChannelVideos;
