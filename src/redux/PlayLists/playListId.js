import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiUrl } from "../../api/index";

export const fetchPlaylistId = createAsyncThunk(
  "playlistId/fetchPlaylistId",
  async (playlistId) => {
    try {
      const { data } = await apiUrl.get(`playlists/${playlistId}`);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

const initialState = {
  playlistId: [],
};


export const PlayListId= createSlice({
  name: "playlistId",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchPlaylistId.pending, () => {
      console.log("pending");
    });
    builder.addCase(fetchPlaylistId.fulfilled, (state, action) => {
      state.playlistId = action.payload;
    });
    builder.addCase(fetchPlaylistId.rejected, () => {
      console.log("rejected");
    });
  },
});

export default PlayListId.reducer;
