import React from "react";
import NavItem from "./NavItem/NavItem";

import s from "./NavList.module.css";

const NavList = () => {
  return (
    <ul className={s.navList}>
      <NavItem to="/">Profile</NavItem>
      <NavItem to="/dialogs">Messages</NavItem>
      <NavItem to="/news">News</NavItem>
      <NavItem to="/music">Music</NavItem>
      <NavItem to="/settings">Settings</NavItem>
    </ul>
  );
};

export default NavList;
