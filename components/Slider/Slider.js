import React, { useState, useRef } from "react";
import Image from "next/image";
import VietNamimg from "../../public/asset/VietNamimg.png";
import Chinaimg from "../../public/asset/Chinaimg.png";
import USAimg from "../../public/asset/USAimg.png";
import Englandimg from "../../public/asset/Englandimg.png"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";

export const Slider = () => {
    const images = [
        VietNamimg,
        Chinaimg,
        USAimg,
        Englandimg
    ]

  return (    
    <div className="py-16">
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
          <div key={index} >
            <SwiperSlide className='text-center'><Image width='500px' height='300px' src={imagelink}/></SwiperSlide>
          </div>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
