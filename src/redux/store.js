import { configureStore } from '@reduxjs/toolkit'
import postsReducer from './slices/postSlice'
import authReducer from './slices/authSlice'

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    auth: authReducer,
  },
})