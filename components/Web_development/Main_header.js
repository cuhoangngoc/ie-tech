import React from 'react';
import bg_header from '../../public/asset/bg-pheader.jpg';
export const Main_header = () => {
  return (
    <div
      className=" flex h-[100px] w-full justify-start md:h-[300px]"
      style={{
        backgroundImage: `url(${bg_header.src})`,
        width: '100%',
        height: '300px',
      }}
    >
      <div className="justify-star container m-auto w-full text-[#fff]">
        <h1 className="text-[20px] md:text-[60px]"> Web Development</h1>
      </div>
    </div>
  );
};
export default Main_header;
