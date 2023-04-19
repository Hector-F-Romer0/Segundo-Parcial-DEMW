import React from "react";

const Post = ({ data }) => {
	return (
		<div className="my-card">
			<h2>{data?.title}</h2>
			<p>{data?.body}</p>
			<h4>{`Creado por: ${data?.userId}`}</h4>
		</div>
	);
};

export default Post;
