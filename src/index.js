import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import state from "./redux/state.js";
import {
  addMessage,
  addPost,
  updateNewMessageText,
  updateNewPostText,
  subscribe,
} from "./redux/state.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

export const rerenderEntireDom = (state) => {
  root.render(
    <App
      state={state}
      addPost={addPost}
      updateNewPostText={updateNewPostText}
      addMessage={addMessage}
      updateNewMessageText={updateNewMessageText}
    />
  );
};
// Отдаю в стейт функцие перерисовки
subscribe(rerenderEntireDom);

//Первый раз рисую ДОМ
rerenderEntireDom(state);
