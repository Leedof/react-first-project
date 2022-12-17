import React from "react";
import MessageCreation from "./MessageCreation/MessageCreation";
import MessageList from "./MessageList/MessageList";
import s from "./MessagesSection.module.css";

const MessagesSection = ({ messages, newMessageText, dispatch }) => {
  return (
    <div className={s.wrapper}>
      <MessageList messages={messages} />
      <MessageCreation newMessageText={newMessageText} dispatch={dispatch} />
    </div>
  );
};

export default MessagesSection;
