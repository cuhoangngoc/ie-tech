import Link from 'next/link';
import Image from 'next/image';

const WeCarry = () => {
  return (
    <div className="flex m-auto h-[350px] max-w-[1100px] flex-col md:flex-row">
      <div className="relative w-full h-full flex-grow">
        <Image
          src="/asset/contact.jpg"
          alt="background image"
          layout="fill"
          objectFit="cover"
        />
      </div>
      
      <div className="pt-16 flex justify-center md:justify-start md:pl-20">
        <h1 className="text-2xl font-bold text-blue-600 md:text-4xl">
        Let&apos;s Build Your Website!
        </h1>
      </div>
        <Link
          href="/contact"
          className="m-3 border-2 p-3 text-blue-600 hover:bg-blue-500 hover:text-white"
        >
          CONTACT US
        </Link>
    </div>
    
  );
};

export default WeCarry;