import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentSong: [],
};

const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {},
});

export default playerSlice.reducer