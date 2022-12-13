import React from "react";
import s from "./PostCreation.module.css";

const PostCreation = () => {
  const newPostElement = React.createRef();

  const addPost = () => {
    const text = newPostElement.current.value;
    alert(text);
  };

  return (
    <div className={s.wrapper}>
      <textarea
        cols="10"
        rows="5"
        className={s.text}
        ref={newPostElement}
      ></textarea>
      <button onClick={addPost} className={s.btn}>
        Add post
      </button>
    </div>
  );
};

export default PostCreation;
