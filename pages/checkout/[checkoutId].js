import Layout from '../../components/Layout/Layout';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { useAuth } from '../../hooks/auth';
import round from '../../components/round';
import { showErrorToast } from '../../components/Toast';

const Checkout = () => {
  const { user } = useAuth({ middleware: 'auth' }); //redirect tới đăng nhập nếu chưa đăng nhập
  const router = useRouter();
  const { checkoutId } = router.query; // lấy checkoutId từ URL, trả về một string
  const [checkoutData, setCheckoutData] = useState({}); // khởi tạo state checkoutData với giá trị mặc định là object rỗng chua dữ liệu của checkout
  const [order, setOrder] = useState({}); // khởi tạo state order với giá trị mặc định là null
  useEffect(() => {
    if (checkoutId) {
      // kiểm tra checkoutId có tồn tại hay không
      const postData = async () => {
        const response = await fetch('/api/getCheckoutData', {
          method: 'POST',
          body: JSON.stringify({ id: checkoutId }),
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const data = await response.json();
        setCheckoutData(data[0]); // Kết quả trả về là mảng với 1 phần tử duy nhất và lấy phần tử đó
      };
      postData();
    }
  }, [router.query.id, router.isReady, checkoutId]); // chỉ chạy khi checkoutId thay đổi

  const duration = [
    {
      id: 'monthly',
      duration: 1,
      total: checkoutData?.price,
    },
    {
      id: 'quarterly',
      duration: 3,
      total: round(checkoutData?.price * 3),
    },
    {
      id: 'yearly',
      duration: 12,
      total: round(checkoutData?.price * 12 * 0.9), // giảm 10% nếu mua 1 năm, làm tròn 2 chữ số thập phân
    },
  ];

  const orderInfo = {
    user_id: user?.id,
    plan_id: Number(checkoutId),
    duration: order?.duration,
    total: Number(order?.total),
  };

  const handleCheckout = async () => {
    if (!order?.total) {
      showErrorToast('Vui lòng chọn gói dịch vụ');
      return;
    }

    router.push({
      pathname: '/checkout/payment',
      query: { ...orderInfo, ...checkoutData },
    });
  };

  return (
    <Layout>
      <div className="mt-10">
        <div>
          <div className="flex flex-col justify-between md:flex-row">
            <h1 className="ml-10 text-xl">
              Bạn đang thực hiện giao dịch cho dịch vụ&nbsp;
              <span className="font-bold">
                {checkoutData?.plan_name} {checkoutData?.service_name}
              </span>
            </h1>
            {/* <span className="text-xl">
                Số dư hiện tại:&nbsp;
                <span className="text-[#2c4324]">{user?.balance ? round(user?.balance) : 0}$</span>
              </span> */}
          </div>

          <div className="mt-5 flex flex-col items-center justify-center gap-8 lg:flex-row">
            {duration.map((item, index) => (
              <div key={index} className="relative w-[200px] bg-white p-2 text-center">
                {item.duration === 12 ? (
                  <p className="absolute -top-6 left-[3rem] text-2xl font-semibold text-red-800 opacity-80">
                    giảm 10%
                  </p>
                ) : null}
                <div className="flex justify-center gap-2">
                  <input
                    type="radio"
                    name="duration"
                    id={item.id}
                    value={item.total}
                    onChange={(e) => {
                      setOrder({
                        total: e.target.value,
                        duration: item.duration,
                      });
                      orderInfo.total = Number(e.target.value);
                      orderInfo.duration = item.duration;
                      localStorage.setItem('orderInfo', JSON.stringify(orderInfo));
                      localStorage.setItem('checkoutData', JSON.stringify(checkoutData));
                    }}
                  />
                  <label htmlFor={item.id}>{item.duration} tháng</label>
                </div>
                <div className="text-2xl font-extrabold text-[#5F8D4E]">{item.total}$</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 flex justify-center">
        <button className="btn-info btn" onClick={handleCheckout}>
          Thanh toán
        </button>
      </div>
    </Layout>
  );
};

export default Checkout;
