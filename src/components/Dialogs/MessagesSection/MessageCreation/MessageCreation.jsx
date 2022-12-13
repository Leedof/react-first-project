import React from "react";
import s from "./MessageCreation.module.css";

const MessageCreation = () => {
  return (
    <div className={s.wrapper}>
      <textarea cols="5" rows="1" className={s.message}></textarea>
      <br />
      <button className={s.btn}>Send message</button>
    </div>
  );
};

export default MessageCreation;
