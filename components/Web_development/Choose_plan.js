import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {RiMoneyEuroCircleLine} from'react-icons/ri'
import {BsCheckLg}from 'react-icons/bs'
export const Choose_plan = () => {
  const Choose_plans=[
    {
      title:"Basic Plan",
      price:"129.99",
      package:"Monthly Package",
      about1:"Web Counsulting",
      about2:"24/7 System Monitoring",
      about3:"Machine and Deep Learning",
      about4:"Data Quality Management",
      about5:"Security Management",
      image_color_1:"#43baff",
      image_color_2:"#ababab",

    },
    {
      title:"Economy Plan",
      price:"159.99",
      package:"Monthly Package",
      about1:"Web Counsulting",
      about2:"24/7 System Monitoring",
      about3:"Machine and Deep Learning",
      about4:"Data Quality Management",
      about5:"Security Management",
      image_color_1:"#43baff",
      image_color_2:"#ababab",

    },
    {
      title:"Premium Plan",
      price:"189.99",
      package:"Monthly Package",
      about1:"Web Counsulting",
      about2:"24/7 System Monitoring",
      about3:"Machine and Deep Learning",
      about4:"Data Quality Management",
      about5:"Security Management",
      image_color_1:"#43baff",
      image_color_2:"#ababab",

    },
  ]
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
          {Choose_plans.map((index_plan,index)=>(
            <div className='flex flex-col p-8 shadow-lg w-auto group hover:bg-[#262051]' key={index}>
              <div className='my-2'>
                <h3 className='font-bold text-[30px] text-black group-hover:text-[#ffff]'>{index_plan.title}</h3>
                <div className='flex flex-row text-center'>
                  <RiMoneyEuroCircleLine size={35} color={index_plan.image_color_1}></RiMoneyEuroCircleLine>
                  <p className='text-[#43baff] font-bold text-[30px]'>{index_plan.price}</p>
                </div>
                <p className='group-hover:text-[#ffff]'>{index_plan.package}</p>
              </div>
              <div>
                <div className='flex flex-row py-2 my-4'>
                  <BsCheckLg size={20} color={index_plan.image_color_1} ></BsCheckLg>
                  <p className=' group-hover:text-[#ffff] mx-4'>{index_plan.about1}</p>
                </div>
                <div className='flex flex-row py-2 my-4'>
                  <BsCheckLg size={20} color={index_plan.image_color_1} ></BsCheckLg>
                  <p className=' group-hover:text-[#ffff] mx-4'>{index_plan.about2}</p>
                </div>
                <div className='flex flex-row py-2 my-4'>
                  <BsCheckLg size={20} color={index_plan.image_color_1} ></BsCheckLg>
                  <p className=' group-hover:text-[#ffff] mx-4'>{index_plan.about3}</p>
                </div>
                <div className='flex flex-row py-2 my-4'>
                  <BsCheckLg size={20} color={index_plan.image_color_2} ></BsCheckLg>
                  <p className=' group-hover:text-[#ffff] mx-4'>{index_plan.about4}</p>
                </div>
                <div className='flex flex-row py-2 my-4'>
                  <BsCheckLg size={20} color={index_plan.image_color_2}></BsCheckLg>
                  <p className=' group-hover:text-[#ffff] mx-4'>{index_plan.about5}</p>
                </div>
              </div>
              <div className='flex justify-center cursor-pointer'>
                <div className='p-4 bg-[#44c8ff] w-[180px] rounded-xl group hover:bg-[#060606] hover:scale-105 ease-in duration-300 text-center'>
                  <Link href='#'>
                    <p className='uppercase text-[#ffff] group-hover:text-black'>choose plan</p>
                  </Link>
                </div>
              </div>
            
          </div>
          ))}
          

          

          
        </div>
      </div>
       

    </div>
  )
}
export default Choose_plan