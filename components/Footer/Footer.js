import { AiOutlineGlobal } from 'react-icons/ai';
import { AiFillMail } from 'react-icons/ai';
import { BsFillTelephoneFill } from 'react-icons/bs';
import Logo from '../../public/asset/Logo-only.png';
import Image from 'next/image';
import Link from 'next/link';
import { useSelector } from 'react-redux';
export const Footer = () => {
  const { isDark } = useSelector((state) => {
    return state.darklight;
  });
  return (
    <div className={isDark ? 'mt-10 bg-[#1b1b23] pb-10' : 'mt-10 bg-[#211e3b] pb-10'}>
      <a href="#" className="flex items-center justify-center gap-2">
        <Image src={Logo} alt="logo" width={50} height={50} />
        <span className="my-10 text-4xl text-white">ietech</span>
      </a>

      <div className="mb-10 grid md:mx-32 md:grid-cols-3">
        <div>
          <div className="flex flex-row justify-center">
            <AiOutlineGlobal size={40} className="my-2 text-blue-500"></AiOutlineGlobal>
          </div>
          <div className="text-center text-white ">
            <a
              className="hover:text-blue-500"
              href="https://www.google.com/maps/place/Tr%C6%B0%E1%BB%9Dng+%C4%90%E1%BA%A1i+h%E1%BB%8Dc+C%C3%B4ng+ngh%E1%BB%87+Th%C3%B4ng+tin+-+%C4%90HQG+TP.HCM/@10.8700142,106.8008654,17z/data=!3m1!4b1!4m6!3m5!1s0x317527587e9ad5bf:0xafa66f9c8be3c91!8m2!3d10.8700089!4d106.8030541!16s%2Fm%2F02qqlmm?hl=vi"
            >
              Khu phố 6, P.Linh Trung, Tp.Thủ Đức, Tp.Hồ Chí Minh
            </a>
          </div>
          <div className="text-center text-white">Địa chỉ</div>
        </div>
        <div>
          <div className="flex flex-row justify-center">
            <AiFillMail size={40} className="my-2 text-blue-500"></AiFillMail>
          </div>
          <div className="text-center text-white">
            <a className="hover:text-blue-500" href="mailto:info@uit.edu.vn">
              info@uit.edu.vn
            </a>
          </div>
          <div className="text-center text-white">Email</div>
        </div>
        <div>
          <div className="flex flex-row justify-center">
            <BsFillTelephoneFill size={40} className="my-2 text-blue-500"></BsFillTelephoneFill>
          </div>
          <div className="text-center text-white">
            <a className="hover:text-blue-500" href="tel:0123456789">
              +84 -0123456789
            </a>
          </div>
          <div className="text-center text-white">Điện thoại</div>
        </div>
      </div>
      <div className="mb-10 hidden px-60 text-center text-lg text-white md:grid md:grid-cols-5">
        <Link href="/" className="hover:text-blue-500">
          Trang chủ
        </Link>
        <Link href="IT" className="hover:text-blue-500">
          Dịch vụ IT
        </Link>
        <Link href="web_development" className="hover:text-blue-500">
          Web Development
        </Link>
        <Link href="mobile" className="hover:text-blue-500">
          Mobile Development
        </Link>
        <Link href="contact" className="hover:text-blue-500">
          Liên hệ
        </Link>
      </div>
      <div className="py-4 text-center text-white">
        Copyright © 2022 ietech. All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
