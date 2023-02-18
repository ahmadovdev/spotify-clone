import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiUrl } from "../../api/index";

export const fetchPlaylists = createAsyncThunk(
  "browse/featured-playlists/fetchPlaylists",
  async () => {
    try {
      const options = {
        params: {
          country: "SE",
          locale: "sv_SE",
          timestamp: "2014-10-23T09:00:00",
          limit: "10",
          offset: "0",
        },
      };
      const { data } = await apiUrl.get("browse/featured-playlists", options);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);


const initialState = {
  playlists: [],
};

export const userBrowseSlice = createSlice({
  name: "playlists",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchPlaylists.pending, () => {
      console.log("pending");
    });
    builder.addCase(fetchPlaylists.fulfilled, (state, action) => {
      state.playlists=action.payload;
    });
    builder.addCase(fetchPlaylists.rejected, () => {
      console.log("rejected");
    });
  },
});

export default userBrowseSlice.reducer;
