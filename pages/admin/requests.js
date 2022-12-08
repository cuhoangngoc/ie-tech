import AdminLayout from "../../components/Admin/AdminLayout";
import { useState, useEffect } from "react";

export default function Admin() {
  const [servicesData, setServicesData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("/api/getrequest");
      const data = await res.json();
      setServicesData(data); // Lưu dữ liệu vào state
    }

    fetchData(); // Gọi hàm fetchData
  }, []);

  const Check = (e) => {
    
  };

  return (
    <AdminLayout>
      <table className="bg-white">
        <thead>
          <tr>
            <th>ID</th>
            <th>User Id</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Account Number</th>
            <th>Test</th>
            <th>Thao tác</th>
          </tr>
        </thead>
        <tbody>
          {servicesData.map((service) => (
            <tr key={service.id}>
              <td>{service.id}</td>
              <td>{service.user_id}</td>
              <td>{service.amount}</td>
              <td>{service.date}</td>
              <td>{service.account_number}</td>
              <td>{service.test}</td>
              <td><button onClick={Check}>Duyệt</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </AdminLayout>
  );
}
