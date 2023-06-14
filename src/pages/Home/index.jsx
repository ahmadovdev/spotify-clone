import React from "react";
import PlayListsSection from "../../components/PlayListsSection";
import { useGetFeaturedPlaylistsQuery } from "../../redux/services/spotifyCoreApi";

export const Home = () => {
    const { data, isFetching, error } = useGetFeaturedPlaylistsQuery();
    if (isFetching) return console.log("loading");
    if (error) return console.log(error);

  return (
    <div className="px-6">
      <PlayListsSection data={data} />
    </div>
  );
};

