import React from "react";
import PostCreation from "./PostCreation/PostCreation";
import PostList from "./PostList/PostList";
import s from "./MyPosts.module.css";

const MyPosts = ({ posts }) => {
  return (
    <div className={s.wrapper}>
      <h2>My posts</h2>
      <PostCreation />
      <PostList posts={posts} />
    </div>
  );
};

export default MyPosts;
