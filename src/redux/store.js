import { configureStore } from "@reduxjs/toolkit";
import user_profile from "./userProfile/slice";

export const store = configureStore({
  reducer: {
    user_profile,
  },
});
