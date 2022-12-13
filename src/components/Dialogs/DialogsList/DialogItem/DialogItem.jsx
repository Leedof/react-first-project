import React from "react";
import { NavLink } from "react-router-dom";
import s from "./DialogItem.module.css";

const DialogItem = (props) => {
  const path = "/dialogs/" + props.id;
  const setActive = ({ isActive }) => (isActive ? s.activeDialog : "");

  return (
    <li className={s.dialog}>
      <NavLink to={path} className={setActive}>
        <img
          src="https://seeding.com.ua/wp-content/uploads/2017/04/%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D0%B0-%D0%B4%D0%BB%D1%8F-%D0%BE%D1%82%D0%B7%D1%8B%D0%B2%D0%BE%D0%B2.jpg"
          alt=""
          width="50px"
          height="50px"
          className={s.avatar}
        />
        {props.name}
      </NavLink>
    </li>
  );
};

export default DialogItem;
