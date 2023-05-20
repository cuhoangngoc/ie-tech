import React from 'react';
import Image from 'next/image';
import ImageServer from '../../public/asset/pic1-service1.png';
export const About_service = () => {
  const index_about_service = [
    {
      number_: '.01',
      title: 'Java Development',
      decripment: 'Chúng tôi cam kết xây dựng các giải pháp Java chất lượng cao và bền vững.',
    },
    {
      number_: '.02',
      title: 'PHP Development',
      decripment: 'Chúng tôi cam kết xây dựng các giải pháp PHP chất lượng cao và bền vững.',
    },
    {
      number_: '.03',
      title: 'C++ Development',
      decripment: 'Chúng tôi cam kết xây dựng các giải pháp C++ chất lượng cao và bền vững.',
    },
    {
      number_: '.04',
      title: '.NET Development',
      decripment: 'Chúng tôi cam kết xây dựng các giải pháp .NET chất lượng cao và bền vững.',
    },
  ];
  return (
    <div className="h-auto w-full bg-[#ffffff]">
      <div className="m-auto max-w-[1240px] px-10 py-40">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="p-2">
            <Image alt="/" src={ImageServer} width="570px" height="542px" />
          </div>
          <div className="p-2">
            <p className="text-lg uppercase -tracking-wider text-[#7141b1]">
              &#47;&#47; ABOUT SERVICE
            </p>
            <h1 className="text-lg text-[20px] font-bold leading-10 -tracking-wider text-black lg:text-[40px]">
              We Provide Best Web Development
            </h1>
            <div className="grid gap-8 md:grid-cols-2">
              {index_about_service.map((index_service, index) => (
                <div className="my-2 p-1" key={index}>
                  <p className="py-1 text-[25px] text-[#7141b1] ">{index_service.number_}</p>
                  <h3 className=" py-3 text-[20px] text-black">{index_service.title}</h3>
                  <p className="">{index_service.decripment}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About_service;
