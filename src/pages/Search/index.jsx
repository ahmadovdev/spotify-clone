import React from "react";
import { useParams } from "react-router-dom";
import FeaturedPlaylist from "../../components/FeaturedPlaylist";
import SearchResult from "../../components/SearchResult";
import { useGetSongsBySearchQuery } from "../../redux/services/spotifyCoreApi";

export const Search = () => {
  const { searchTerm } = useParams();
  const { data, error, isFetching } = useGetSongsBySearchQuery(searchTerm);
  console.log(data, "search");
  if (isFetching) return console.log("loading");
  if (error) return console.log(error);
  return (
    <div className="px-6">
      {searchTerm ? (
        <SearchResult
          playlists={data?.playlists.items}
          songs={data?.tracks.items}
          artists={data?.artists.items}
        />
      ) : (
        <FeaturedPlaylist />
      )}
    </div>
  );
};
