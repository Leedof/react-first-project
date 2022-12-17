const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";
// Функции для создания объектов action
export const addMessageActionCreator = () => ({
  type: ADD_MESSAGE,
});
export const updateNewMessageTextActionCreator = (text) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  text: text,
});

// Функция reducer
const dialogsReducer = (state, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      state.messages.push({
        id: state.messages.length,
        message: state.newMessageText,
        from: "me",
      });
      state.newMessageText = "";
      return state;

    case UPDATE_NEW_MESSAGE_TEXT:
      state.newMessageText = action.text;
      return state;

    default:
      return state;
  }
};

export default dialogsReducer;
