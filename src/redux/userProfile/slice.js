import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiUrl } from "../../api/index";

export const fetchTracks = createAsyncThunk("user_profile/fetchTracks", async () => {
  try {
    const options = {
      params: {
        id: "nocopyrightsounds",
        playlistLimit: "10",
        artistLimit: "10",
      },
    };
    const { data } = await apiUrl.get("user_profile/", options);
    return data;
  } catch (error) {
    console.log(error);
  }
});


const initialState = {
  user_profile: [],
};

export const userProfileSlice = createSlice({
  name: "user_profile",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchTracks.pending, (state, action) => {
      console.log("pending");
    });
    builder.addCase(fetchTracks.fulfilled, (state, action) => {
      state.user_profile.push(action.payload);
    });
    builder.addCase(fetchTracks.rejected, (state, action) => {
      console.log("rejected");
    });
  },
});

export default userProfileSlice.reducer;
