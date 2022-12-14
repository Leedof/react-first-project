import React from "react";
import s from "./Dialogs.module.css";
import DialogsList from "./DialogsList/DialogsList";
import Message from "./MessagesSection/MessageList/Message/Message";
import MessagesSection from "./MessagesSection/MessagesSection";

const Dialogs = ({ data, addMessage, updateNewMessageText }) => {
  const { dialogs, messages, newMessageText } = data;

  return (
    <div className={s.dialogs}>
      <DialogsList dialogs={dialogs} />
      <MessagesSection
        messages={messages}
        newMessageText={newMessageText}
        addMessage={addMessage}
        updateNewMessageText={updateNewMessageText}
      />
    </div>
  );
};

export default Dialogs;
