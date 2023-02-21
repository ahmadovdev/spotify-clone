import { configureStore } from "@reduxjs/toolkit";
import playlists from "./userBrowse/slice";
import playlist from "./PlayLists/playlistTracks";
import playlistId from "./PlayLists/playListId";

export const store = configureStore({
  reducer: {
    playlists,
    playlist,
    playlistId,
  },
});
