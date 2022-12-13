import React from "react";
import s from "./Dialogs.module.css";
import DialogsList from "./DialogsList/DialogsList";
import Message from "./MessagesSection/MessageList/Message/Message";
import MessagesSection from "./MessagesSection/MessagesSection";

const Dialogs = ({ data }) => {
  const { dialogs, messages } = data;

  return (
    <div className={s.dialogs}>
      <DialogsList dialogs={dialogs} />
      <MessagesSection messages={messages} />
    </div>
  );
};

export default Dialogs;
