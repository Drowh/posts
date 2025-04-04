import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: JSON.parse(localStorage.getItem("currentUser")) || null,
  isAuth: !!localStorage.getItem("currentUser"),
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      state.isAuth = true;
      localStorage.setItem("currentUser", JSON.stringify(action.payload));
    },
    logout: (state) => {
      state.user = null;
      state.isAuth = false;
      localStorage.removeItem("currentUser");
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
