const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

const initialState = {
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
};

// Функция reducer
const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: state.posts.length,
        text: state.newPostText,
        likesCount: 0,
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: "",
      };

    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.text,
      };

    default:
      return state;
  }
};

// Функции для создания объектов action
export const addPostActionCreator = () => ({
  type: ADD_POST,
});
export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  text: text,
});

export default profileReducer;
