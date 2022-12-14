import React from "react";
import s from "./PostCreation.module.css";

const PostCreation = (props) => {
  const newPostElement = React.createRef();

  const addPost = () => {
    props.addPost();
  };

  const onPostChange = () => {
    const text = newPostElement.current.value;
    props.updateNewPostText(text);
  };

  return (
    <div className={s.wrapper}>
      <textarea
        cols="10"
        rows="5"
        className={s.text}
        ref={newPostElement}
        value={props.newPostText}
        onChange={onPostChange}
      />
      <button onClick={addPost} className={s.btn}>
        Add post
      </button>
    </div>
  );
};

export default PostCreation;
