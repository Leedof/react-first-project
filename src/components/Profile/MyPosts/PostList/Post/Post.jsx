import React from "react";
import s from "./Post.module.css";

const Post = () => {
  return (
    <div className={s.post}>
      <img
        src="https://seeding.com.ua/wp-content/uploads/2017/04/%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D0%B0-%D0%B4%D0%BB%D1%8F-%D0%BE%D1%82%D0%B7%D1%8B%D0%B2%D0%BE%D0%B2.jpg"
        alt=""
        className={s.postAvatar}
      />
      <p className={s.postText}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae eos atque
        odio? Ea, quae. Dicta, nam dolor blanditiis magnam laboriosam, qui sint
        sed libero ipsa facere similique quia expedita enim?
      </p>
    </div>
  );
};

export default Post;
