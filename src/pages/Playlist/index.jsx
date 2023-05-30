import React from "react";
import PlaylistHeader from "../../components/PlaylistHeader";
import PlaylistTitle from "../../components/PlaylistTitle";
import PlaylistTracks from "../../components/PlaylistTracks";
import { useGetPlaylistsItemsQuery } from "../../redux/services/spotifyCoreApi";
import { useParams } from "react-router-dom";

export const Playlist = () => {
  const { playlistId } = useParams();
  console.log(playlistId, "as");
  const { data, isFetching, error } = useGetPlaylistsItemsQuery(playlistId);
  if (isFetching) return console.log("loading");
  if (error) return console.log(error);
  return (
    <section className="mt-[-64px]">
      <PlaylistTitle data={data} />
      <PlaylistHeader />
      <PlaylistTracks />
    </section>
  );
};
