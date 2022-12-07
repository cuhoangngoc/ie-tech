import AdminLayout from "../../components/Admin/AdminLayout";
import { useState, useEffect } from "react";

export default function Admin() {
  const [servicesData, setServicesData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("/api/getServicesData");
      const data = await res.json();
      setServicesData(data); // Lưu dữ liệu vào state
    }

    fetchData(); // Gọi hàm fetchData
  }, []);

  return (
    <AdminLayout>
      <table className="bg-white">
        <thead>
          <tr>
            <th>ID</th>
            <th>Service Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {servicesData.map((service) => (
            <tr key={service.id}>
              <td>{service.id}</td>
              <td>{service.name}</td>
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
