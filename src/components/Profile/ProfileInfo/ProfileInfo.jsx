import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div className={s.wrapper}>
      {/* Avatar */}
      <div>
        <img
          src="https://pbs.twimg.com/profile_images/1595684097027985409/aZeaMic5_400x400.jpg"
          alt="Avatar"
          className={s.avatar}
        />
      </div>

      {/* Personal desctiption */}
      <div className={s.info}>
        <h2>Name Surname</h2>
        {/* Info list */}
        <ul className={s.list}>
          <li>DOB: 23 December</li>
          <li>City: Kyiv</li>
          <li>Education: Navigator</li>
          <li>Email: leedof4@gmail.com</li>
        </ul>
      </div>
    </div>
  );
};

export default ProfileInfo;
