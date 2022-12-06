import React from "react";
import s from "./Navbar.module.css";
import NavList from "./NavList/NavList";

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <NavList />
    </nav>
  );
};

export default Navbar;
