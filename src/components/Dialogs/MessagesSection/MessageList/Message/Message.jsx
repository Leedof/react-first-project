import React from "react";
import s from "./Message.module.css";

const Message = (props) => {
  // Проверка на мое сообщение
  let style = "";
  if (props.from === "me") {
    style = s.message + " " + s.myMessage;
  } else {
    style = s.message;
  }

  return <div className={style}>{props.message}</div>;
};

export default Message;
