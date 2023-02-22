import "./loading.scss";
function Loading() {
  return (
    <div className="loader-body">
      <div className="loader-container">
        <div className="spinner"></div>
      </div>
    </div>
  );
}
function BannerSkeleton() {
  return (
    <>
      <div className="swiper-skeleton" />
      <div className="SwiperSecond-skeleton" />
    </>
  );
}
function FrameworkSkeleton() {
  return <div className="SwiperSecond-skeleton" />;
}
function ProductSkeleton() {
  return (
    <div className="products-skeleton-wrapper">
      {[1, 2, 3, 4].map((key) => (
        <div className="products-item" key={key}>
          <div className="products-media"></div>
          <div className="products-content">
            <div className="products-tags">
              <span className="item-tags-skeleton" />
            </div>
            <span className="products-name-skeleton" />
            <div className="products-meta">
              <span className="products-price-skeleton"></span>
            </div>
            <span className="products-buy-skeleton" />
          </div>
        </div>
      ))}
    </div>
  );
}
function ProductsSkeleton() {
  return (
    <>
      <div className="banner-skeleton" />
      <ProductSkeleton />
    </>
  );
}
function PostSkeleton() {
  return (
    <div className="post-skeleton-wrapper">
      {[1, 2, 3].map((key) => (
        <div className="post-card" key={key}>
          <div className="post-card-image-skeleton"></div>
          <div className="post-card-content-skeleton">
            <div className="post-card-title"></div>
            <div className="post-card-bottom">
              <div className="post-card-tag" data-sidebar="gradient"></div>
              <div className="post-card-author">
                <div className="mr-1 post-card-author-img"></div>
                <div className="post-card-author-employee"></div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
function PostsSkeleton() {
  return (
    <>
      <div className="banner-skeleton" />
      <PostSkeleton />
    </>
  );
}

export {
  Loading,
  BannerSkeleton,
  FrameworkSkeleton,
  ProductSkeleton,
  ProductsSkeleton,
  PostSkeleton,
  PostsSkeleton,
};
