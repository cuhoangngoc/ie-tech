import { AiOutlineGlobal } from "react-icons/ai"
import { AiFillMail } from "react-icons/ai"
import { BsFillTelephoneFill } from "react-icons/bs"
import Logo from "../../public/asset/Logo-only.png";
import Image from "next/image";

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
          <div className="text-white text-center">411 University St, Seattle, USA</div>
          <div className="text-white text-center">Our Address</div>
        </div>
        <div>
          <div className="flex flex-row justify-center">
            <AiFillMail size={40} className='text-blue-500 my-2'></AiFillMail>
          </div>
          <div className="text-white text-center">contact@oceanthemes.net</div>
          <div className="text-white text-center">Our Mailbox</div>
        </div>
        <div>
          <div className="flex flex-row justify-center">
            <BsFillTelephoneFill size={40} className='text-blue-500 my-2'></BsFillTelephoneFill>
          </div>
          <div className="text-white text-center">+1 -800-456-478-23</div>
          <div className="text-white text-center">Our Phone</div>
        </div>
      </div>
      <div className="hidden md:grid md:grid-cols-5 text-white px-60 text-lg mb-10">
        <a href="#" className="hover:text-blue-500">Home</a>
        <a href="#" className="hover:text-blue-500">Services</a>
        <a href="#" className="hover:text-blue-500">Portfolio</a>
        <a href="#" className="hover:text-blue-500">Blog</a>
        <a href="#" className="hover:text-blue-500">Contacts</a>
      </div>
      <div className="text-white text-center py-4">Copyright © 2022 Engitech by OceanThemes. All Rights Reserved.</div>
    </div>
  )
}

export default Footer