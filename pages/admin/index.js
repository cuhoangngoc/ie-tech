import AdminLayout from "../../components/Admin/AdminLayout";
import style from "../../styles/Admin.module.css";
import { useState, useEffect } from "react";
import Avatar from "../../public/asset/avatar-svgrepo-com.svg";
import Order from "../../public/admin/order-placed-purchased-icon.png";
import Income from "../../public/admin/money.png";
import Request from "../../public/admin/request.png";

export default function Admin() {
  const [data, setData] = useState([]);

  // Dùng useEffect để lấy dữ liệu từ API
  useEffect(() => {
    async function fetchData() {
      const res = await fetch("/api/adminDashboard");
      const data = await res.json();
      setData(data); // Lưu dữ liệu vào state
    }

    fetchData(); // Gọi hàm fetchData
  }, []);

  const items = [
    {
      name: "Người dùng",
      img: Avatar,
      count: data.users,
      href: "/admin/users",
    },
    {
      name: "Đơn hàng",
      img: Order,
      count: data.orders,
      href: "/admin/orders",
    },
    {
      name: "Doanh thu",
      img: Income,
      count: data.income,
      href: "/admin/orders",
    },
    {
      name: "Yêu cầu",
      img: Request,
      count: data.payments,
      href: "/admin/requests",
    },
  ];

  return (
    <AdminLayout>
      <h1 className={`${style.header}`}>Bảng điều khiển</h1>
      <div className="grid-col-1 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <a
            href={item.href}
            className="flex flex-col items-center rounded-lg border bg-white p-2 shadow-md hover:bg-gray-100 md:max-w-xl md:flex-row"
          >
            <img
              className="h-[80px] w-[80px] rounded-t-lg object-cover md:rounded-none md:rounded-l-lg"
              src={item.img.src}
              alt=""
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                {item.name}
              </h5>
              <p className="mb-3 font-normal text-green-700">
                {item.count} {item.name === "Doanh thu" ? "$" : ""}
              </p>
            </div>
          </a>
        ))}
      </div>
    </AdminLayout>
  );
}
