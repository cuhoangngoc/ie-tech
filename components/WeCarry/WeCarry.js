import Link from 'next/link';
import Image from 'next/image';

export const WeCarry = () => {
  return (
    <div className="m-auto flex h-[350px]  max-w-[1100px] flex-col bg-[url('../public/asset/contact.webp')] md:flex-row">
      <h1 className="pl-4 pt-10 text-[30px] font-bold text-blue-600 md:pl-20 md:text-[50px]">
        Let&apos;s Build Your Website!
      </h1>
      <div className="pt-16">
        <Link
          href="/contact"
          className="m-3 border-2 p-3 text-blue-600 hover:bg-blue-500 hover:text-white md:ml-28"
        >
          CONTACT US
        </Link>
      </div>
      <Image
        src="../public/asset/contact.webp"
        quality={75}
        alt="Contact Image"
      />
    </div>
  );
};

export default WeCarry;