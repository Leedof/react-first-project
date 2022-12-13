import React from "react";
import s from "./Friends.module.css";

const Friends = () => {
  return (
    <div className={s.wrapper}>
      <span className={s.title}>Friends</span>
      <ul className={s.list}>
        <li className={s.listItem}>
          <img
            src="https://seeding.com.ua/wp-content/uploads/2017/04/%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D0%B0-%D0%B4%D0%BB%D1%8F-%D0%BE%D1%82%D0%B7%D1%8B%D0%B2%D0%BE%D0%B2.jpg"
            alt=""
            width="50px"
            height="50px"
            className={s.avatar}
          />
          <p className={s.listItemName}>Maksym</p>
        </li>
        <li className={s.listItem}>
          <img
            src="https://seeding.com.ua/wp-content/uploads/2017/04/%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D0%B0-%D0%B4%D0%BB%D1%8F-%D0%BE%D1%82%D0%B7%D1%8B%D0%B2%D0%BE%D0%B2.jpg"
            alt=""
            width="50px"
            height="50px"
            className={s.avatar}
          />
          <p className={s.listItemName}>Tatyana</p>
        </li>
        <li className={s.listItem}>
          <img
            src="https://seeding.com.ua/wp-content/uploads/2017/04/%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D0%B0-%D0%B4%D0%BB%D1%8F-%D0%BE%D1%82%D0%B7%D1%8B%D0%B2%D0%BE%D0%B2.jpg"
            alt=""
            width="50px"
            height="50px"
            className={s.avatar}
          />
          <p className={s.listItemName}>Kostya</p>
        </li>
      </ul>
    </div>
  );
};

export default Friends;
