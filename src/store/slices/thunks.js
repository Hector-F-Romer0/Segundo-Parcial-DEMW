import axios from "axios";
import { setPosts, startLoading } from "./postsSlices";

export const getPosts = (url) => {
	return async (dispatch) => {
		dispatch(startLoading());
		const res = await axios.get(url);
		// console.log(res.data);
		dispatch(setPosts(res.data));
	};
};
