import React from "react";
import Post from "./Post/Post";
// import s from "./PostList.module.css";

const PostList = ({ posts }) => {
  const postElements = posts.map((post) => <Post {...post} />);

  return <div>{postElements}</div>;
};

export default PostList;
