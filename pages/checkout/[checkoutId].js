import Layout from '../../components/Layout/Layout';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { useAuth } from '../../hooks/auth';
import round from '../../components/round';
import StripeContainer from '../../components/StripeContainer';
import PaypalPayment from '../../components/PaypalPayment/PaypalPayment';
import GooglePay from '../../components/GooglePay/GooglePay';

const Checkout = () => {
  const { user } = useAuth({ middleware: 'auth' }); //redirect tới đăng nhập nếu chưa đăng nhập
  const router = useRouter();
  const { checkoutId } = router.query; // lấy checkoutId từ URL, trả về một string
  const [checkoutData, setCheckoutData] = useState({}); // khởi tạo state checkoutData với giá trị mặc định là object rỗng chua dữ liệu của checkout
  const [order, setOrder] = useState({}); // khởi tạo state totalPrice với giá trị mặc định là 0
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

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (!order.total) {
  //     alert('Vui lòng chọn thời hạn');
  //     return;
  //   }

  //   if (user?.balance < order.total) {
  //     alert('Số dư không đủ để thanh toán');
  //     return;
  //   }
  //   const postData = async () => {
  //     console.log(user?.id, Number(checkoutId), order.duration, Number(order.total));
  //     const response = await fetch('/api/createOrder', {
  //       method: 'POST',
  //       body: JSON.stringify({
  //         user_id: user?.id,
  //         plan_id: Number(checkoutId),
  //         duration: order.duration,
  //         total: Number(order.total),
  //         order_status: 'Thành công',
  //       }),
  //     });
  //     const data = await response.json();
  //     if (data.status === 'success') {
  //       router.push('/dashboard');
  //     }
  //   };
  //   postData();
  //   alert('Đặt mua và thanh toán thành công');
  // };

  const orderInfo = {
    user_id: user?.id,
    plan_id: Number(checkoutId),
    duration: order.duration,
    total: Number(order.total),
  };

  return (
    <Layout>
      <div className="mt-10">
        <div>
          <div className="flex flex-col justify-between md:flex-row">
            <h1 className="text-xl">
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
                    onChange={(e) =>
                      setOrder({
                        total: e.target.value,
                        duration: item.duration,
                      })
                    }
                  />
                  <label htmlFor={item.id}>{item.duration} tháng</label>
                </div>
                <div className="text-2xl font-extrabold text-[#5F8D4E]">{item.total}$</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="hs-accordion-group mx-auto mt-10 max-w-lg">
        <div
          className="hs-accordion active -mt-px border bg-white first:rounded-t-lg last:rounded-b-lg dark:border-gray-700 dark:bg-gray-800"
          id="hs-bordered-heading-one"
        >
          <button
            className="hs-accordion-toggle inline-flex w-full items-center gap-x-3 py-4 px-5 text-left font-semibold text-gray-800 transition hover:text-gray-500 hs-accordion-active:text-blue-600 dark:text-gray-200 dark:hover:text-gray-400 dark:hs-accordion-active:text-blue-500"
            aria-controls="hs-basic-bordered-collapse-one"
          >
            <svg
              className="block h-3 w-3 text-gray-600 group-hover:text-gray-500 hs-accordion-active:hidden hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 dark:text-gray-400"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.5 8.85999L14.5 8.85998"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M8 15.36L8 2.35999"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            <svg
              className="hidden h-3 w-3 text-gray-600 group-hover:text-gray-500 hs-accordion-active:block hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 dark:text-gray-400"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.5 8.85999L14.5 8.85998"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            Thẻ tín dụng / ghi nợ quốc tế
          </button>
          <div
            id="hs-basic-bordered-collapse-one"
            className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
            aria-labelledby="hs-bordered-heading-one"
          >
            <div className="px-5 pb-4">
              <StripeContainer orderInfo={orderInfo} />
            </div>
          </div>
        </div>

        <div
          className="hs-accordion -mt-px border bg-white first:rounded-t-lg last:rounded-b-lg dark:border-gray-700 dark:bg-gray-800"
          id="hs-bordered-heading-two"
        >
          <button
            className="hs-accordion-toggle inline-flex w-full items-center gap-x-3 py-4 px-5 text-left font-semibold text-gray-800 transition hover:text-gray-500 hs-accordion-active:text-blue-600 dark:text-gray-200 dark:hover:text-gray-400 dark:hs-accordion-active:text-blue-500"
            aria-controls="hs-basic-bordered-collapse-two"
          >
            <svg
              className="block h-3 w-3 text-gray-600 group-hover:text-gray-500 hs-accordion-active:hidden hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 dark:text-gray-400"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.5 8.85999L14.5 8.85998"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M8 15.36L8 2.35999"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            <svg
              className="hidden h-3 w-3 text-gray-600 group-hover:text-gray-500 hs-accordion-active:block hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 dark:text-gray-400"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.5 8.85999L14.5 8.85998"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            Ví Paypal
          </button>
          <div
            id="hs-basic-bordered-collapse-two"
            className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
            aria-labelledby="hs-bordered-heading-two"
          >
            <div className="flex justify-center px-5 pb-4">
              <PaypalPayment orderInfo={orderInfo} />
            </div>
          </div>
        </div>

        <div
          className="hs-accordion -mt-px border bg-white first:rounded-t-lg last:rounded-b-lg dark:border-gray-700 dark:bg-gray-800"
          id="hs-bordered-heading-three"
        >
          <button
            className="hs-accordion-toggle inline-flex w-full items-center gap-x-3 py-4 px-5 text-left font-semibold text-gray-800 transition hover:text-gray-500 hs-accordion-active:text-blue-600 dark:text-gray-200 dark:hover:text-gray-400 dark:hs-accordion-active:text-blue-500"
            aria-controls="hs-basic-bordered-collapse-three"
          >
            <svg
              className="block h-3 w-3 text-gray-600 group-hover:text-gray-500 hs-accordion-active:hidden hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 dark:text-gray-400"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.5 8.85999L14.5 8.85998"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M8 15.36L8 2.35999"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            <svg
              className="hidden h-3 w-3 text-gray-600 group-hover:text-gray-500 hs-accordion-active:block hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 dark:text-gray-400"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.5 8.85999L14.5 8.85998"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            Ví Google Pay
          </button>
          <div
            id="hs-basic-bordered-collapse-three"
            className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
            aria-labelledby=" hs-bordered-heading-three"
          >
            <div className="flex justify-center px-5 pb-4">
              <GooglePay orderInfo={orderInfo} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Checkout;
