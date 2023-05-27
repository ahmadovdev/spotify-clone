import React from "react";
import PlaylistHeader from "../../components/PlaylistHeader";
import PlaylistTitle from "../../components/PlaylistTitle";
import PlaylistTracks from "../../components/PlaylistTracks";

export const Playlist = () => {
  return (
    <section className="mt-[-64px]">
      <PlaylistTitle />
      <PlaylistHeader />
      <PlaylistTracks />
      
    </section>
  );
};
