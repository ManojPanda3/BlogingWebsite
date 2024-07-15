"use client";
import React, { useRef, useState } from "react";

const Button = (props) => {
  return (
    <button
      {
        ...props
      }
      ref={props.Ref}
    >
      {props.children}
    </button>
  );
};
export const Login = ({ children, className }) => {
  const handleLogin = () => {};
  return (
    <Button
      onClick={handleLogin}
      className={
        "hover:bg-gray-200  text-center cursor-pointer font-medium p-3 " +
        className
      }
    >
      {children}
    </Button>
  );
};
export const SingUp = ({ children, className }) => {
  const handleSingup = () => {};
  return (
    <Button
      onClick={handleSingup}
      className={
        "p-3 hover:bg-gray-900 bg-black text-white text-center cursor-pointer font-medium " +
        className
      }
    >
      {children}
    </Button>
  );
};
export const LikeBtn = ({ children }) => {
  const [isLiked, setLike] = useState(false);
  const likeBtnRef = useRef(null);
  const handleLike = (e) => {
    likeBtnRef.current.style.backgroundColor = !isLiked
      ? "rgb(239, 68 ,68)"
      : "";
    setLike((n) => !n);
  };
  return (
    <Button
      Ref={likeBtnRef}
      onClick={handleLike}
      id="like-btn"
      className="rounded-full p-2 bg-white hover:bg-red-400"
    >
      {children}
    </Button>
  );
};
export const BookmarkBtn = ({ children }) => {
  const [isBookmarked, setBookmark] = useState(false);
  const bookmarkBtnRef = useRef(null);
  const handleBookmark = (e) => {
    console.log(bookmarkBtnRef);
    bookmarkBtnRef.current.style.backgroundColor = !isBookmarked
      ? "rgb(234, 179, 8)"
      : "";

    setBookmark((n) => !n);
  };
  return (
    <Button
      Ref={bookmarkBtnRef}
      onClick={handleBookmark}
      id="bookmark-btn"
      className="rounded-full p-2 bg-white hover:bg-yellow-400"
    >
      {children}
    </Button>
  );
};
export default Button;
