import ACImg from '../../public/asset/aboutcompany-img.png'
import Image from "next/image"
import {BsFillAwardFill} from "react-icons/bs"
import {AiFillSetting} from "react-icons/ai"
import {AiOutlineArrowRight} from "react-icons/ai"

export const AboutCompany = () => {
  return (
    <div className='grid md:grid-cols-2'>
        <div className='mx-20 '>
            <h2 className='text-[50px] font-bold mb-6'>Your Partner for Software Innovation</h2>
            <p className='leading-8'>Engitech is the partner of choice for many of the world's leading enterprises, SMEs and technology challengers.
             We help businesses elevate their value through custom software development, product design, QA and consultancy 
             services.
            </p>
            <div className='grid md:grid-cols-2 my-12'>
                <div>  
                    <BsFillAwardFill size={50} color='#7141b1'></BsFillAwardFill>
                    <h3 className='font-bold my-5 text-[20px]'>Experience</h3>
                    <p>Our great team of more than 1400 software experts.</p>
                </div>           
                <div>
                    <AiFillSetting size={50} color='#7141b1'></AiFillSetting>
                    <h3 className='font-bold my-5 text-[20px]'>Quick Support</h3>
                    <hr ></hr>
                    <p>We'll help you test bold new ideas while sharing your.</p>
                </div>
            </div>
        </div>
        <div>
            <Image src={ACImg} alt="hero" width="950px" height="570px"/>
            <div className='flex flex-row pl-20'>
                <AiOutlineArrowRight size={20} color='rgb(59, 130, 246)' className='mr-4'></AiOutlineArrowRight>
                <a href='#' className='text-blue-500 hover:pl-3'>LEANR MORE ABOUT US</a>
            </div>
            
        </div>
        
    </div>   
  )
}

export default AboutCompany