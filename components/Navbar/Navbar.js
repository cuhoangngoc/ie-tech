import { FiMenu, FiChevronDown, FiX, FiUser } from 'react-icons/fi';
import Link from 'next/link';
import Logo from '../../public/asset/Logo-only.png';
import Image from 'next/image';
import { useAuth } from '../../hooks/auth';
import { useDispatch, useSelector } from 'react-redux';
import { closeDark, openDark } from '../../feature/darklight/darklightSlice';
import { transVI, transEN } from '../../feature/translate/translate';
import { en, vi } from '../../feature/translate/language';

function Navbar() {
  const dispatch = useDispatch();
  const { isDark } = useSelector((state) => {
    return state.darklight;
  });
  const { isEnglish } = useSelector((state) => {
    return state.language;
  });
  const { nav } = isEnglish ? en : vi;
  const { user } = useAuth({ middleware: 'guest' });
  const { logout } = useAuth();
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
    { name: nav.home, link: '/' },
    { name: nav.aboutUs, link: '/introduction' },
    {
      name: nav.service.serviceNav,
      link: '/checkout',
      subMenu: [
        { name: nav.service.serviceIt, link: '/IT' },
        { name: nav.service.serviceDev, link: '/web_development' },
        ,
        { name: nav.service.serviceMob, link: '/mobile' },
      ],
    },
    { name: nav.contract, link: '/contact' },
  ];

  const handleLanguageChange = (e) => {
    if (e.target.value === 'en') dispatch(transEN());
    else dispatch(transVI());
  };

  return (
    <>
      <nav className="sticky top-0 z-10 shadow-xl">
        <div
          className={
            isDark
              ? 'flex justify-between bg-black px-12 py-2 font-bold text-white md:justify-around'
              : 'flex justify-between bg-slate-100 px-12 py-2 font-bold md:justify-around'
          }
        >
          {/* logo */}
          <Link href="/" legacyBehavior>
            <a className="flex cursor-pointer items-center md:justify-center">
              <Image src={Logo} alt="logo" width={50} height={55} />
              <span className="ml-2 py-4">ietech</span>
            </a>
          </Link>

          {/* Navigation bar */}
          <ul className="hidden items-center space-x-2 md:flex md:justify-center">
            {navLinks.map((navLink, index) =>
              navLink.name === nav.service.serviceNav ? (
                <li className="group md:relative" key={index}>
                  <div className="flex items-center rounded-md p-2 duration-300 hover:bg-blue-400 hover:text-white">
                    <a href={navLink.link}>{nav.service.serviceNav}</a>
                    <FiChevronDown className="h-5 w-5 items-center" />
                  </div>

                  <div
                    id="dropdownNavbar"
                    className="z-10 hidden w-44 divide-y divide-gray-100 rounded bg-white font-normal shadow-md group-hover:block md:absolute"
                  >
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
                  <Link href={navLink.link} legacyBehavior>
                    <a className="rounded-md p-2 duration-300 hover:bg-blue-400 hover:text-white">
                      {navLink.name}
                    </a>
                  </Link>
                </li>
              )
            )}
          </ul>

          <div className="flex gap-6">
            <div className="flex justify-end transition-all duration-500">
              {isDark ? (
                <button
                  onClick={() => {
                    dispatch(closeDark());
                  }}
                >
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z" />
                  </svg>
                </button>
              ) : (
                <button
                  onClick={() => {
                    dispatch(openDark());
                  }}
                >
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
                  </svg>
                </button>
              )}
            </div>

            {/*Get started button*/}
            <div className="flex items-center">
              {/* <button>
            <FiSearch className="mr-4 h-6 w-6 hover:text-blue-800" />
          </button> */}
              {user ? (
                <div className="group relative">
                  <Link href="/dashboard">
                    <a className="flex w-fit rounded-full p-2 text-center text-black duration-300 hover:bg-blue-700 hover:text-white">
                      <FiUser size={25} />
                    </a>
                  </Link>
                  <div className="absolute hidden w-[100px] flex-col rounded-md bg-white p-2 group-hover:flex">
                    <Link href="/dashboard">
                      <a>Hồ sơ</a>
                    </Link>
                    <button onClick={logout}>Đăng xuất</button>
                  </div>
                </div>
              ) : (
                <Link href="/login">
                  <a className="flex rounded-md bg-blue-500 p-1 text-center text-sm text-white duration-300 hover:bg-blue-700 md:text-base">
                    {nav.ClickStart}
                  </a>
                </Link>
              )}
            </div>
          </div>

          {/* Button for mobile menu */}
          <div className="flex items-center md:hidden">
            <button className="moblie-menu-btn hover:text-blue-500" onClick={showMobileMenu}>
              <FiMenu className="menu-icon-open h-6 w-6" />
              <FiX className="menu-icon-close hidden h-6 w-6 hover:text-red-700" />
            </button>
          </div>
        </div>

        {/* Thêm md:hidden để ẩn đi khi resize từ sm lên md */}
        <ul className="mobile-menu hidden flex-col items-center space-y-2 divide-y-2 divide-zinc-300 bg-slate-100 font-bold drop-shadow-md md:hidden">
          {navLinks.map((navLink, index) =>
            navLink.name === 'Dịch vụ' ? (
              <li className="group flex items-center pt-2 hover:text-blue-500" key={index}>
                <div className="flex items-center">
                  <a href={navLink.link}>{navLink.name}</a>
                  <FiChevronDown className="h-5 w-5 items-center" />
                </div>

                <ul className="hidden flex-col py-2 text-sm font-normal text-gray-700 group-hover:flex">
                  {navLink.subMenu.map((subMenu, index) => (
                    <li key={index}>
                      <a href={subMenu.link} className="block py-2 px-4 hover:bg-gray-200">
                        {subMenu.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            ) : (
              <li key={index} className="py-2">
                <a className="hover:text-blue-500" href="#">
                  {navLink.name}
                </a>
              </li>
            )
          )}
        </ul>
      </nav>

      <div className="fixed right-2 z-10 mt-2">
        <div className="flex justify-end">
          <select
            className="block w-full rounded-md border-gray-200 py-3 px-4 pr-9 text-sm text-black focus:border-blue-500 focus:ring-blue-500"
            onChange={handleLanguageChange}
          >
            <option value="vie">VIE</option>
            <option value="en">EN</option>
          </select>
        </div>
      </div>
    </>
  );
}

export default Navbar;
