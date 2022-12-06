import Layout from "../../components/Layout/Layout";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { useAuth } from "../../hooks/auth";

const checkout = () => {
  const { user } = useAuth({ middleware: "auth" }); //redirect tới đăng nhập nếu chưa đăng nhập
  const router = useRouter();
  const { checkoutId } = router.query; // lấy checkoutId từ URL, trả về một string
  const [checkoutData, setCheckoutData] = useState({}); // khởi tạo state checkoutData với giá trị mặc định là object rỗng chua dữ liệu của checkout
  const [order, setOrder] = useState({}); // khởi tạo state totalPrice với giá trị mặc định là 0
  useEffect(() => {
    if (checkoutId) {
      // kiểm tra checkoutId có tồn tại hay không
      const postData = async () => {
        const response = await fetch("/api/getCheckoutData", {
          method: "POST",
          body: JSON.stringify({ id: checkoutId }),
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        setCheckoutData(data[0]); // Kết quả trả về là mảng với 1 phần tử duy nhất và lấy phần tử đó
      };
      postData();
    }
  }, [router.query.id, router.isReady]); // chỉ chạy khi checkoutId thay đổi

  const duration = [
    {
      id: "monthly",
      duration: 1,
      total: checkoutData.price,
    },
    {
      id: "quarterly",
      duration: 3,
      total: checkoutData.price * 3,
    },
    {
      id: "yearly",
      duration: 12,
      total: checkoutData.price * 12 * 0.9, // giảm 10% nếu mua 1 năm
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user?.balance < order.total) {
      alert("Số dư không đủ để thanh toán");
      return;
    }
    const postData = async () => {
      console.log(
        user?.id,
        Number(checkoutId),
        order.duration,
        Number(order.total)
      );
      const response = await fetch("/api/createOrder", {
        method: "POST",
        body: JSON.stringify({
          user_id: user?.id,
          plan_id: Number(checkoutId),
          duration: order.duration,
          total: Number(order.total),
          order_date: new Date(),
          order_status: "Hoàn thành",
        }),
      });
      const data = await response.json();
      if (data.status === "success") {
        router.push("/dashboard");
      }
    };
    postData();
    alert("Đặt mua và thanh toán thành công");
  };

  return (
    <Layout>
      <div className="mt-10">
        <div>
          <h1>1. Chọn thời hạn</h1>
          <div className="flex justify-center gap-2">
            {duration.map((item, index) => (
              <div
                key={index}
                className="relative w-[200px] bg-white p-2 text-center"
              >
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
                <div className="text-2xl font-extrabold text-red-500">
                  {item.total}$
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        id="payment-method"
        className="mt-10 flex justify-center gap-4 md:flex-row"
      >
        {/* <form action="" className="flex flex-col">
          <div className="inline-flex justify-between gap-4 bg-white">
            <div>
              <input type="radio" name="payment-method" id="credit-card" />
              <label htmlFor="credit-card" className="ml-4">
                Thẻ tín dụng
              </label>
            </div>
            <img src={creditCard.src} alt="credit-card" />
          </div>
          <div className="inline-flex justify-between gap-4 bg-white">
            <div>
              <input type="radio" name="payment-method" id="google-pay" />
              <label htmlFor="google-pay" className="ml-4">
                Google Pay
              </label>
            </div>
            <img src={googlePay.src} alt="google-pay" />
          </div>
          <div className="inline-flex justify-between gap-4 bg-white">
            <div>
              <input type="radio" name="payment-method" id="paypal" />
              <label htmlFor="paypal" className="ml-4">
                Paypal
              </label>
            </div>
            <img src={paypal.src} alt="paypal" />
          </div>
        </form> */}

        <form
          onSubmit={handleSubmit}
          id="order"
          className="m-w-[500px] flex flex-col divide-y divide-gray-200 bg-white p-4 text-xl"
        >
          <h1 className="text-center">Hóa đơn</h1>
          <div className="flex justify-between gap-4">
            <h1>
              Gói dịch vụ {checkoutData.plan_name} {checkoutData.service_name}
            </h1>
            <span> {checkoutData.price}$/tháng</span>
          </div>
          <div className="flex justify-between gap-4">
            <h1>Thời hạn</h1>
            <span className="text-red-500">
              {order.duration ? `${order.duration} tháng` : "Hãy chọn thời hạn"}
            </span>
          </div>
          <div className="flex justify-between gap-4">
            <h1>Tổng cộng</h1>
            <span className="font-extrabold text-[#5F8D4E]">
              {order.total ? order.total : 0}$
            </span>
          </div>
          <button
            type="submit"
            className="mx-auto block rounded-md bg-[#00E7FF] p-2"
          >
            Mua
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default checkout;
