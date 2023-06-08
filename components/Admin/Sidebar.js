import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../public/asset/Logo-only.png';
import {
  BsTerminalFill,
  BsChatLeftTextFill,
  BsFillPersonFill,
  BsHouseDoorFill,
  BsPersonCircle,
  BsCalendar2PlusFill,
  BsFillArchiveFill,
  BsBagCheckFill,
  BsFillDoorOpenFill,
  BsFillBellFill,
} from 'react-icons/bs';
import { useAuth } from '../../hooks/auth';
const Sidebar = () => {
  const { logout } = useAuth();
  const adminLinks = [
    {
      name: 'Trang chủ',
      href: '/',
      icon: <BsHouseDoorFill />,
    },
    {
      name: 'Hồ sơ',
      href: '/dashboard',
      icon: <BsPersonCircle />,
    },
    {
      name: 'Bảng điều khiển',
      href: '/admin',
      icon: <BsTerminalFill />,
    },
    {
      name: 'Người dùng',
      href: '/admin/users',
      icon: <BsFillPersonFill />,
    },
    {
      name: 'Dịch vụ',
      href: '/admin/services',
      icon: <BsFillArchiveFill />,
    },
    {
      name: 'Plan',
      href: '/admin/plans',
      icon: <BsCalendar2PlusFill />,
    },
    {
      name: 'Đơn hàng',
      href: '/admin/orders',
      icon: <BsBagCheckFill />,
    },
    {
      name: 'Yêu cầu',
      href: '/admin/requests',
      icon: <BsChatLeftTextFill />,
    },
    {
      name: 'Liên hệ',
      href: '/admin/contact',
      icon: <BsFillBellFill />,
    },
  ];

  return (
    <div className="fixed top-0 hidden h-screen min-w-[160px] bg-[#B9E0FF] md:sticky md:block">
      <div>
        <Link href="/">
          <a className="flex items-center justify-center gap-2 p-2 font-bold">
            <Image src={Logo} alt="logo" width={82} height={91} />
            ietech
          </a>
        </Link>
      </div>

      {adminLinks.map((link, index) => (
        <Link href={link.href} key={index}>
          <a className="my-2 flex items-center p-2 hover:bg-gray-200">
            {link.icon}
            <span className="ml-2">{link.name}</span>
          </a>
        </Link>
      ))}
      <button className="my-2 flex w-full items-center p-2 hover:bg-gray-200" onClick={logout}>
        <BsFillDoorOpenFill />
        <span className="ml-2">Đăng xuất</span>
      </button>
    </div>
  );
};

export default Sidebar;
