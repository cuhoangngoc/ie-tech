import { FiMenu, FiSearch, FiChevronDown, FiX } from "react-icons/fi";
import { BiBot } from "react-icons/bi";
import style from "./Navbar.module.css";

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
    { name: 'Trang chủ', link: '#' },
    { name: 'Giới thiệu', link: '#' },
    {
      name: 'Dịch vụ', link: '#',
      subMenu: [
        { name: 'Dịch vụ IT', link: '#' },
        { name: 'Web development', link: '/web_development' }, ,
        { name: 'Mobile development', link: '#' }
      ]
    },
    { name: 'Liên hệ', link: '#' },

  ];

  return (
    <nav className="sticky shadow-2xl">
      <div className="flex font-bold justify-between bg-slate-100 px-12 py-2">
        {/* logo */}
        <div className='flex md:w-1/5 md:justify-center items-center cursor-pointer hover:animate-bounce'>
          <BiBot className="w-8 h-8 text-blue-500" />
          <span className="ml-2 py-4">ietech</span>
        </div>

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
                        <a href={subMenu.link} className="block py-2 px-4 hover:bg-gray-100">{subMenu.name}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>

            ) : (
              <li key={index}>
                <a className='p-2 rounded-md hover:bg-blue-400 hover:text-white duration-300' href={navLink.link}>{navLink.name}</a>
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