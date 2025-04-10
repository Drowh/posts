import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: JSON.parse(localStorage.getItem("currentUser")) || null,
  isAuth: !!localStorage.getItem("currentUser"),
  form: {
    email: "",
    password: ""
  },
  error: null
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      state.isAuth = true;
      state.error = null;
      localStorage.setItem("currentUser", JSON.stringify(action.payload));
    },
    logout: (state) => {
      state.user = null;
      state.isAuth = false;
      localStorage.removeItem("currentUser");
    },
    updateFormField: (state, action) => {
      const { name, value } = action.payload;
      state.form[name] = value;
    },
    resetForm: (state) => {
      state.form = {
        email: "",
        password: ""
      };
      state.error = null;
    },
    setError: (state, action) => {
      state.error = action.payload;
    }
  },
});

export const { login, logout, updateFormField, resetForm, setError } = authSlice.actions;

export const selectAuthForm = (state) => state.auth.form;
export const selectAuthEmail = (state) => state.auth.form.email;
export const selectAuthPassword = (state) => state.auth.form.password;
export const selectAuthError = (state) => state.auth.error;
export const selectIsFormValid = (state) => {
  const { email, password } = state.auth.form;
  return !!email && !!password;
};

export const authHelpers = {
  getUsersFromStorage: () => {
    return JSON.parse(localStorage.getItem("users")) || [];
  },

  findUserByCredentials: (users, email, password) => {
    return users.find(
      (user) => user.email === email && user.password === password
    );
  },

  authenticateUser: (email, password) => {
    const users = authHelpers.getUsersFromStorage();
    
    if (!users.length) {
      return { success: false, message: "Пользователь не найден" };
    }
    
    const currentUser = authHelpers.findUserByCredentials(users, email, password);
    
    if (!currentUser) {
      return { success: false, message: "Пользователь не найден" };
    }
    
    return { success: true, user: currentUser };
  }
};

export default authSlice.reducer;