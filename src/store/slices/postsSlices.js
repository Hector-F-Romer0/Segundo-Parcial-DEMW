import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	posts: [],
	isLoading: false,
};

export const postsSlice = createSlice({
	name: "posts",
	initialState,
	reducers: {
		startLoading: (state) => {
			state.isLoading = true;
		},
		setPosts: (state, action) => {
			state.posts = action.payload;
			state.isLoading = false;
		},
	},
});

export const { startLoading, setPosts } = postsSlice.actions;
