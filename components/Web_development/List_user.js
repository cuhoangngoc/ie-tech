import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Client1 from '../../public/asset/client1.svg'
import Client2 from '../../public/asset/client2.svg'
import Client3 from '../../public/asset/client3.svg'
import Client4 from '../../public/asset/client4.png'
import Client5 from '../../public/asset/client5.svg'
import Client6 from '../../public/asset/client6.svg'
export const List_user = () => {

  return (
    <div className='w-full bg-[#ffffff] my-5 py-3'>
    
      <div className=' max-w-[1240px] flex flex-row justify-around m-auto'>
        <div className='cursor-pointer hover:scale-105 ease-in duration-300'>
            <Link href='#'>
              <Image src={Client1} width='133.333px' height='50px'/>
            </Link>
        </div>
         
        <div className='cursor-pointer hover:scale-105 ease-in duration-300'>
            <Link href='#'>
              <Image src={Client2} width='133.333px' height='50px'/>
            </Link>
        </div>
        <div className='cursor-pointer hover:scale-105 ease-in duration-300'>
            <Link href='#'>
              <Image src={Client3} width='133.333px' height='50px'/>
            </Link>
        </div>
        {/* <div className='cursor-pointer hover:scale-105 ease-in duration-300'>
            <Link href='#'>
              <Image src={Client4} width='133.333px' height='50px'/>
            </Link>
        </div> */}
        <div className='cursor-pointer hover:scale-105 ease-in duration-300'>
            <Link href='#'>
              <Image src={Client5} width='133.333px' height='50px'/>
            </Link>
        </div>
        <div className='cursor-pointer hover:scale-105 ease-in duration-300'>
            <Link href='#'>
              <Image src={Client6} width='133.333px' height='50px'/>
            </Link>
        </div>

      </div>
        
    </div>

  )
}
export default List_user
