import React from 'react'
import Image from 'next/image'
import ImageServer from'../../public/assets/pic1-service1.png'
export const About_service = () => {
  return (
    <div className='w-full h-auto bg-yellow-100'>
        <div className='max-w-[1240px] m-auto px-10 py-40'>
            <div className='grid md:grid-cols-2 gap-8'>
                <div className='p-2'>
                    <Image alt='/' src={ImageServer} width='570px' height='542px'/>
                </div>
                <div className='p-2'>
                    <p className='text-lg text-[#7141b1] -tracking-wider uppercase'>// ABOUT SERVICE</p>
                    <h1 className='text-lg text-[20px] lg:text-[40px] text-black -tracking-wider font-bold'>We Provide Best Web Development</h1>
                    <div className='grid md:grid-cols-2 gap-8'>
                        <div className='p-1 my-2'>
                            <p className='text-[#7141b1] text-[25px] py-1 '>.01</p>
                            <h3 className=' text-black text-[20px] py-3'>Java Development</h3>
                            <p className=''>We’re committed to building sustainable and high-quality Java solutions.</p>
                        </div>
                        <div className='p-1 my-2'>
                            <p className='text-[#7141b1] text-[25px] py-1 '>.02</p>
                            <h3 className=' text-black text-[20px] py-3'>PHP Development</h3>
                            <p className=''>We’re committed to building sustainable and high-quality Java solutions.</p>
                        </div>

                        <div className='p-1 my-2'>
                            <p className='text-[#7141b1] text-[25px] py-1 '>.03</p>
                            <h3 className=' text-black text-[20px] py-3'>C++ Development</h3>
                            <p className=''>We’re committed to building sustainable and high-quality Java solutions.</p>
                        </div> <div className='p-1 my-2'>
                            <p className='text-[#7141b1] text-[25px] py-1 '>.04</p>
                            <h3 className=' text-black text-[20px] py-3'>.NET Development</h3>
                            <p className=''>We’re committed to building sustainable and high-quality Java solutions.</p>
                        </div>
                    </div>
                </div>
           
            </div>
        </div>
    </div>
  )
}
export default About_service
