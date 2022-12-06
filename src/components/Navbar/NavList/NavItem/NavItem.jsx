import React from "react";
import s from "./NavItem.module.css";

const NavItem = (props) => {
  return (
    <li className={s.navItem}>
      <a className="navItem" {...props}>
        {props.children}
      </a>
    </li>
  );
};

export default NavItem;
