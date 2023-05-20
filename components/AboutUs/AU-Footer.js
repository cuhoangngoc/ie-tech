import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../public/asset/Logo-only.png';
const Footer = () => (
  <div className=" mx-auto rounded bg-black px-4 pt-16 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-2xl lg:px-8">
    <div className="row-gap-6 mb-8 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
      <div>
        <Link href="/" aria-label="Go home" title="Company" className="inline-flex items-center">
          <div className="flex w-10 md:w-1/5">
            <Image src={Logo} alt="Logo" className="object-scale-down" />
          </div>
          <span className="ml-2 text-xl font-bold uppercase tracking-wide text-white">Nhóm 1</span>
        </Link>
        <div className="mt-6 grid-cols-2 lg:max-w-sm">
          <p className="text-sm text-white">
            <a href="#"></a>
          </p>
        </div>
      </div>
      <div className="text-base font-bold tracking-wide text-white">
        <div className="grid gap-3 font-semibold text-white sm:grid-cols-2">
          <a className="hover:text-grey-800" href="#">
            Blog
          </a>
          <a className="text-white transition-colors duration-300 hover:text-gray-700" href="#">
            Docs
          </a>
          <a className="text-white transition-colors duration-300 hover:text-gray-700" href="#">
            Products
          </a>
          <a className="text-white transition-colors duration-300 hover:text-gray-700" href="#">
            Demo
          </a>
          <a className="text-white transition-colors duration-300 hover:text-gray-700" href="#">
            Service
          </a>
          <a className="text-white transition-colors duration-300 hover:text-gray-700" href="#">
            Media
          </a>
        </div>
      </div>
      <div className="space-y-2 text-sm">
        <p className="text-base font-bold tracking-wide text-white">Contacts</p>
        <div className="flex">
          <p className="mr-1 text-white">Phone:</p>
          <a
            href="tel:0328950020"
            aria-label="Our phone"
            title="Our phone"
            className="text-white transition-colors duration-300 hover:text-gray-700"
          >
            0328950020
          </a>
        </div>
        <div className="flex">
          <p className="mr-1 text-white">Email:</p>
          <a
            href="mailto:20520437@gm.uit.edu.vn"
            aria-label="Our email"
            title="Our email"
            className="text-white transition-colors duration-300 hover:text-gray-700"
          >
            20520437@gm.uit.edu.vn
          </a>
        </div>
        <div className="flex">
          <p className="mr-1 text-white">Address:</p>
          <a
            href="https://www.google.com/maps"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Our address"
            title="Our address"
            className="text-white transition-colors duration-300 hover:text-gray-700"
          >
            UIT, Linh Trung
          </a>
        </div>
      </div>
      <div>
        <span className="text-base font-bold tracking-wide text-white">Social</span>
        <div className="mt-1 flex items-center space-x-3">
          <Link
            href="/"
            className="hover:text-deep-purple-accent-400 text-white transition-colors duration-300"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
              <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
            </svg>
          </Link>
          <Link
            href="/"
            className="hover:text-deep-purple-accent-400 text-white transition-colors duration-300"
          >
            <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
              <circle cx="15" cy="15" r="4" />
              <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
            </svg>
          </Link>
          <a
            href="https://www.facebook.com/UIT.Fanpage"
            className="hover:text-deep-purple-accent-400 text-white transition-colors duration-300"
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5"
              title="Facebook"
              atl="Facebook site"
            >
              <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
            </svg>
          </a>
        </div>
        <p className="mt-4 text-sm text-gray-500">Feel free to contact us when you need help.</p>
      </div>
    </div>
    <div className="flex flex-col-reverse justify-between border-t pt-5 pb-10 lg:flex-row">
      <p className="text-sm text-gray-600">
        © Copyright 2022 Group 1 IE104.N11. All rights reserved.
      </p>
      <ul className="mb-3 flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-5 lg:mb-0">
        <li>
          <Link
            href="/"
            className="hover:text-deep-purple-accent-400 text-sm text-gray-600 transition-colors duration-300"
          >
            F.A.Q
          </Link>
        </li>
        <li>
          <Link
            href="/"
            className="hover:text-deep-purple-accent-400 text-sm text-gray-600 transition-colors duration-300"
          >
            Privacy Policy
          </Link>
        </li>
        <li>
          <Link
            href="/"
            className="hover:text-deep-purple-accent-400 text-sm text-gray-600 transition-colors duration-300"
          >
            Terms &amp; Conditions
          </Link>
        </li>
      </ul>
    </div>
  </div>
);
export default Footer;
