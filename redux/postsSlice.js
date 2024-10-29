import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
  },
  reducers: {
    addPost: (state, action) => {
      state.posts.unshift(action.payload);
    },
    setPosts: (state, action) => {
      state.posts = action.payload;
    },
    addCommentToPost: (state, action) => {
      const { postId, comment } = action.payload;
      const post = state.posts.find((p) => p.id === postId);
      if (post) {
        post.comments.push(comment);
      }
    },
  },
});

export const selectPostComments = createSelector(
  (state) => state.posts.posts,
  (_, postId) => postId,
  (posts, postId) => {
    const post = posts.find((post) => post.id === postId);
    return post ? [...post.comments] : [];
  }
);

export const selectUserPosts = createSelector(
  (state) => state.posts.posts,
  (_, userId) => userId,
  (posts, userId) => posts.filter((post) => post.userId === userId)
);

export const { addPost, setPosts, addCommentToPost } = postsSlice.actions;
export default postsSlice.reducer;
