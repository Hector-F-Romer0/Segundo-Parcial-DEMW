import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getPosts } from "../store/slices/thunks";

export const usePosts = (urlAPI) => {
	const { posts, isLoading } = useSelector((state) => state.posts);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getPosts(urlAPI));
	}, []);

	return { posts, isLoading };
};
