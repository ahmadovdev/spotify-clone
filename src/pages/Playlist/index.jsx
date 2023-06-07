import React from "react";
import PlaylistHeader from "../../components/PlaylistHeader";
import DetailsHeader from "../../components/DetailsHeader";
import PlaylistTracks from "../../components/PlaylistTracks";
import { useGetPlaylistsItemsQuery } from "../../redux/services/spotifyCoreApi";
import { useParams } from "react-router-dom";

export const Playlist = () => {
  const { playlistId } = useParams();
  const { data, isFetching, error } = useGetPlaylistsItemsQuery(playlistId);
  if (isFetching) return console.log("loading");
  if (error) return console.log(error);
  return (
    <section className="mt-[-64px]">
      <DetailsHeader data={data} types="playlist" />
      <PlaylistHeader />
      <PlaylistTracks data={data} />
    </section>
  );
};
