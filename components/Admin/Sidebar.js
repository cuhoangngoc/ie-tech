import Link from "next/link";
import {
  BsTerminalFill,
  BsCardChecklist,
  BsFillPersonFill,
  BsHouseDoorFill,
  BsPersonCircle,
  BsReceipt,
  BsFillArchiveFill,
  BsBagCheckFill,
} from "react-icons/bs";

const Sidebar = () => {
  const adminLinks = [
    {
      name: "Trang chủ",
      href: "/",
      icon: <BsHouseDoorFill />,
    },
    {
      name: "Hồ sơ",
      href: "/dashboard",
      icon: <BsPersonCircle />,
    },
    {
      name: "Bảng điều khiển",
      href: "/admin",
      icon: <BsTerminalFill />,
    },
    {
      name: "Người dùng",
      href: "/admin/users",
      icon: <BsFillPersonFill />,
    },
    {
      name: "Dịch vụ",
      href: "/admin/services",
      icon: <BsFillArchiveFill />,
    },
    {
      name: "Plan",
      href: "/admin/plans",
      icon: <BsReceipt />,
    },
    {
      name: "Đơn hàng",
      href: "/admin/orders",
      icon: <BsBagCheckFill />,
    },
    {
      name: "Yêu cầu",
      href: "/admin/requests",
      icon: <BsCardChecklist />,
    },
  ];

  return (
    <div className="h-screen bg-[#B1AFFF]">
      {adminLinks.map((link, index) => (
        <Link href={link.href} key={index}>
          <a className="my-2 flex items-center p-2 hover:bg-gray-200">
            {link.icon}
            <span className="ml-2">{link.name}</span>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
