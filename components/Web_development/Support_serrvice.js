import React from 'react'
import Image from 'next/image'
import {AiFillCheckCircle} from'react-icons/ai'

export const Support_serrvice = () => {
    const index_support=[
        {
            title: "Machine Learning",
            decription: "Hỗ trợ và Phát triển",
            image_color: "#7141b1",
            
        },
        {
            title: "Artificial Intelligence",
            decription: "Hỗ trợ và Phát triển",
            image_color: "#43baff",
            
        },
        {
            title: "Augmented Reality",
            decription: "Hỗ trợ và Phát triển",
            image_color: "#221d48",
            
        }
    ]
  return (
    <div className='w-full m-auto my-40'>
        <div className='max-w-[1240px]  m-auto'>
            <div className='grid sm:grid-cols-3 gap-8 '>
                {index_support.map((support, index)=>
                (
                    <div className='border-gray-400 shadow-xl flex flex-row cursor-pointer justify-center text-center bg-white rounded-xl hover:shadow-gray-700 hover:scale-105 ease-in duration-300 'key={index}>
                        <div className='p-5'><AiFillCheckCircle color={support.image_color} size={50}/></div>
                        <div className='flex flex-col justify-center'>
                            <h4 className='text-black text-center font-bold text-lg'>{support.title}</h4>
                            <p>{support.decription}</p>
                        </div>   
                     </div>
                ))} 
            </div>
        </div>
    </div>
  )
}
export default Support_serrvice