import ACImg from '../../public/asset/aboutcompany-img.png';
import Image from 'next/image';
import { BsFillAwardFill } from 'react-icons/bs';
import { AiFillSetting } from 'react-icons/ai';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { vi, en } from '../../feature/translate/language';
import { useSelector } from 'react-redux';
export const AboutCompany = () => {
  const { isEnglish } = useSelector((state) => {
    return state.language;
  });
  const { aboutCompany } = isEnglish ? en : vi;
  return (
    <div className="grid md:grid-cols-2">
      <div className="mx-4 sm:mx-20">
        <h2 className="mb-6 text-[50px] font-bold">{aboutCompany.title}</h2>
        <p className="leading-8">{aboutCompany.Description}</p>
        <div className="my-12 grid md:grid-cols-2">
          <div>
            <BsFillAwardFill size={50} color="#7141b1"></BsFillAwardFill>
            <h3 className="my-5 text-[20px] font-bold">{aboutCompany.Experience}</h3>
            <p>{aboutCompany.ExperienceDescription}</p>
          </div>
          <div>
            <AiFillSetting size={50} color="#7141b1"></AiFillSetting>
            <h3 className="my-5 text-[20px] font-bold">{aboutCompany.Help}</h3>
            <hr></hr>
            <p>{aboutCompany.HelpDescription}</p>
          </div>
        </div>
      </div>
      <div>
        <Image src={ACImg} alt="company" className="w-screen md:h-[570px] md:w-[950px]" />
        <div className="flex flex-row pl-20">
          <AiOutlineArrowRight
            size={20}
            color="rgb(59, 130, 246)"
            className="mr-4"
          ></AiOutlineArrowRight>
          <a href="/GioiThieu" className="text-blue-500 hover:pl-3">
            LEANR MORE ABOUT US
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutCompany;
