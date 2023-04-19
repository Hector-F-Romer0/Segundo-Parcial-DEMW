import React from "react";

const Post = ({ data }) => {
	return (
		<div className="my-card">
			<h2 className="title-post">{data?.title}</h2>
			<hr />
			<p>{data?.body}</p>
			<h3>{`Creado por: ${data?.userId}`}</h3>
		</div>
	);
};

export default Post;
