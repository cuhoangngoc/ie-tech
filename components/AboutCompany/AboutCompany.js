import ACImg from '../../public/asset/aboutcompany-img.png'
import Image from "next/image"
import {BsFillAwardFill} from "react-icons/bs"
import {AiFillSetting} from "react-icons/ai"
import {AiOutlineArrowRight} from "react-icons/ai"

export const AboutCompany = () => {
  return (
    <div className='grid md:grid-cols-2'>
        <div className='mx-4 sm:mx-20'>
            <h2 className='text-[50px] font-bold mb-6'>Đối tác đổi mới phần mềm của bạn</h2>
            <p className='leading-8'>IE Tech là đối tác của nhiều doanh nghiệp hàng đầu thế giới, các doanh nghiệp vừa và nhỏ và những công nghệ cao lựa chọn. Chúng tôi giúp các doanh nghiệp nâng cao giá trị của họ thông qua phát triển phần mềm tùy chỉnh, thiết kế sản phẩm, QA và các dịch vụ tư vấn.
            </p>
            <div className='grid md:grid-cols-2 my-12'>
                <div>  
                    <BsFillAwardFill size={50} color='#7141b1'></BsFillAwardFill>
                    <h3 className='font-bold my-5 text-[20px]'>Kinh nghiệm</h3>
                    <p>Đội ngũ tuyệt vời của chúng tôi gồm hơn 1400 chuyên gia phần mềm.</p>
                </div>           
                <div>
                    <AiFillSetting size={50} color='#7141b1'></AiFillSetting>
                    <h3 className='font-bold my-5 text-[20px]'>Hỗ trợ nhanh</h3>
                    <hr ></hr>
                    <p>Chúng tôi sẽ giúp bạn thử nghiệm những ý tưởng táo bạo mới trong khi chia sẻ ý tưởng của bạn.</p>
                </div>
            </div>
        </div>
        <div>
            <Image src={ACImg} alt="company" className='w-screen md:w-[950px] md:h-[570px]'/>
            <div className='flex flex-row pl-20'>
                <AiOutlineArrowRight size={20} color='rgb(59, 130, 246)' className='mr-4'></AiOutlineArrowRight>
                <a href='#' className='text-blue-500 hover:pl-3'>LEANR MORE ABOUT US</a>
            </div>
            
        </div>
        
    </div>   
  )
}

export default AboutCompany