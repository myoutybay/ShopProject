import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, FreeMode, Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Framework.scss";

function Framework({ children }) {
  const swiperChildren = children.map((node, key) => {
    return <SwiperSlide key={key}>{node}</SwiperSlide>;
  });
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        freeMode={true}
        loop={true}
        loopFillGroupWithBlank={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[FreeMode, Pagination, Autoplay]}
        className="swiper-framework"
      >
        {swiperChildren}
      </Swiper>
    </>
  );
}

export default Framework;
