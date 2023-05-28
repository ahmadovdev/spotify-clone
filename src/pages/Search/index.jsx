import React from "react";
import FeaturedPlaylist from "../../components/FeaturedPlaylist";
import SearchResult from "../../components/SearchResult";

export const Search = () => {
  const [searchData, setSearchData] = React.useState(null)
  return (
    <div className="px-6">
      {
        searchData === null ? <SearchResult /> : <FeaturedPlaylist />
      }
    </div>
  );
};
