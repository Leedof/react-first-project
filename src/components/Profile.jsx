import React from "react";

const Profile = () => {
  return (
    <main className="content">
      <div>
        <img
          src="https://images.unsplash.com/photo-1629646620956-0f4b37ee450d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
          alt="back"
          height={300}
        />
      </div>
      <div>ava + desctipton</div>
      <div>
        My Posts
        <div>New post</div>
        <div>
          Posts
          <div>Post 1</div>
          <div>Post 2</div>
        </div>
      </div>
    </main>
  );
};

export default Profile;
