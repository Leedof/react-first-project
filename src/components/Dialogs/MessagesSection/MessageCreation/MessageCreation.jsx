import React from "react";
import s from "./MessageCreation.module.css";
import {
  addMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "../../../../redux/dialogsReducer";

const MessageCreation = (props) => {
  const newMessageElement = React.createRef();

  const addMessage = () => {
    props.dispatch(addMessageActionCreator());
  };

  const onMessageChange = () => {
    const text = newMessageElement.current.value;
    props.dispatch(updateNewMessageTextActionCreator(text));
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
      <button className={s.btn} onClick={addMessage}>
        Send message
      </button>
    </div>
  );
};

export default MessageCreation;
