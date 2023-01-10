import React from "react";
import s from "./Dialogs.module.css";
import DialogsList from "./DialogsList/DialogsList";
import MessagesSection from "./MessagesSection/MessagesSection";

const Dialogs = ({
  dialogs,
  messages,
  newMessageText,
  sendMessage,
  updateNewMessageText,
}) => {
  return (
    <div className={s.dialogs}>
      <DialogsList dialogs={dialogs} />
      <MessagesSection
        messages={messages}
        newMessageText={newMessageText}
        sendMessage={sendMessage}
        updateNewMessageText={updateNewMessageText}
      />
    </div>
  );
};

export default Dialogs;
