import React, { useEffect, Suspense } from "react";
import { ToastContainer, toast } from "react-toastify";
import {
  BannerSkeleton,
  FrameworkSkeleton,
  ProductsSkeleton,
  Service,
  PostsSkeleton,
} from "../../components";

import { useProductStore, useBannerStore } from "../../stores";
import "react-toastify/dist/ReactToastify.css";
import "./HomePage.scss";
function HomePage() {
  const Products = React.lazy(() =>
    import("../../components/Product/Products.js")
  );
  const Posts = React.lazy(() => import("../../components/Post/Posts.js"));
  const Banner = React.lazy(() => import("../../components/Banner/Banner.js"));
  const Framework = React.lazy(() =>
    import("../../components/Framework/Framework.js")
  );
  const { getProducts, products } = useProductStore((state) => state);
  const {
    getBanners,
    banners,
    errorMessage: bannerErrorMessage,
  } = useBannerStore((state) => state);

  useEffect(() => {
    getProducts();
    getBanners();
  }, [getProducts, getBanners]);

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
      <div className="block-top-home">
        {bannerErrorMessage && <p>{toast(bannerErrorMessage)}</p>}
        <Suspense fallback={<BannerSkeleton />}>
          <Banner>
            {banners.map((item) => (
              <img
                src={item.ImageLink}
                alt={item.BannerName}
                lazy="loaded"
                // className="carousel-image"
                loading="lazy"
                key={item.Oid}
              />
            ))}
          </Banner>
        </Suspense>
      </div>
      <div className="horizontal-banner">
        <a
          href="https://inet.vn/dang-ky-ten-mien?aff=447944"
          className="horizontal-banner__item"
        >
          <img
            alt="Inet"
            data-src="https://drive.inet.vn/uploads/hobv@inet.vn/Domain-banner/Dang-ky-ten-mien/file-1538814939267_domain-share.png"
            className="horizontal-banner__img"
            src="https://drive.inet.vn/uploads/hobv@inet.vn/Domain-banner/Dang-ky-ten-mien/file-1538814939267_domain-share.png"
            lazy="loaded"
          />
        </a>
      </div>
      <Suspense fallback={<FrameworkSkeleton />}>
        <Framework>
          {banners.map((item) => (
            <img
              src={item.ImageLink}
              alt={item.BannerName}
              lazy="loaded"
              // className="carousel-image"
              loading="lazy"
              key={item.Oid}
            />
          ))}
        </Framework>
      </Suspense>
      <Service />
      <Suspense fallback={<ProductsSkeleton />}>
        <Products title="Code chất lượng" products={products} />
      </Suspense>
      <Suspense fallback={<ProductsSkeleton />}>
        <Products title="Code mới nhất" products={products} />
      </Suspense>
      <Suspense fallback={<PostsSkeleton />}>
        <Posts />
      </Suspense>
      {/* <PostList posts={posts} /> */}
    </>
  );
}

export default HomePage;
