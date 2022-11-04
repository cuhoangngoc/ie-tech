import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {RiMoneyEuroCircleLine} from'react-icons/ri'
import {BsCheckLg}from 'react-icons/bs'
export const Choose_plan = () => {
  return (
    <div className='w-full my-10 bg-white'>
      <div className='max-w-[1240px] m-auto'>
      <div className='w-full text-center'>
            <p className='uppercase text-[#7141b1]'>//choose your plan</p>
            <h3 className='text-black font-bold text-xl text-[30px] py-4'>
              Flexible Pricing Plans
            </h3>
            <p className='py-2'>We help businesses elevate their value through custom software development,<br></br>product design, QA and consultancy services.</p>
        </div>
        <div className='grid md:grid-cols-3 gap-8'>
          <div className='flex flex-col p-8 shadow-lg w-auto group hover:bg-[#262051]'>
            <div className='my-2'>
              <h3 className='font-bold text-[30px] text-black group-hover:text-[#ffff]'>Basic Plan</h3>
              <div className='flex flex-row text-center'>
                <RiMoneyEuroCircleLine size={35} color='#43baff'></RiMoneyEuroCircleLine>
                <p className='text-[#43baff] font-bold text-[30px]'>122.99</p>
              </div>
              <p>Monthly Package</p>
            </div>
            <div>
              <div className='flex flex-row py-2'>
                <BsCheckLg size={20} color='#43baff' ></BsCheckLg>
                <p className=' group-hover:text-[#ffff] mx-4'>Web Counsulting</p>
              </div>
              <div className='flex flex-row py-2'>
                <BsCheckLg size={20} color='#43baff' ></BsCheckLg>
                <p className=' group-hover:text-[#ffff] mx-4'>24/7 System Monitoring</p>
              </div>
              <div className='flex flex-row py-2'>
                <BsCheckLg size={20} color='#43baff' ></BsCheckLg>
                <p className=' group-hover:text-[#ffff] mx-4'>Machine and Deep Learning</p>
              </div>
              <div className='flex flex-row py-2'>
                <BsCheckLg size={20} color='#43baff' ></BsCheckLg>
                <p className=' group-hover:text-[#ffff] mx-4'>Data Quality Management</p>
              </div>
              <div className='flex flex-row py-2'>
                <BsCheckLg size={20} color='#43baff' ></BsCheckLg>
                <p className=' group-hover:text-[#ffff] mx-4'>Security Management</p>
              </div>
            </div>
            <div className='flex justify-center cursor-pointer'>
              <div className='p-4 bg-[#44c8ff] w-[180px] rounded-xl group hover:bg-[#7141b1] hover:scale-105 ease-in duration-300 text-center'>
                <Link href='#'>
                  <p className='uppercase text-[#ffff] group-hover:text-black'>choose plan</p>
                </Link>
              </div>
            </div>
            
          </div>

          <div className='flex flex-col p-8 shadow-lg w-auto group hover:bg-[#262051]'>
            <div className='my-2'>
              <h3 className='font-bold text-[30px] text-black group-hover:text-[#ffff]'>Basic Plan</h3>
              <div className='flex flex-row text-center'>
                <RiMoneyEuroCircleLine size={35} color='#43baff'></RiMoneyEuroCircleLine>
                <p className='text-[#43baff] font-bold text-[30px]'>122.99</p>
              </div>
              <p>Monthly Package</p>
            </div>
            <div>
              <div className='flex flex-row py-2'>
                <BsCheckLg size={20} color='#43baff' ></BsCheckLg>
                <p className=' group-hover:text-[#ffff] mx-4'>Web Counsulting</p>
              </div>
              <div className='flex flex-row py-2'>
                <BsCheckLg size={20} color='#43baff' ></BsCheckLg>
                <p className=' group-hover:text-[#ffff] mx-4'>24/7 System Monitoring</p>
              </div>
              <div className='flex flex-row py-2'>
                <BsCheckLg size={20} color='#43baff' ></BsCheckLg>
                <p className=' group-hover:text-[#ffff] mx-4'>Machine and Deep Learning</p>
              </div>
              <div className='flex flex-row py-2'>
                <BsCheckLg size={20} color='#43baff' ></BsCheckLg>
                <p className=' group-hover:text-[#ffff] mx-4'>Data Quality Management</p>
              </div>
              <div className='flex flex-row py-2'>
                <BsCheckLg size={20} color='#43baff' ></BsCheckLg>
                <p className=' group-hover:text-[#ffff] mx-4'>Security Management</p>
              </div>
            </div>
            <div className='flex justify-center cursor-pointer'>
              <div className='p-4 bg-[#44c8ff] w-[180px] rounded-xl group hover:bg-[#7141b1] hover:scale-105 ease-in duration-300 text-center'>
                <Link href='#'>
                  <p className='uppercase text-[#ffff] group-hover:text-black'>choose plan</p>
                </Link>
              </div>
            </div>
            
          </div>

          <div className='flex flex-col p-8 shadow-lg w-auto group hover:bg-[#262051]'>
            <div className='my-2'>
              <h3 className='font-bold text-[30px] text-black group-hover:text-[#ffff]'>Basic Plan</h3>
              <div className='flex flex-row text-center'>
                <RiMoneyEuroCircleLine size={35} color='#43baff'></RiMoneyEuroCircleLine>
                <p className='text-[#43baff] font-bold text-[30px]'>122.99</p>
              </div>
              <p>Monthly Package</p>
            </div>
            <div>
              <div className='flex flex-row py-2'>
                <BsCheckLg size={20} color='#43baff' ></BsCheckLg>
                <p className=' group-hover:text-[#ffff] mx-4'>Web Counsulting</p>
              </div>
              <div className='flex flex-row py-2'>
                <BsCheckLg size={20} color='#43baff' ></BsCheckLg>
                <p className=' group-hover:text-[#ffff] mx-4'>24/7 System Monitoring</p>
              </div>
              <div className='flex flex-row py-2'>
                <BsCheckLg size={20} color='#43baff' ></BsCheckLg>
                <p className=' group-hover:text-[#ffff] mx-4'>Machine and Deep Learning</p>
              </div>
              <div className='flex flex-row py-2'>
                <BsCheckLg size={20} color='#43baff' ></BsCheckLg>
                <p className=' group-hover:text-[#ffff] mx-4'>Data Quality Management</p>
              </div>
              <div className='flex flex-row py-2'>
                <BsCheckLg size={20} color='#43baff' ></BsCheckLg>
                <p className=' group-hover:text-[#ffff] mx-4'>Security Management</p>
              </div>
            </div>
            <div className='flex justify-center cursor-pointer '>
              <div className='p-4 bg-[#44c8ff] w-[180px] rounded-xl group hover:bg-[#7141b1] hover:scale-105 ease-in duration-300 text-center'>
                <Link href='#'>
                  <p className='uppercase text-[#ffff] group-hover:text-black '>choose plant</p>
                </Link>
              </div>
            </div>
            
          </div>
        </div>
      </div>
       

    </div>
  )
}
export default Choose_plan