import React from "react";
import Background from "./Background/Background";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

// import s from "./Profile.module.css";

const Profile = ({ data }) => {
  return (
    <div>
      <Background />
      <ProfileInfo />
      <MyPosts posts={data.posts} />
    </div>
  );
};

export default Profile;
