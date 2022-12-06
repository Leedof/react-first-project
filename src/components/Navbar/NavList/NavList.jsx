import React from "react";
import NavItem from "./NavItem/NavItem";

import s from "./NavList.module.css";

const NavList = () => {
  return (
    <ul className={s.navList}>
      <NavItem>Profile</NavItem>
      <NavItem>Messages</NavItem>
      <NavItem>News</NavItem>
      <NavItem>Music</NavItem>
      <NavItem>Settings</NavItem>
    </ul>
  );
};

export default NavList;
