import AdminLayout from '../../components/Admin/AdminLayout';
import style from '../../styles/admin.module.css';
import { useState, useEffect } from 'react';

export default function Admin() {
  const [contactsData, setcontactsData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch('/api/getcontact');
      const data = await res.json();
      setcontactsData(data); // Lưu dữ liệu vào state
    }
    fetchData(); // Gọi hàm fetchData
  }, []);

  return (
    <AdminLayout>
      <h1 className={`${style.header}`}>Thông điệp của khách hàng</h1>

      <table className="bg-white">
        <thead>
          <tr>
            <th>ID</th>
            <th>Tên</th>
            <th>Email</th>
            <th>Nội dung</th>
          </tr>
        </thead>
        <tbody>
          {contactsData.map((contact) => (
            <tr key={contact.id}>
              <td>{contact.id}</td>
              <td>{contact.name}</td>
              <td>{contact.email}</td>
              <td>{contact.content}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </AdminLayout>
  );
}
