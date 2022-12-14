import React from "react";
import Background from "./Background/Background";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

// import s from "./Profile.module.css";

const Profile = ({ data, addPost, updateNewPostText }) => {
  return (
    <div>
      <Background />
      <ProfileInfo />
      <MyPosts
        data={data}
        addPost={addPost}
        updateNewPostText={updateNewPostText}
      />
    </div>
  );
};

export default Profile;
