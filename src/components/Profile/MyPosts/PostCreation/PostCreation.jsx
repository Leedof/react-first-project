import React from "react";
import s from "./PostCreation.module.css";

const PostCreation = () => {
  return (
    <div className={s.wrapper}>
      <textarea cols="10" rows="5" className={s.text}></textarea>
      <button>Add post</button>
    </div>
  );
};

export default PostCreation;
