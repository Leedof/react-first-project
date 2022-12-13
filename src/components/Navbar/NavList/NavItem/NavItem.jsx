import React from "react";
import { NavLink } from "react-router-dom";
import s from "./NavItem.module.css";

const NavItem = (props) => {
  const setActive = ({ isActive }) => (isActive ? s.activeLink : "");

  return (
    <li className={s.navItemLi}>
      <NavLink to={props.to} className={setActive}>
        {props.children}
      </NavLink>
    </li>
  );
};

export default NavItem;
