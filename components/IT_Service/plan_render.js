import React from 'react'
import Link from 'next/link'
import { RiMoneyEuroCircleLine } from 'react-icons/ri'
import { BsCheckCircleFill } from 'react-icons/bs'

const Plan_render = (plans) => {
    return (
        // tạo flex box cho item nằm dọc bằng flex col, cho background trắng với bg-white, chuyển màu nền khi hover với hover:bg-[#]
        <div className='flex flex-col p-8 bg-white shadow-lg w-auto group hover:bg-[#262051]'>

            <div className='my-2'>
                {/* in đậm với font bold cỡ chữ 30px chữ đen khi hover chuyển sang trắng */}
                <h3 className='font-bold text-[30px] text-black group-hover:text-white'>{plans.name}</h3>
                <div className='flex flex-row'>
                    <RiMoneyEuroCircleLine size={35} className="text-[#6F38C5]"></RiMoneyEuroCircleLine>
                    <h2 className='text-blue-400 font-bold text-5xl'>{plans.price}</h2>
                </div>
                <p className='group-hover:text-white'>Gói hàng tháng</p>
            </div>
            <div>
                {plans.descriptionArr.map((item, index) => (
                    <div className="my-4 flex flex-row py-2" key={index}>
                        <BsCheckCircleFill
                            size={20}
                            // regular expression  render tính năng có trong plan
                            className={`${item.match(/\d năm/i) ||
                                item.match(/chuẩn/i) ||
                                item.match(/^\d/i)
                                ? "text-[#F49D1A]"
                                : "text-[#68B984]"
                                } "group-hover:text-green-500"`}
                        />
                        <p className=" mx-4 group-hover:text-white">{item}</p>
                    </div>
                ))}
            </div>
            <div className='flex justify-center '>
                <div className='p-4 bg-blue-400 w-[180px] rounded-xl group hover:bg-black text-center'>
                    <Link href='#'>
                        <p className='uppercase text-white group-hover:text-white'>Mua gói</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Plan_render