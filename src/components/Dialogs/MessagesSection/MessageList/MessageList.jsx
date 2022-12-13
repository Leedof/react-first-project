import React from "react";
import Message from "./Message/Message";
import s from "./MessageList.module.css";

const MessageList = ({ messages }) => {
  const messagesElements = messages.map((message) => (
    <Message message={message.message} from={message.from} />
  ));

  return <div className={s.messages}>{messagesElements}</div>;
};

export default MessageList;
