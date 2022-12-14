import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

const App = ({
  state,
  addPost,
  updateNewPostText,
  addMessage,
  updateNewMessageText,
}) => {
  const { profilePage, dialogsPage } = state;

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <main className="app-wrapper-main">
          <Routes>
            <Route
              path="/"
              element={
                <Profile
                  data={profilePage}
                  addPost={addPost}
                  updateNewPostText={updateNewPostText}
                />
              }
            />
            <Route
              path="/dialogs/*"
              element={
                <Dialogs
                  data={dialogsPage}
                  addMessage={addMessage}
                  updateNewMessageText={updateNewMessageText}
                />
              }
            />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
