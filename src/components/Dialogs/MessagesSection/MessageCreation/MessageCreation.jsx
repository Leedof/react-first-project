import React from "react";
import s from "./MessageCreation.module.css";

const MessageCreation = (props) => {
  const newMessageElement = React.createRef();

  const onAddMessage = () => {
    props.sendMessage();
  };

  const onMessageChange = () => {
    const text = newMessageElement.current.value;
    props.updateNewMessageText(text);
  };

  return (
    <div className={s.wrapper}>
      <textarea
        cols="5"
        rows="1"
        className={s.message}
        ref={newMessageElement}
        value={props.newMessageText}
        onChange={onMessageChange}
      />
      <br />
      <button className={s.btn} onClick={onAddMessage}>
        Send message
      </button>
    </div>
  );
};

export default MessageCreation;
