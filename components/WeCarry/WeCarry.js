import Link from 'next/link';
import Image from 'next/image';
export const WeCarry = () => {
  return (
    <div className="m-auto flex h-[350px] max-w-[1100px] flex-col md:flex-row">
      <div className="relative w-full h-full">
        <Image
          src="/asset/contact.jpg"
          alt="background image"
          objectFit="cover"
        />
      </div>
      <div className="pt-16">
      <h1 className="pl-4 pt-10 text-[30px] font-bold text-blue-600 md:pl-20 md:text-[50px]">
          Let&apos;s Build Your Website!
        </h1>
        <Link
          href="/contact"
          className="m-3 border-2 p-3 text-blue-600 hover:bg-blue-500 hover:text-white md:ml-28"
        >
          CONTACT US
        </Link>
      </div>
    </div>
  );
};