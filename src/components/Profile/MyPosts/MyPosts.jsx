import React from "react";
import PostCreation from "./PostCreation/PostCreation";
import PostList from "./PostList/PostList";
import s from "./MyPosts.module.css";

const MyPosts = ({ data, dispatch }) => {
  return (
    <div className={s.wrapper}>
      <h2>My posts</h2>
      <PostCreation newPostText={data.newPostText} dispatch={dispatch} />
      <PostList posts={data.posts} />
    </div>
  );
};

export default MyPosts;
