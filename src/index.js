import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App.js";
import store from "./redux/store.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

export const rerenderEntireDom = () => {
  root.render(
    <Provider store={store}>
      <App />
    </Provider>
  );
};

//Первый раз рисую ДОМ
rerenderEntireDom();
