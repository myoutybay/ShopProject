import { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import { Link, useParams } from "react-router-dom";
import { usePostStore } from "../../stores";

import "./PostPage.scss";

function PostPage() {
  const { slug } = useParams();
  const {
    getPostBySlug,
    post,
    errorMessage: postErrorMessage,
  } = usePostStore((state) => state);

  useEffect(() => {
    getPostBySlug(slug);
  }, [getPostBySlug, slug]);
  const { Title, Content } = post;
  return (
    <div className="post-detail-layout">
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
      <div class="breadcrumb">
        <div class="breadcrumb-left">
          <div class="breadcrumb-page-title">Post</div>
        </div>
        <div class="breadcrumb-right">
          <Link class="breadcrumb-item" to="/">
            Post
          </Link>
          <span class="breadcrumb-item active">{Title}</span>
        </div>
      </div>
      <h2>{Title}</h2>
      <section
        className="post-content-container"
        dangerouslySetInnerHTML={{ __html: Content }}
      ></section>
    </div>
  );
}

export default PostPage;
