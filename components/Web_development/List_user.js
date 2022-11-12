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

  const clients = [
    { src: Client1, alt: 'client1' },
    { src: Client2, alt: 'client2' },
    { src: Client3, alt: 'client3' },
    // { src: Client4, alt: 'client4' },
    { src: Client5, alt: 'client5' },
    { src: Client6, alt: 'client6' },
  ];

  return (
    <div className='w-full bg-[#ffffff] my-5 py-3'>
      <div className='max-w-[1240px] flex flex-row justify-around m-auto'>
        {clients.map((client, index) => (
          <div key={index} className='cursor-pointer hover:scale-105 ease-in duration-300'>
            <Link href='#'>
              <a>
                <Image src={client.src} width='133.333px' height='50px' alt={client.alt} />
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
export default List_user
