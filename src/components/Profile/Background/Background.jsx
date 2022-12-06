import React from "react";
import s from "./Background.module.css";

const Background = () => {
  return (
    <div className={s.wrapper}>
      <img
        className={s.image}
        src="https://images.unsplash.com/photo-1488278905738-514111aa236c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        alt="BackgroundImage"
      />
    </div>
  );
};

export default Background;
