import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiUrl } from "../../api/index";

export const fetchPlaylistItem = createAsyncThunk(
  "playlist/fetchPlaylistItem",
  async (playlistId) => {
    try {
      const { data } = await apiUrl.get(`playlists/${playlistId}/tracks`);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

const initialState = {
  playlist: [],
};

export const PlayListItemSlice = createSlice({
  name: "playlist",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchPlaylistItem.pending, () => {
      console.log("pending");
    });
    builder.addCase(fetchPlaylistItem.fulfilled, (state, action) => {
      state.playlist = action.payload.items;
    });
    builder.addCase(fetchPlaylistItem.rejected, () => {
      console.log("rejected");
    });
  },
});

export default PlayListItemSlice.reducer;
