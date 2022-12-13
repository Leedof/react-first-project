import { findByText } from "@testing-library/react";
import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import s from "./DialogsList.module.css";

const DialogsList = ({ dialogs }) => {
  const dialogsElements = dialogs.map((dialog) => (
    <DialogItem id={dialog.id} name={dialog.name} />
  ));

  return <ul className={s.dialogsList}>{dialogsElements}</ul>;
};

export default DialogsList;
