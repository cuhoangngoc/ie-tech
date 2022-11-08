import { FiMenu, FiSearch, FiChevronDown, FiX } from "react-icons/fi";
import { BiBot } from "react-icons/bi";
import style from "./Navbar.module.css";
import Link from "next/link";

function Navbar() {

  const showMobileMenu = () => {
    const menuIconOpen = document.querySelector('.menu-icon-open');
    const menuIconClose = document.querySelector('.menu-icon-close');
    const mobileMenu = document.querySelector('.mobile-menu');

    menuIconOpen.classList.toggle('hidden');
    menuIconClose.classList.toggle('hidden');

    mobileMenu.classList.toggle('hidden');
    mobileMenu.classList.toggle('flex');
  };

  const navLinks = [
    { name: 'Trang chủ', link: '/' },
    { name: 'Giới thiệu', link: '/GioiThieu' },
    {
      name: 'Dịch vụ', link: '#',
      subMenu: [
        { name: 'Dịch vụ IT', link: '/IT' },
        { name: 'Web development', link: '/web_development' }, ,
        { name: 'Mobile development', link: '/mobile' }
      ]
    },
    { name: 'Liên hệ', link: '/contact' },

  ];

  return (
    <nav className="sticky shadow-2xl top-0 z-10">
      <div className="flex font-bold justify-between bg-slate-100 px-12 py-2">
        {/* logo */}
        <Link href='/' legacyBehavior>
          <a className='flex md:w-1/5 md:justify-center items-center cursor-pointer'>
            <BiBot className="w-8 h-8 text-blue-500" />
            <span className="ml-2 py-4">ietech</span>
          </a>
        </Link>

        {/* Navigation bar */}
        <ul className='hidden md:w-3/5 md:justify-center md:flex items-center space-x-2'>
          {navLinks.map((navLink, index) => (
            (navLink.name === "Dịch vụ") ? (
              <li className="group md:relative" key={index}>
                <div className="flex items-center p-2 rounded-md hover:bg-blue-400 hover:text-white duration-300" >
                  <button id="service-dropdown-list">Dịch vụ</button>
                  <FiChevronDown className="w-5 h-5 items-center" />
                </div>

                <div id="dropdownNavbar" className="group-hover:block hidden md:absolute z-10 w-44 font-normal bg-white rounded divide-y divide-gray-100 shadow-md">
                  <ul className="py-2 text-sm text-gray-700">
                    {navLink.subMenu.map((subMenu, index) => (
                      <li key={index}>
                        <Link href={subMenu.link} legacyBehavior>
                          <a className="block py-2 px-4 hover:bg-gray-100">{subMenu.name}</a>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>

            ) : (
              <li key={index}>
                <Link href={navLink.link} legacyBehavior >
                  <a className='p-2 rounded-md hover:bg-blue-400 hover:text-white duration-300'>{navLink.name}</a>
                </Link>
              </li>
            )
          ))}
        </ul>


        {/* Search and get started button*/}
        <div className='flex md:w-1/5 md:justify-center items-center space-x-2'>
          <button>
            <FiSearch className="w-6 h-6 mr-4 hover:text-blue-800" />
          </button>
          <a href="#" className='flex text-white text-sm md:text-base bg-blue-500 text-center p-1 rounded-md hover:bg-blue-700 duration-300'>Get started</a>
        </div>

        {/* Button for mobile menu */}
        <div className='md:hidden flex items-center'>
          <button className='moblie-menu-btn hover:text-blue-500' onClick={showMobileMenu}>
            <FiMenu className='menu-icon-open w-6 h-6' />
            <FiX className='hidden menu-icon-close w-6 h-6 hover:text-red-700' />
          </button>
        </div>
      </div >

      {/* Thêm md:hidden để ẩn đi khi resize từ sm lên md */}
      <ul className="mobile-menu hidden md:hidden bg-slate-100 flex-col items-center space-y-2 divide-y-2 divide-zinc-300 drop-shadow-md font-bold" >
        {
          navLinks.map((navLink, index) => (
            (navLink.name === "Dịch vụ") ? (
              <li className="group flex items-center pt-2 hover:text-blue-500" key={index}>
                <div className='flex items-center'>
                  <button>{navLink.name}</button>
                  <FiChevronDown className="w-5 h-5 items-center" />
                </div>

                <ul className="hidden flex-col py-2 text-sm text-gray-700 group-hover:flex font-normal">
                  {navLink.subMenu.map((subMenu, index) => (
                    <li key={index}> <a href={subMenu.link} className="block py-2 px-4 hover:bg-gray-200">{subMenu.name}</a></li>
                  ))}
                </ul>

              </li>
            ) : (
              <li key={index} className="py-2"><a className='hover:text-blue-500' href="#">{navLink.name}</a></li>
            )
          ))
        }
      </ul >
    </nav >
  )
}

export default Navbar