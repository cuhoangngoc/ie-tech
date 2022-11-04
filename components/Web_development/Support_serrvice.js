import React from 'react'
import Image from 'next/image'
import {AiFillCheckCircle} from'react-icons/ai'

export const Support_serrvice = () => {
  return (
    <div className='w-full m-auto my-40'>
        <div className='max-w-[1240px]  m-auto'>
            <div className='grid sm:grid-cols-3 gap-8 '>
                <div className='border-gray-400 shadow-xl  flex flex-row cursor-pointer justify-center text-center bg-white rounded-xl hover:shadow-gray-700 hover:scale-105 ease-in duration-300'>
                    <div className='p-5'><AiFillCheckCircle color='#7141b1' size={50}/></div>
                    <div className='flex flex-col justify-center'>
                        <h4 className='text-black text-center font-bold text-lg'>Machine Learning</h4>
                        <p>Support and Evolution</p>
                    </div>   
                </div>
                <div className='border-gray-400 shadow-xl  flex flex-row cursor-pointer justify-center text-center bg-white rounded-xl hover:shadow-gray-700 hover:scale-105 ease-in duration-300'>
                    <div className='p-5'><AiFillCheckCircle color='#43baff' size={50}/></div>
                    <div className='flex flex-col justify-center'>
                        <h4 className='text-black text-center font-bold text-lg'>Artificial Intelligence</h4>
                        <p>Support and Evolution</p>
                    </div>   
                </div>
                <div className='border-gray-400 shadow-xl  flex flex-row cursor-pointer justify-center text-center bg-white rounded-xl hover:shadow-gray-700 hover:scale-105 ease-in duration-300'>
                    <div className='p-5'><AiFillCheckCircle color='#221d48' size={50}/></div>
                    <div className='flex flex-col justify-center'>
                        <h4 className='text-black text-center font-bold text-lg'>Augmented Realityg</h4>
                        <p>Support and Evolution</p>
                    </div>   
                </div>
                
            </div>
        </div>
    </div>
  )
}
export default Support_serrvice