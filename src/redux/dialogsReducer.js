const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

const initialState = {
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
};

// Функция reducer
const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let newMessage = {
        id: state.messages.length,
        message: state.newMessageText,
        from: "me",
      };

      return {
        ...state,
        messages: [...state.messages, newMessage],
        newMessageText: "",
      };

    case UPDATE_NEW_MESSAGE_TEXT:
      return {
        ...state,
        newMessageText: action.text,
      };

    default:
      return state;
  }
};

// Функции для создания объектов action
export const addMessageActionCreator = () => ({
  type: ADD_MESSAGE,
});
export const updateNewMessageTextActionCreator = (text) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  text: text,
});

export default dialogsReducer;
