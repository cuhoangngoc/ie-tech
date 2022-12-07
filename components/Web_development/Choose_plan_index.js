import Choose_plan from "./Choose_plan";
import { useState, useEffect } from "react";

const Checkout = () => {
  // checkoutData để lưu dữ liệu lấy từ API
  const [checkoutData, setCheckoutData] = useState([]);

  // Dùng useEffect để lấy dữ liệu từ API
  useEffect(() => {
    async function fetchData() {
      const res = await fetch("http://localhost:3000/api/getPlanDataInWebService");
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
    <div className='w-full my-10 bg-white'>
        <div className='max-w-[1240px] m-auto'>
        <div className='w-full text-center'>
            <p className='uppercase text-[#7141b1]'>//choose your plan</p>
            <h3 className='text-black font-bold text-xl text-[30px] py-4'>
              Flexible Pricing Plans
            </h3>
            <p className='py-2'>We help businesses elevate their value through custom software development,<br></br>product design, QA and consultancy services.</p>
        </div>
      <div className='grid md:grid-cols-3 gap-8'>
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
