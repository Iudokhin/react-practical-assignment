import { createSlice } from "@reduxjs/toolkit";
import {
  filterPosts,
  loadPosts,
} from "../funcs/mainPostFuncs";

const initialState = {
  isLoading: false,
  posts: [],
  totalPages: 0,
  rerender: false,
  toFilter:''
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers:{
    rerender:(state) => {
        state.rerender = !state.rerender
    },
    filter:(state, {payload}) => {
      state.rerender = !state.rerender
      state.toFilter = payload
  }
  },
  extraReducers: {
    [loadPosts.pending]: (state) => {
      state.isLoading = true;
    },
    [loadPosts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.posts = action.payload.result;
      state.totalPages = action.payload.totalPages;
    },
    [loadPosts.rejected]: (state) => {
      state.isLoading = false;
    },
    [filterPosts.pending]: (state) => {
      state.isLoading = true;
    },
    [filterPosts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.posts = action.payload.result;
    },
    [filterPosts.rejected]: (state) => {
      state.isLoading = false;
    }
  },
});

export const {rerender, filter} = postSlice.actions
export default postSlice.reducer;
