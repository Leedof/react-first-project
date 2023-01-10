import React from "react";
import MessageCreation from "./MessageCreation/MessageCreation";
import MessageList from "./MessageList/MessageList";
import s from "./MessagesSection.module.css";

const MessagesSection = ({
  messages,
  newMessageText,
  sendMessage,
  updateNewMessageText,
}) => {
  return (
    <div className={s.wrapper}>
      <MessageList messages={messages} />
      <MessageCreation
        newMessageText={newMessageText}
        sendMessage={sendMessage}
        updateNewMessageText={updateNewMessageText}
      />
    </div>
  );
};

export default MessagesSection;
