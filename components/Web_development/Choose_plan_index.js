import Choose_plan from './Choose_plan';
import { useState, useEffect } from 'react';

const Checkout = () => {
  // checkoutData để lưu dữ liệu lấy từ API
  const [checkoutData, setCheckoutData] = useState([]);

  // Dùng useEffect để lấy dữ liệu từ API
  useEffect(() => {
    async function fetchData() {
      const res = await fetch('http://localhost:3000/api/getPlanDataInWebService');
      const data = await res.json();
      setCheckoutData(data); // Lưu dữ liệu vào state
    }

    fetchData(); // Gọi hàm fetchData
  }, []);

  // Split checkoutData description thành mảng
  checkoutData.forEach((item) => {
    item.descriptionArr = item.description.split(', ');
  });

  return (
    <div className="my-10 w-full bg-white">
      <div className="m-auto max-w-[1240px]">
        <div className="w-full text-center">
          <p className="uppercase text-[#7141b1]">&#47;&#47; Choose your plan</p>
          <h3 className="py-4 text-xl text-[30px] font-bold text-black">Flexible Pricing Plans</h3>
          <p className="py-2">
            We help businesses elevate their value through custom software development,<br></br>
            product design, QA and consultancy services.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {/* <Plan /> */}
          {checkoutData.map((plan) => (
            <Choose_plan key={plan.id} {...plan} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Checkout;
