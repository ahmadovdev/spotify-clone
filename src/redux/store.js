import { configureStore } from "@reduxjs/toolkit";
import playlists from "./userBrowse/slice";
import playlist from "./PlayListItem/slice";

export const store = configureStore({
  reducer: {
    playlists,
    playlist,
  },
});
