import profileReducer from "./profileReducer.js";
import dialogsReducer from "./dialogsReducer.js";

const store = {
  _state: {
    profilePage: {
      newPostText: "",
      posts: [
        { id: 1, text: "Hello,this is my first entry!", likesCount: 2 },
        {
          id: 2,
          text: "Today is a good day to make second post",
          likesCount: 0,
        },
        { id: 3, text: "How are you today?", likesCount: 10 },
        { id: 4, text: "I dont know what I have to write here", likesCount: 0 },
        {
          id: 5,
          text: "Have you ever thought about what is goinh on inside his head?",
          likesCount: 5,
        },
      ],
    },
    dialogsPage: {
      newMessageText: "",
      dialogs: [
        { id: 1, name: "Maksym" },
        { id: 2, name: "Tanya" },
        { id: 3, name: "Vladlen" },
        { id: 4, name: "Ihor" },
        { id: 5, name: "Yura" },
        { id: 6, name: "Helen" },
        { id: 7, name: "Kostya" },
      ],
      messages: [
        { id: 1, message: "Hi" },
        { id: 2, message: "How are you?", from: "me" },
        {
          id: 3,
          message:
            "Where have you been? My name is Maksym, I am Paripesa affiliate manager. You have created an account in our Partners website. Would you mind to discuss a furthur deal?",
        },
        { id: 4, message: "Wow, what else?", from: "me" },
      ],
    },
  },
  getState() {
    return this._state;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._callSubscriber(this._state);
  },

  _callSubscriber() {
    console.log("There is no subscribers assigned");
  },
  //Нужно пробросить колбек в индекс и забрать оттуда функцию перерисовки + записать ее в переменную выше
  subscribe(observe) {
    this._callSubscriber = observe;
  },
};

export default store;
