import Link from "next/link";
import { RiMoneyEuroCircleLine } from "react-icons/ri";
import { BsCheckCircleFill, BsDashCircleFill } from "react-icons/bs";
import React from "react";

const Plan = (props) => {
  return (
    <div className="group flex w-auto flex-col rounded-md bg-slate-300 p-8 shadow-lg duration-300 ease-in-out hover:skew-x-1 hover:skew-y-2 hover:bg-[#8D9EFF]">
      <div className="my-2">
        <h3 className="text-[30px] font-bold text-black group-hover:text-[#ffff]">
          {props.name}
        </h3>
        <div className="flex flex-row items-center text-center">
          <RiMoneyEuroCircleLine size={35} className="text-[#6F38C5]" />
          <p className="text-[30px] font-bold text-[#6F38C5]">{props.price}</p>
        </div>
        <p className="group-hover:text-[#ffff]">Gói hàng tháng</p>
      </div>
      <div>
        {/* render các tính năng có trong plan */}
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
      <div className="flex cursor-pointer justify-center">
        <div className="group w-[180px] rounded-xl bg-[#44c8ff] p-4 text-center duration-300 ease-in hover:scale-105 hover:bg-[#060606]">
          <Link href={`checkout/${props.id}`}>
            <p className="uppercase text-[#ffff]">Mua ngay</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Plan;
