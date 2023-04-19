import React from "react";
import Post from "./components/Post";
import { usePosts } from "./hooks/usePosts";

const App = () => {
	const posts = usePosts("https://jsonplaceholder.typicode.com/posts");

	return (
		<div>
			<h1 className="my-title">Segundo parcial DEMW 🔥</h1>
			<div className="post-container">
				{posts.map((post) => (
					<Post key={post.id} data={post} />
				))}
			</div>
		</div>
	);
};

export default App;
