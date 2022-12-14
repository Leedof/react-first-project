const state = {
  profilePage: {
    newPostText: "",
    posts: [
      { id: 1, text: "Hello,this is my first entry!", likesCount: 2 },
      { id: 2, text: "Today is a good day to make second post", likesCount: 0 },
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
};

//Просто создаю переменную в глобальном контексте
let rerenderEntireDom;
//Нужно пробросить колбек в индекс и забрать оттуда функцию перерисовки + записать ее в переменную выше
export const subscribe = (observe) => {
  //когда колбек вызывается в индексе, то он как раз получает то, то нам нужно здесь. Тут мы записываем это через замыкание и исплользуем без цикличности импортов.
  rerenderEntireDom = observe;
};

// Добавление нового поста
export const addPost = () => {
  state.profilePage.posts.push({
    id: state.profilePage.posts.length,
    text: state.profilePage.newPostText,
    likesCount: 0,
  });
  state.profilePage.newPostText = "";
  rerenderEntireDom(state);
};
// Отслеживание изменения в textarea постов
export const updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireDom(state);
};

// Добавление нового сообщение в диалогах
export const addMessage = () => {
  state.dialogsPage.messages.push({
    id: state.dialogsPage.messages.length,
    message: state.dialogsPage.newMessageText,
    from: "me",
  });
  state.dialogsPage.newMessageText = "";
  rerenderEntireDom(state);
};
// Отслеживание изменения в textarea сообщений
export const updateNewMessageText = (newMessage) => {
  state.dialogsPage.newMessageText = newMessage;
  rerenderEntireDom(state);
};

export default state;
