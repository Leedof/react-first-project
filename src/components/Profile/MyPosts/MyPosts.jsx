import React from "react";
import PostCreation from "./PostCreation/PostCreation";
import PostList from "./PostList/PostList";
import s from "./MyPosts.module.css";

const MyPosts = ({ data, addPost, updateNewPostText }) => {
  return (
    <div className={s.wrapper}>
      <h2>My posts</h2>
      <PostCreation
        addPost={addPost}
        newPostText={data.newPostText}
        updateNewPostText={updateNewPostText}
      />
      <PostList posts={data.posts} />
    </div>
  );
};

export default MyPosts;
