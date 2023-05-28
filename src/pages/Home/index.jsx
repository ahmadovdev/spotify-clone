import React from "react";
import PlayListsSection from "../../components/PlayListsSection";
import { useGetCurrentPlaylistQuery } from "../../redux/services/spotifyCoreApi";

export const Home = () => {  
  return (
    <div className="px-6">
      <PlayListsSection />
    </div>
  );
};
