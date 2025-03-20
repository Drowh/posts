import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPosts: (state, action) => {
      state.posts = action.payload;
    },
    editPost: (state, action) => {
        //edit Post
    },
    getPost: (state, action) => {
        // return post by id
    },
    addPost: (state, action) => {
        // add new post by data
    }
  },
});

// Action creators are generated for each case reducer function
export const { setPosts, editPost, getPost, addPost } = postsSlice.actions;

export default postsSlice.reducer;
