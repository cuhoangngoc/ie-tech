import React from 'react';
import { AiFillCheckCircle } from 'react-icons/ai';

export const Support_serrvice = () => {
  const index_support = [
    {
      title: 'Machine Learning',
      decription: 'Hỗ trợ và Phát triển',
      image_color: '#7141b1',
    },
    {
      title: 'Artificial Intelligence',
      decription: 'Hỗ trợ và Phát triển',
      image_color: '#43baff',
    },
    {
      title: 'Augmented Reality',
      decription: 'Hỗ trợ và Phát triển',
      image_color: '#221d48',
    },
  ];
  return (
    <div className="m-auto my-40 w-full">
      <div className="m-auto  max-w-[1240px]">
        <div className="grid gap-8 sm:grid-cols-3 ">
          {index_support.map((support, index) => (
            <div
              className="flex cursor-pointer flex-row justify-center rounded-xl border-gray-400 bg-white text-center shadow-xl duration-300 ease-in hover:scale-105 hover:shadow-gray-700 "
              key={index}
            >
              <div className="p-5">
                <AiFillCheckCircle color={support.image_color} size={50} />
              </div>
              <div className="flex flex-col justify-center">
                <h4 className="text-center text-lg font-bold text-black">{support.title}</h4>
                <p>{support.decription}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Support_serrvice;
