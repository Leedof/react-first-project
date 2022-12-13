import React from "react";
import Friends from "./Friends/Friends";
import s from "./Navbar.module.css";
import NavList from "./NavList/NavList";

const Navbar = () => {
  return (
    <div className={s.nav}>
      <nav>
        <NavList />
      </nav>
      <Friends />
    </div>
  );
};

export default Navbar;
