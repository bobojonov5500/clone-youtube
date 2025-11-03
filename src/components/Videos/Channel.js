import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { Apiservice } from "../Service/api.service";
import ChannelVidoes from "./Channel-videos";

const Channel = () => {
  const { name } = useParams();
  const { data, isLoading, error, isError } = useQuery(
    ["channel-find", name],
    () => Apiservice.fetching(`channels?part=snippet&id=${name}`),
    {
      refetchOnWindowFocus: false,
    }
  );

  if (isLoading) {
    return (
      <p className="text-center font-bold text-lg mt-5">Loading...</p>
    );
  }

  if (isError) {
    return (
      <p className="text-center text-red-500 font-semibold mt-5">
        {error.message}
      </p>
    );
  }

  return (
    <div className="max-w-[1920px] w-full mx-auto py-4 px-2">
      {data && (
        <div className="w-full mx-auto">
          {/* Banner Avatar */}
          <img
            className="w-32 h-32 mx-auto rounded-full object-cover"
            src={data?.items[0]?.brandingSettings?.image?.bannerExternalUrl}
            alt="Channel banner"
          />

          {/* Channel Info */}
          <div className="max-w-lg text-center font-mono mt-4 mx-auto">
            <h2 className="font-bold text-xl flex items-center justify-center gap-2">
              {data?.items[0]?.brandingSettings?.channel?.title}
              <input type="checkbox" checked readOnly disabled />
            </h2>
            <p className="text-gray-700 mt-2">
              {data?.items[0]?.brandingSettings?.channel?.description}
            </p>
          </div>

          {/* Channel Videos */}
          <ChannelVidoes name={name} />
        </div>
      )}
    </div>
  );
};

export default Channel;
