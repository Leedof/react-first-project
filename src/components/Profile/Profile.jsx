import React from "react";
import Background from "./Background/Background";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

// import s from "./Profile.module.css";

const Profile = () => {
  return (
    <div>
      <Background />
      <ProfileInfo />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
