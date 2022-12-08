import React from 'react'
import Image from 'next/image'
import ImageServer from'../../public/asset/pic1-service1.png'
export const About_service = () => {
    const index_about_service=[
        {
            number_:".01",
            title:"Java Development",
            decripment:"Chúng tôi cam kết xây dựng các giải pháp Java chất lượng cao và bền vững.",
        },
        {
            number_:".02",
            title:"PHP Development",
            decripment:"Chúng tôi cam kết xây dựng các giải pháp PHP chất lượng cao và bền vững.",
        },
        {
            number_:".03",
            title:"C++ Development",
            decripment:"Chúng tôi cam kết xây dựng các giải pháp C++ chất lượng cao và bền vững.",
        },
        {
            number_:".04",
            title:".NET Development",
            decripment:"Chúng tôi cam kết xây dựng các giải pháp .NET chất lượng cao và bền vững.",
        },
    ]
  return (
    <div className='w-full h-auto bg-[#ffffff]'>
        <div className='max-w-[1240px] m-auto px-10 py-40'>
            <div className='grid md:grid-cols-2 gap-8'>
                <div className='p-2'>
                    <Image alt='/' src={ImageServer} width='570px' height='542px'/>
                </div>
                <div className='p-2'>
                    <p className='text-lg text-[#7141b1] -tracking-wider uppercase'>// ABOUT SERVICE</p>
                    <h1 className='text-lg text-[20px] lg:text-[40px] text-black -tracking-wider font-bold leading-10'>We Provide Best Web Development</h1>
                    <div className='grid md:grid-cols-2 gap-8'>
                        {index_about_service.map((index_service, index)=>(
                            <div className='p-1 my-2'key={index}>
                              <p className='text-[#7141b1] text-[25px] py-1 '>{index_service.number_}</p>
                              <h3 className=' text-black text-[20px] py-3'>{index_service.title}</h3>
                              <p className=''>{index_service.decripment}</p>
                          </div>
                        ))}  
                    </div>
                </div>
           
            </div>
        </div>
    </div>
  )
}
export default About_service
