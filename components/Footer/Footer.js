import { AiOutlineGlobal } from "react-icons/ai"
import { AiFillMail } from "react-icons/ai"
import { BsFillTelephoneFill } from "react-icons/bs"
import Logo from "../../public/asset/Logo-only.png";
import Image from "next/image";
import { useState } from "react";

export const Footer = () => {
  
  return (
    <div className="bg-[#211e3b] mt-10 pb-10">
      <a href="#" className='flex justify-center items-center gap-2'>
        <Image src={Logo} alt="logo" width={50} height={50} />
        <span className="text-white text-4xl my-10">ietech</span>
      </a>

      <div className="grid md:grid-cols-3 md:mx-32 mb-10">
        <div>
          <div className="flex flex-row justify-center">
            <AiOutlineGlobal size={40} className='text-blue-500 my-2'></AiOutlineGlobal>
          </div>
          <div className="text-white text-center "><a className="hover:text-blue-500" href="https://www.google.com/maps/place/Tr%C6%B0%E1%BB%9Dng+%C4%90%E1%BA%A1i+h%E1%BB%8Dc+C%C3%B4ng+ngh%E1%BB%87+Th%C3%B4ng+tin+-+%C4%90HQG+TP.HCM/@10.8700142,106.8008654,17z/data=!3m1!4b1!4m6!3m5!1s0x317527587e9ad5bf:0xafa66f9c8be3c91!8m2!3d10.8700089!4d106.8030541!16s%2Fm%2F02qqlmm?hl=vi">Khu phố 6, P.Linh Trung, Tp.Thủ Đức, Tp.Hồ Chí Minh</a></div>
          <div className="text-white text-center">Địa chỉ</div>
        </div>
        <div>
          <div className="flex flex-row justify-center">
            <AiFillMail size={40} className='text-blue-500 my-2'></AiFillMail>
          </div>
          <div className="text-white text-center"><a className="hover:text-blue-500" href="mailto:info@uit.edu.vn">info@uit.edu.vn</a></div>
          <div className="text-white text-center">Email</div>
        </div>
        <div>
          <div className="flex flex-row justify-center">
            <BsFillTelephoneFill size={40} className='text-blue-500 my-2'></BsFillTelephoneFill>
          </div>
          <div className="text-white text-center"><a className="hover:text-blue-500" href="tel:0123456789">+84 -0123456789</a></div>
          <div className="text-white text-center">Điện thoại</div>
        </div>
      </div>
      <div className="hidden md:grid md:grid-cols-5 text-white px-60 text-lg mb-10">
        <a href="/" className="hover:text-blue-500">Trang chủ</a>
        <a href="IT" className="hover:text-blue-500">Dịch vụ IT</a>
        <a href="web_development" className="hover:text-blue-500">Web Development</a>
        <a href="mobile" className="hover:text-blue-500">Mobile Development</a>
        <a href="contact" className="hover:text-blue-500">Liên hệ</a>
      </div>
      <div className="text-white text-center py-4">Copyright © 2022 Engitech by OceanThemes. All Rights Reserved.</div>
    </div>
  )
}

export default Footer