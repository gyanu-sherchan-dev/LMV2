import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./redux/userRedux/userSlice";
import bookReducer from "./redux/BookRedux/BookSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    books: bookReducer,
  }, //it holds states
});

export default store;
