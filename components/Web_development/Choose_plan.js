import React from 'react';
import Link from 'next/link';
import { IoLogoUsd } from 'react-icons/io';
import { BsCheckCircleFill } from 'react-icons/bs';
export const Choose_plan = (props) => {
  return (
    <div className="group flex w-auto flex-col p-8 shadow-lg hover:bg-[#262051]">
      <div className="my-2">
        <h3 className="text-[30px] font-bold text-black group-hover:text-[#ffff]">{props.name}</h3>
        <div className="flex flex-row text-center">
          <IoLogoUsd size={35} className="text-[#6F38C5]"></IoLogoUsd>
          <p className="text-[30px] font-bold text-[#43baff]">{props.price}</p>
        </div>
        <p className="group-hover:text-[#ffff]">Gói hàng tháng</p>
      </div>
      <div>
        {props.descriptionArr.map((item, index) => (
          <div className="my-4 flex flex-row py-2" key={index}>
            <BsCheckCircleFill
              size={20}
              // regular expression để kiểm tra và render tính năng có trong plan
              className={`${
                item.match(/\d năm/i) || item.match(/chuẩn/i) || item.match(/^\d/i)
                  ? 'text-[#F49D1A]'
                  : item.match(/^không quản|hỗ|cung/i)
                  ? 'text-red-800'
                  : 'text-[#68B984]'
              } "group-hover:text-green-500"`}
            />
            <p className=" mx-4 group-hover:text-[#fff]">{item}</p>
          </div>
        ))}
      </div>
      <div className="flex cursor-pointer justify-center">
        <div className="group w-[180px] rounded-xl bg-[#44c8ff] p-4 text-center duration-300 ease-in hover:scale-105 hover:bg-[#060606]">
          <Link href={`checkout/${props.id}`}>
            <p className="uppercase text-[#ffff] group-hover:text-white">choose plan</p>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Choose_plan;
