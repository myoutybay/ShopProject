import "./Post.scss";
import { useNavigate } from "react-router-dom";

function Post({ post = {}, duration }) {
  const { Title, Thumbnail, Slug } = post;
  const navigate = useNavigate();

  return (
    <div
      data-aos="fade-right"
      data-aos-anchor-placement="top-bottom"
      data-aos-duration={duration}
    >
      <div className="post-card" onClick={() => navigate(`/post/${Slug}`)}>
        <div className="post-card-image">
          <img src={Thumbnail} alt="thumbnail" lazy="loaded" />
        </div>
        <div className="post-card-content">
          <h2 className="post-card-title">{Title}</h2>
          <div className="post-card-bottom">
            <div className="post-card-tag" data-sidebar="gradient">
              <span className="mr-1">{post?.Category?.CategoryName}</span>
              <span>{post?.Field?.FieldName}</span>
            </div>
            <div className="post-card-author">
              <div className="mr-1 post-card-author-img">
                <img
                  src={post?.User?.Employee?.AvatarImage}
                  alt="author"
                  lazy="loaded"
                />
              </div>
              <span>{post?.User?.Employee?.FullName}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
