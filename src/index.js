import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import store from "./redux/state.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

export const rerenderEntireDom = (state) => {
  root.render(<App state={state} dispatch={store.dispatch.bind(store)} />);
};

// Отдаю в стейт функцие перерисовки
store.subscribe(rerenderEntireDom);

//Первый раз рисую ДОМ
rerenderEntireDom(store.getState());
