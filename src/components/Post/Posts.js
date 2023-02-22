import React, { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { usePostStore } from "../../stores";
import posticon from "../../assets/images/PenTitle.png";
import Post from "./Post";

import "./Post.scss";

const Posts = () => {
  const {
    getPosts,
    posts,
    errorMessage: postErrorMessage,
  } = usePostStore((state) => state);
  useEffect(() => {
    getPosts();
  }, [getPosts]);
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {postErrorMessage && <p>{toast(postErrorMessage)}</p>}
      <div className="post-banner-wrapper">
        <div className="post-banner">
          <h2>Post</h2>
          <img src={posticon} alt="pen-icon" />
        </div>
      </div>
      <div className="posts-container">
        {posts.slice(0, 4).map((post, key) => (
          <Post post={post} duration={250 * key} key={post.Oid} />
        ))}
      </div>
    </>
  );
};

export default Posts;
