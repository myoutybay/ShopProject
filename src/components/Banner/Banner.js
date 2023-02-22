import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs, Autoplay, Lazy } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/lazy";

import "./Banner.scss";

function Banner({ children }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const swiperChildren = children.map((node, key) => {
    return <SwiperSlide key={key}>{node}</SwiperSlide>;
  });
  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        spaceBetween={10}
        loop={true}
        lazy={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation={true}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Navigation, Thumbs, Autoplay, Lazy]}
        className="mySwiper"
      >
        {swiperChildren}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        lazy={true}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        spaceBetween={10}
        slidesPerView={3}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[Navigation, Thumbs, Autoplay, Lazy]}
        className="SwiperSecond"
      >
        {swiperChildren}
      </Swiper>
    </>
  );
}

export default Banner;
