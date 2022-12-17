const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

// Функции для создания объектов action
export const addPostActionCreator = () => ({
  type: ADD_POST,
});
export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  text: text,
});

// Функция reducer
const profileReducer = (state, action) => {
  switch (action.type) {
    case ADD_POST:
      state.posts.push({
        id: state.posts.length,
        text: state.newPostText,
        likesCount: 0,
      });
      state.newPostText = "";
      return state;

    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.text;
      return state;

    default:
      return state;
  }
};

export default profileReducer;
