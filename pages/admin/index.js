import AdminLayout from '../../components/Admin/AdminLayout';
import style from '../../styles/admin.module.css';
import { useState, useEffect } from 'react';
import Avatar from '../../public/asset/avatar-svgrepo-com.svg';
import Order from '../../public/admin/order-placed-purchased-icon.png';
import Income from '../../public/admin/money.png';
import Request from '../../public/admin/request.png';
import Chart_user from '../../components/Admin/chart_user';
import Chart_order from '../../components/Admin/chart_order';
import Chart_plan from '../../components/Admin/chart_plan';
import Image from 'next/image';
import Link from 'next/link';

export default function Admin() {
  const [data, setData] = useState([]);
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1;

  const [selectedMonth, setSelectedMonth] = useState(currentMonth);
  const [selectedYear, setSelectedYear] = useState(currentYear);

  // Tạo danh sách các tháng từ 1 đến 12
  const months = [...Array(12).keys()].map((month) => month + 1);

  // Tạo danh sách các năm từ năm hiện tại đến năm 1900
  const years = [...Array(currentYear - 1900 + 1).keys()].map((year) => currentYear - year);

  const handleMonthChange = (e) => {
    setSelectedMonth(parseInt(e.target.value));
  };

  const handleYearChange = (e) => {
    setSelectedYear(parseInt(e.target.value));
  };

  // Dùng useEffect để lấy dữ liệu từ API
  useEffect(() => {
    async function fetchData() {
      const res = await fetch('/api/adminDashboard');
      const data = await res.json();
      setData(data); // Lưu dữ liệu vào state
    }

    fetchData(); // Gọi hàm fetchData
  }, []);

  const items = [
    {
      name: 'Người dùng',
      img: Avatar,
      count: data.users,
      href: '/admin/users',
    },
    {
      name: 'Đơn hàng',
      img: Order,
      count: data.orders,
      href: '/admin/orders',
    },
    {
      name: 'Doanh thu',
      img: Income,
      count: data.income,
      href: '/admin/orders',
    },
    {
      name: 'Yêu cầu',
      img: Request,
      count: data.payments,
      href: '/admin/requests',
    },
  ];

  return (
    <AdminLayout>
      <h1 className={`${style.header}`}>Bảng điều khiển</h1>
      <div className="grid-col-1 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {items.map((item, i) => (
          <a
            key={i}
            href={item.href}
            className="flex flex-col items-center rounded-lg border bg-white p-2 shadow-md hover:bg-gray-100 md:max-w-xl md:flex-row"
          >
            <Image
              className="h-[80px] w-[80px] rounded-t-lg object-cover md:rounded-none md:rounded-l-lg"
              src={item.img}
              alt=""
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{item.name}</h5>
              <p className="mb-3 font-normal text-green-700">
                {+(Math.round(item.count + 'e+2') + 'e-2')} {item.name === 'Doanh thu' ? '$' : ''}
              </p>
            </div>
          </a>
        ))}
      </div>

      <div className="my-5 pl-14 flex space-x-2">
        <label htmlFor="monthSelect">Month:</label>
        <select
          id="monthSelect"
          value={selectedMonth}
          onChange={handleMonthChange}
          className="border border-gray-300 rounded px-2 py-1"
        >
          {months.map((month) => (
            <option key={month} value={month}>
              {month}
            </option>
          ))}
        </select>

        <label htmlFor="yearSelect">Year:</label>
        <select
          id="yearSelect"
          value={selectedYear}
          onChange={handleYearChange}
          className="border border-gray-300 rounded px-2 py-1"
        >
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>

      <Chart_user month={selectedMonth} year={selectedYear}></Chart_user>
      <Chart_order month={selectedMonth} year={selectedYear}></Chart_order>
      <Chart_plan></Chart_plan>
    </AdminLayout>
  );
}
