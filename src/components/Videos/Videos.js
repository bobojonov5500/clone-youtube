import React from "react";
import VideoCard from "./Video-card";
import { MagnifyingGlass } from "react-loader-spinner";

const Videos = ({ data, error, isError, isLoading }) => {
  if (isError) {
    return <h3 className="text-red-500 font-semibold">{error.message}</h3>;
  }

  if (isLoading) {
    return (
      <MagnifyingGlass
        visible={true}
        height="80"
        width="80"
        ariaLabel="magnifying-glass-loading"
        wrapperStyle={{}}
        wrapperClass="magnifying-glass-wrapper"
        glassColor="#c0efff"
        color="#e15b64"
      />
    );
  }

  return (
    <div className="max-w-[1920px] w-full mx-auto ">
      <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
        {data?.items.map((item, index) => (
          <VideoCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Videos;
