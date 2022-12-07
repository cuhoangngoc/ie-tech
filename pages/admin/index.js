import AdminLayout from "../../components/Admin/AdminLayout";
import { useState, useEffect } from "react";

export default function Admin() {
  const [checkoutData, setCheckoutData] = useState([]);

  // Dùng useEffect để lấy dữ liệu từ API
  useEffect(() => {
    async function fetchData() {
      const res = await fetch("/api/getPlanData");
      const data = await res.json();
      setCheckoutData(data); // Lưu dữ liệu vào state
    }

    fetchData(); // Gọi hàm fetchData
  }, []);



  return (
    <AdminLayout>
    </AdminLayout>
  );
}
