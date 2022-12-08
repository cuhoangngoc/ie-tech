import React from 'react'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import {HiArrowRight} from'react-icons/hi'
import ReactPlayer from 'react-player'
export const Techonolody = () => {
   const[p1, setP1]=useState(false)
   const[p2, setP2]=useState(false)
   const[p3, setP3]=useState(false)
   const handlediv1=()=>{
    setP1(!p1);
    if(p2) setP2(!p2);
    if(p3) setP3(!p3);
}
const handlediv2=()=>{
    if(p1) setP1(!p1);
    if(p3) setP3(!p3);
    setP2(!p2);
}
const handlediv3=()=>{
    if(p1) setP1(!p1);
    if(p2) setP2(!p2);
    setP3(!p3);
}

    const [hasWindow, setHasWindow] = useState(false);
    useEffect(() => {
      if (typeof window !== "undefined") {
        setHasWindow(true);
      }
    }, []);
  return ( 
    <div className='w-full '>
        <div className='grid sm:grid-cols-2 '>
            <div className='flex flex-col bg-[#211e3b] p-8'>
                
                <h1 className='text-[#ffff] text-lg font-bold text-[40px] py-2 my-4 leading-10'>We Organize Our Production Process</h1>
                <div className='grid sm:grid-cols-3 gap-4 uppercase'>     
                  
                        <div onClick={handlediv1}   className='p-4 rounded-xl text-black text-center cursor-pointer bg-[#ffff] mx-2 my-8 shadow hover:scale-105 hover:text-[#ffff] hover:bg-[#43baff] ease-in duration-300 active:bg-[#43baff]'>
                            <p className='uppercase font-bold'>ANALYSIS</p>
                        </div>
          
             
                        <div  onClick={handlediv2} className='p-4 rounded-xl text-black text-center cursor-pointer bg-[#ffff] mx-2 my-8 shadow hover:scale-105 hover:text-[#ffff] hover:bg-[#43baff] ease-in duration-300 '>
                            <p className='uppercase font-bold'>DESIGN</p>
                        </div>
                   
                   
                        <div  onClick={handlediv3}  className='p-4 rounded-xl text-black text-center cursor-pointer bg-[#ffff] mx-2 my-8 shadow hover:scale-105 hover:text-[#ffff] hover:bg-[#43baff] ease-in duration-300 '>
                            <p className='upercase font-bold'>TESTING</p>
                        </div>
                     
                </div>
                <p  className= {p1 ? 'text-[#ffff] text-xl': 'hidden'}>Engitech là đối tác được lựa chọn của nhiều doanh nghiệp hàng đầu thế giới, các doanh nghiệp vừa và nhỏ và những người thách thức công nghệ. Chúng tôi giúp các doanh nghiệp nâng cao giá trị của họ thông qua phát triển phần mềm tùy chỉnh, thiết kế sản phẩm, QA và các dịch vụ tư vấn. Dịch vụ thiết kế sản phẩm của chúng tôi cho phép bạn tạo nguyên mẫu, thử nghiệm và xác thực ý tưởng của mình.</p>
                <p className={p2 ?'text-[#ffff] text-xl' : 'hidden'}>Mặc dù việc tích hợp bảo mật với phương pháp DevOps luôn có nhu cầu cao, nhưng điều này đòi hỏi một loạt quy trình và công cụ hoàn toàn khác. DevOps đã được biết là tự hào về một phương pháp phát triển nhanh. Giờ đây, khi đầu vào của các chuyên gia bảo mật, tôi sẽ được đưa vào một môi trường hợp tác, dự án sẽ có một loạt các biện pháp bảo vệ an ninh hiệu quả..</p>
                <p className={p3 ?'text-[#ffff] text-xl': 'hidden'}>Mặc dù làm xáo trộn quy trình phát triển linh hoạt của phương pháp DevOps, các đầu vào bảo mật bổ sung chỉ tăng cường khả năng bảo vệ và độ tin cậy của dự án. Vì vậy, theo một cách nào đó, DevSecOps sẽ chỉ mở rộng lợi ích của phương pháp DevOps hơn nữa với các đầu vào bảo mật. DevOps đã được biết là tự hào về một phương pháp phát triển nhanh.</p>
                <div className='flex flex-row my-10'>
                    <div >
                        <HiArrowRight color='#43bafc' size={30}></HiArrowRight>
                    </div>
                    <div className=' cursor-pointer'>
                        <Link href='#'>
                            <p className='uppercase text-[#43bafc] text-xl'>Learn more</p>
                        </Link>
                    </div>
                </div> 
            </div>
                { hasWindow&& <ReactPlayer url='https://www.youtube.com/watch?v=wWgIAphfn2U' width='full' height='550px' controls={true}/> }
        </div>
    </div>
  )
}
export default Techonolody
