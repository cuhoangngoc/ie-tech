import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {RiMoneyEuroCircleLine} from'react-icons/ri'
import {BsCheckCircleFill}from 'react-icons/bs'
export const Choose_plan = (props) => {
  return (
            <div className='flex flex-col p-8 shadow-lg w-auto group hover:bg-[#262051]'>
              <div className='my-2'>
                <h3 className='font-bold text-[30px] text-black group-hover:text-[#ffff]'>{props.name}</h3>
                <div className='flex flex-row text-center'>
                  <RiMoneyEuroCircleLine size={35} className="text-[#6F38C5]"></RiMoneyEuroCircleLine>
                  <p className='text-[#43baff] font-bold text-[30px]'>{props.price}</p>
                </div>
                <p className='group-hover:text-[#ffff]'>Gói hàng tháng</p>
              </div>
              <div>
              {props.descriptionArr.map((item, index) => (
                <div className="my-4 flex flex-row py-2" key={index}>
                  <BsCheckCircleFill
                    size={20}
                    // regular expression để kiểm tra và render tính năng có trong plan
                    className={`${
                      item.match(/\d năm/i) ||
                      item.match(/chuẩn/i) ||
                      item.match(/^\d/i)
                        ? "text-[#F49D1A]"
                        : "text-[#68B984]"
                    } "group-hover:text-green-500"`}
                  />
                  <p className=" mx-4 group-hover:text-[#fff]">{item}</p>
                </div>
              ))}
              </div>
              <div className='flex justify-center cursor-pointer'>
                <div className='p-4 bg-[#44c8ff] w-[180px] rounded-xl group hover:bg-[#060606] hover:scale-105 ease-in duration-300 text-center'>
                  <Link href='#'>
                    <p className='uppercase text-[#ffff] group-hover:text-white'>choose plan</p>
                  </Link>
                </div>
              </div>
          </div>   
  )
}
export default Choose_plan