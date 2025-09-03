import React, { useEffect } from "react";
import { useQuery } from "react-query";
import { useParams, useSearchParams } from "react-router-dom";
import { Apiservice } from "../Service/api.service";
import Videos from "../Videos/Videos";

const SearchItems = () => {
  const { id } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setSearchParams({ query_search: id });
  }, [id, setSearchParams]);

  const { data, isLoading, error, isError } = useQuery(
    ["search-query", id],
    () => Apiservice.fetching(`search?part=snippet&q=${id}`),
    {
      refetchOnWindowFocus: false,
    }
  );

  return (
    <div className="w-full max-w-[1920px] mx-auto px-5">
      {/* Title */}
      <h2 className="font-bold my-4 font-sans text-lg">
        {isError ? (
          ""
        ) : (
          <>
            Search results for <span className="text-red-500">{id}</span> videos
          </>
        )}
      </h2>

      {/* Videos list */}
      <Videos
        data={data}
        isLoading={isLoading}
        error={error}
        isError={isError}
      />
    </div>
  );
};

export default SearchItems;
