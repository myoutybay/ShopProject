import "./PostList.scss";

function PostList({ posts = [] }) {
  return (
    <div className="posts-container-list">
      {posts.map((item) => (
        <a href={`/post/${item.Slug}`} key={item.Oid}>
          <div className="post-list mb-1">
            <img
              src={item.Thumbnail}
              alt="thumbnail"
              className="post-list-image"
              lazy="loaded"
            />
            <div className="post-list-content">
              <h2 className="post-list-title">{item.Title}</h2>
              <div className="post-list-tags mb-1">
                <span className="mr-1">{item?.Category?.CategoryName}</span>
                <span className="mr-1">{item?.Field?.FieldName}</span>
              </div>
              <div className="post-list-bottom">
                <div className="post-list-author">
                  <img
                    src={item?.User?.Employee?.AvatarImage}
                    alt="author"
                    className="mr-1"
                    lazy="loaded"
                  />
                  <span>{item?.User?.Employee?.FullName}</span>
                </div>
              </div>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}

export default PostList;
