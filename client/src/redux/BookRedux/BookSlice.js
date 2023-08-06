import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  books: [],
  response: {},
};

const BookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    requestPending: (state, action) => {
      state.isLoading = true;
    },
    addBookSuccess: (state, action) => {
      state.isLoading = false;
      state.books = action.payload;
    },
  },
});

const { reducer, actions } = BookSlice;
export const { requestPending, addBookSuccess } = actions;
export default reducer;
