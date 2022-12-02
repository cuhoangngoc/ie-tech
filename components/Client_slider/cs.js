import React from 'react'
import useSWR from 'swr';
import { useEffect, useState } from 'react'
import Image from 'next/image'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, Lazy } from "swiper";
import image_1 from '../../public/asset/testi1.png'
import image_2 from '../../public/asset/testi2.png'
import { data } from 'autoprefixer';
import { list } from 'postcss';



const CS = (our_clients) => {
    return (
        <div className="py-16">



            <div className='text-center m-auto max-w-[1240px]'>
                <p className='uppercase text-[#7141b1]'>// OUR CLIENTS</p>
                <h3 className='text-black font-bold text-xl text-[35px] my-10'>We are Trusted <br></br> 15+ Countries Worldwide</h3>
                <div className='grid sm:grid-cols-2 gap-8 p-4'>
                    {our_clients.clients?.map((index_our_client, index) => (
                        <div className='flex flex-col p-5 bg-slate-300 rounded-xl shadow-xl' key={index}>
                            <div className='flex flex-row'>
                                <Image class="object-scale-down" src={index_our_client.image} alt="logo" width={60} height={60} />
                                <div className='ml-10 flex flex-col text-start'>
                                    <h3 className='text-[30px] font-bold'>{index_our_client.clientName}</h3>
                                    <p>{index_our_client.des}</p>
                                </div>
                            </div>
                            <div className='m-4'>
                                <p className='text-start'> {index_our_client.content}
                                </p>
                            </div>
                        </div>
                    ))}


                </div>
            </div>

        </div>
    )
}



export default CS