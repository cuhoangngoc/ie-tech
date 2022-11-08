import React from 'react'
import Image from 'next/image'
import bg_header from '../../public/asset/bg-pheader.jpg'
export const Main_header = () => {
  return (
    <div className=' w-full text-center flex justify-start h-[100px] md:h-[300px]' style={{
      backgroundImage: `url(${bg_header.src})`,
      width: '100%',
      height: '300px',
    }}>
      
        <div className=' w-full m-auto flex justify-star text-center'>
            <div className=' text-[#ffff] text-center'>
                <h1 className='text-[20px] md:text-[60px]' > Web Development</h1>
            </div>
        </div>
    </div>
  )
}
export default Main_header
