import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./redux/userRedux/userSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
  }, //it holds states
});

export default store;
