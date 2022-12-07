import Layout from "../../components/Layout/Layout";
import Plan from "../../components/Checkout/Plan";
import { useState, useEffect } from "react";
const Checkout = () => {
  // checkoutData để lưu dữ liệu lấy từ API
  const [checkoutData, setCheckoutData] = useState([]);

  // Dùng useEffect để lấy dữ liệu từ API
  useEffect(() => {
    async function fetchData() {
      const res = await fetch("http://localhost:3000/api/getPlanData");
      const data = await res.json();
      setCheckoutData(data); // Lưu dữ liệu vào state
    }

    fetchData(); // Gọi hàm fetchData
  }, []);

  // Split checkoutData description thành mảng
  checkoutData.forEach((item) => {
    item.descriptionArr = item.description.split(", ");
  });

  return (
    <Layout>
      <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
        {/* <Plan /> */}
        {checkoutData.map((plan) => (
          <Plan key={plan.id} {...plan} />
        ))}
      </div>
    </Layout>
  );
};

export default Checkout;
