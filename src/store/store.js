import { configureStore } from "@reduxjs/toolkit";
import { postsSlice } from "./slices/postsSlices";

export const store = configureStore({
	reducer: {
		posts: postsSlice.reducer,
	},
});
