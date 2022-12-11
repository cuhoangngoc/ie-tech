import Layout from "../../components/Layout/Layout";
import Plan from "../../components/Checkout/Plan";
import { useState, useEffect } from "react";
import { useAuth } from "../../hooks/auth";
import { FcRightDown2 } from "react-icons/fc";

const Checkout = () => {
  const { user } = useAuth();
  // checkoutData để lưu dữ liệu lấy từ API
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

  // Split checkoutData description thành mảng
  checkoutData.forEach((item) => {
    item.descriptionArr = item.description.split(", ");
  });

  return (
    <Layout>
      <section className="container mx-auto px-2 md:px-4">
        <div className="mt-5">
          <h1 className="text-2xl font-bold">
            Xin chào&nbsp;
            <span
              className={`${
                user
                  ? "bg-gradient-to-r from-blue-900 to-cyan-500 bg-clip-text font-extrabold text-transparent"
                  : ""
              }`}
            >
              {user ? `${user?.name}` : "quý khách"}!
            </span>
          </h1>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-3">
          <div className="md:col-span-3">
            <p className={`flex justify-center gap-4 text-2xl font-bold`}>
              Tất cả dịch vụ chúng tôi cung cấp <FcRightDown2 size={30} />
            </p>
          </div>

          {/* <Plan /> */}
          {checkoutData.map((plan) => (
            <Plan key={plan.id} {...plan} />
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Checkout;
