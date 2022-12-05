import React, { useState, useRef } from "react";
import teamwork1 from "../../public/asset/teamwork1.jpeg";
import teamwork2 from "../../public/asset/teamwork2.jpg";
import teamwork3 from "../../public/asset/teamwork3.jpg";
import teamwork4 from "../../public/asset/teamwork4.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";

export const Slider = () => {
  const images = [teamwork1, teamwork2, teamwork3, teamwork4];

  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      loop={true}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      {images.map((imagelink, index) => (
        <div key={index}>
          <SwiperSlide>
            <div className="flex items-center justify-center">
              <img className="w-full" src={imagelink.src} />
            </div>
          </SwiperSlide>
        </div>
      ))}
    </Swiper>
  );
};

export default Slider;
