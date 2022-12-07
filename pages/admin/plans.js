import AdminLayout from "../../components/Admin/AdminLayout";
import { useState, useEffect } from "react";

export default function Admin() {
  const [planData, setplanData] = useState([]);

  // Dùng useEffect để lấy dữ liệu từ API
  useEffect(() => {
    async function fetchData() {
      const res = await fetch("/api/getPlanData");
      const data = await res.json();
      setplanData(data); // Lưu dữ liệu vào state
    }

    fetchData(); // Gọi hàm fetchData
  }, []);

  return (
    <AdminLayout>
      <table className="bg-white">
        <thead>
          <tr>
            <th>Plan Name</th>
            <th>Price</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {planData.map((plan) => (
            <tr key={plan.id}>
              <td>{plan.name}</td>
              <td>{plan.price}</td>
              <td>{plan.description}</td>
              <td>
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </AdminLayout>
  );
}
