import { CDN_URL } from "../common/constants";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router-dom";

const Carousel = ({ resData }) => {
  console.log(resData);

  return (
    <section className=" mb-10 ">
      <h1 className="text-3xl font-bold mb-8">Top restaurant chains</h1>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Autoplay]}
        navigation
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 0,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 0,
          },
        }}
      >
        {resData.map((res) => (
          <SwiperSlide className="text-center flex flex-col items-center ">
            <Link to={"/res/" + res.info.id} key={res.info.id}>
              <img
                className="shadow-md rounded-full h-52 w-52 object-cover mb-2"
                src={CDN_URL + res.info.cloudinaryImageId}
                alt="banner.img"
              ></img>
              <h2 className="text-lg font-medium">{res.info.name}</h2>
              <p className="text-sm font-extrabold">{`${res?.info?.aggregatedDiscountInfoV3?.header} ${res?.info?.aggregatedDiscountInfoV3?.subHeader}`}</p>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );

  const data = [];
};

export default Carousel;
