import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../store/userSlice";
import feedSlice from "../store/feedSlice";
const appStore = configureStore({
  reducer: {
    user: userSlice,
    feed: feedSlice,
  },
});

export default appStore;
