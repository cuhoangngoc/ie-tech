import AdminLayout from "../../components/Admin/AdminLayout";
import { useState, useEffect } from "react";

export default function Admin() {
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("/api/getUsersData");
      const data = await res.json();
      setUsersData(data); // Lưu dữ liệu vào state
    }

    fetchData(); // Gọi hàm fetchData
  }, []);

  return (
    <AdminLayout>
      <table className="bg-white">
        <thead>
          <tr>
            <th>ID</th>
            <th>Họ tên</th>
            <th>Email</th>
            <th>Số điện thoại</th>
            <th>Địa chỉ</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {usersData.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.address}</td>
              <td>
                <button>Edit</button>
                <br />
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </AdminLayout>
  );
}
