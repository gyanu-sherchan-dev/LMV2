import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  isLoggedIn: false,
  userInfo: {},
  response: {},
};

const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    requestPending: (state, action) => {
      state.isLoading = true;
    },
    loginSuccess: (state, action) => {
      state.isLoading = false;
      state.isLoggedIn = true;
      state.response = {};
      state.userInfo = action.payload;
      sessionStorage.setItem("user", JSON.stringify(action.payload));
    },
    registerSuccess: (state, action) => {
      state.isLoading = false;
      state.response = action.payload;
    },
  },
});

const { reducer, actions } = UserSlice;
export const { requestPending, loginSuccess, registerSuccess } = actions;
export default reducer;
