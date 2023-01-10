import React, { useDebugValue } from "react";
import PostCreation from "./PostCreation/PostCreation";
import PostList from "./PostList/PostList";
import s from "./MyPosts.module.css";

const MyPosts = ({ posts, newPostText, addPost, updateNewPostText }) => {
  return (
    <div className={s.wrapper}>
      <h2>My posts</h2>
      <PostCreation
        newPostText={newPostText}
        addPost={addPost}
        updateNewPostText={updateNewPostText}
      />
      <PostList posts={posts} />
    </div>
  );
};

export default MyPosts;
