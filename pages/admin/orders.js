import AdminLayout from '../../components/Admin/AdminLayout';
import style from '../../styles/admin.module.css';
import { useState, useEffect } from 'react';
import formatDate from '../../components/formatDate';

export default function Admin() {
  const [order, setOrderData] = useState([]);

  // Dùng useEffect để lấy dữ liệu từ API
  useEffect(() => {
    async function fetchData() {
      const res = await fetch('/api/getOrdersData');
      const data = await res.json();
      setOrderData(data); // Lưu dữ liệu vào state
    }

    fetchData(); // Gọi hàm fetchData
  }, []);

  return (
    <AdminLayout>
      <h1 className={`${style.header}`}>Đơn hàng trên toàn hệ thống</h1>
      <table className="bg-white">
        <thead>
          <tr>
            <th>Mã đơn hàng</th>
            <th>Mã người dùng</th>
            <th>Tên người dùng</th>
            <th>Gói dịch vụ</th>
            <th>Thời hạn</th>
            <th>Ngày đặt hàng</th>
            <th>Tổng tiền</th>
            <th>Trạng thái</th>
          </tr>
        </thead>
        <tbody>
          {order.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.user_id}</td>
              <td>{item.username}</td>
              <td>
                {item.plan}&nbsp;{item.service}
              </td>
              <td>{item.duration} tháng</td>
              <td>{formatDate(item.created_at)}</td>
              <td>{item.total}$</td>
              <td>{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </AdminLayout>
  );
}
