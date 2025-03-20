import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      // login user
    },
    logout: (state, action) => {
      // logout user
    },
    registrationUser: (state, action) => {
      // registration user
    }
  },
});

// Action creators are generated for each case reducer function
export const { login, logout, registrationUser } = authSlice.actions;

export default authSlice.reducer;
