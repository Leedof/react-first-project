import React from "react";
import s from "./Dialogs.module.css";
import DialogsList from "./DialogsList/DialogsList";
import MessagesSection from "./MessagesSection/MessagesSection";

const Dialogs = ({ data, dispatch }) => {
  const { dialogs, messages, newMessageText } = data;

  return (
    <div className={s.dialogs}>
      <DialogsList dialogs={dialogs} />
      <MessagesSection
        messages={messages}
        newMessageText={newMessageText}
        dispatch={dispatch}
      />
    </div>
  );
};

export default Dialogs;
