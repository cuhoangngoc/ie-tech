import { FiMenu, FiChevronDown, FiX, FiUser } from "react-icons/fi";
import style from "./Navbar.module.css";
import Link from "next/link";
import Logo from "../../public/asset/Logo-only.png";
import Image from "next/image";
import { useAuth } from "../../hooks/auth";

function Navbar() {
  const { user } = useAuth({ middleware: "guest" });

  const showMobileMenu = () => {
    const menuIconOpen = document.querySelector(".menu-icon-open");
    const menuIconClose = document.querySelector(".menu-icon-close");
    const mobileMenu = document.querySelector(".mobile-menu");

    menuIconOpen.classList.toggle("hidden");
    menuIconClose.classList.toggle("hidden");

    mobileMenu.classList.toggle("hidden");
    mobileMenu.classList.toggle("flex");
  };

  const navLinks = [
    { name: "Trang chủ", link: "/" },
    { name: "Giới thiệu", link: "/GioiThieu" },
    {
      name: "Dịch vụ",
      link: "#",
      subMenu: [
        { name: "Dịch vụ IT", link: "/IT" },
        { name: "Web development", link: "/web_development" },
        ,
        { name: "Mobile development", link: "/mobile" },
      ],
    },
    { name: "Liên hệ", link: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-10 shadow-2xl">
      <div className="flex justify-between bg-slate-100 px-12 py-2 font-bold md:justify-around">
        {/* logo */}
        <Link href="/" legacyBehavior>
          <a className="flex cursor-pointer items-center md:justify-center">
            <Image src={Logo} alt="logo" width={50} height={50} />
            <span className="ml-2 py-4">ietech</span>
          </a>
        </Link>

        {/* Navigation bar */}
        <ul className="hidden items-center space-x-2 md:flex md:justify-center">
          {navLinks.map((navLink, index) =>
            navLink.name === "Dịch vụ" ? (
              <li className="group md:relative" key={index}>
                <div className="flex items-center rounded-md p-2 duration-300 hover:bg-blue-400 hover:text-white">
                  <button id="service-dropdown-list">Dịch vụ</button>
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
                          <a className="block py-2 px-4 hover:bg-gray-100">
                            {subMenu.name}
                          </a>
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

        {/*Get started button*/}
        <div className="flex items-center">
          {/* <button>
            <FiSearch className="mr-4 h-6 w-6 hover:text-blue-800" />
          </button> */}
          {user ? (
            <div>
              <Link href="/dashboard">
                <a className="flex w-fit rounded-full p-2 text-center text-black duration-300 hover:bg-blue-700 hover:text-white">
                  <FiUser size={25} />
                </a>
              </Link>
            </div>
          ) : (
            <Link href="/login">
              <a className="flex rounded-md bg-blue-500 p-1 text-center text-sm text-white duration-300 hover:bg-blue-700 md:text-base">
                Get started
              </a>
            </Link>
          )}
        </div>

        {/* Button for mobile menu */}
        <div className="flex items-center md:hidden">
          <button
            className="moblie-menu-btn hover:text-blue-500"
            onClick={showMobileMenu}
          >
            <FiMenu className="menu-icon-open h-6 w-6" />
            <FiX className="menu-icon-close hidden h-6 w-6 hover:text-red-700" />
          </button>
        </div>
      </div>

      {/* Thêm md:hidden để ẩn đi khi resize từ sm lên md */}
      <ul className="mobile-menu hidden flex-col items-center space-y-2 divide-y-2 divide-zinc-300 bg-slate-100 font-bold drop-shadow-md md:hidden">
        {navLinks.map((navLink, index) =>
          navLink.name === "Dịch vụ" ? (
            <li
              className="group flex items-center pt-2 hover:text-blue-500"
              key={index}
            >
              <div className="flex items-center">
                <button>{navLink.name}</button>
                <FiChevronDown className="h-5 w-5 items-center" />
              </div>

              <ul className="hidden flex-col py-2 text-sm font-normal text-gray-700 group-hover:flex">
                {navLink.subMenu.map((subMenu, index) => (
                  <li key={index}>
                    {" "}
                    <a
                      href={subMenu.link}
                      className="block py-2 px-4 hover:bg-gray-200"
                    >
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
  );
}

export default Navbar;
