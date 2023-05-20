import React from 'react';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const CS = (our_clients) => {
  return (
    <div className="py-16">
      <div className="m-auto max-w-[1240px] text-center">
        <p className="uppercase text-[#7141b1]">&sol;&sol; OUR CLIENTS</p>
        <h3 className="my-10 text-xl text-[35px] font-bold text-black">
          We are Trusted <br></br> 15+ Countries Worldwide
        </h3>
        <div className="grid gap-8 p-4 sm:grid-cols-2">
          {our_clients.clients?.map((index_our_client, index) => (
            <div className="flex flex-col rounded-xl bg-slate-300 p-5 shadow-xl" key={index}>
              <div className="flex flex-row">
                <Image
                  className="object-scale-down"
                  src={index_our_client.image}
                  alt="logo"
                  width={60}
                  height={60}
                />
                <div className="ml-10 flex flex-col text-start">
                  <h3 className="text-[30px] font-bold">{index_our_client.clientName}</h3>
                  <p>{index_our_client.des}</p>
                </div>
              </div>
              <div className="m-4">
                <p className="text-start"> {index_our_client.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CS;
