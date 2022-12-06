import Link from "next/link";
import { useState, useEffect } from "react";
import { FcAdvance } from "react-icons/fc";

const Order = (props) => {
  // Hook để lấy dữ liệu từ API
  const [order, setOrder] = useState([]);

  useEffect(() => {
    const postData = async () => {
      const response = await fetch("/api/getUserOrder", {
        method: "POST",
        body: JSON.stringify({ id: props.user_id }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setOrder(data);
    };
    postData();
  }, []);

  return (
    <>
      {order.length === 0 ? (
        <div className="mt-10 flex items-center justify-center gap-2">
          <h1>Lịch sử mua hàng rỗng</h1>
          <Link href="/checkout">
            <a className="inline-flex w-fit items-center gap-2 rounded-sm bg-sky-300 p-2 hover:opacity-70">
              Dịch vụ <FcAdvance />
            </a>
          </Link>
        </div>
      ) : (
        // Nếu có dữ liệu thì hiển thị
        <table className="w-full">
          <thead>
            <tr>
              <th>Mã đơn hàng</th>
              <th>Gói dịch vụ</th>
              <th>Thời hạn</th>
              <th>Tổng tiền</th>
              <th>Ngày đặt</th>
              <th>Trạng thái</th>
            </tr>
          </thead>
          <tbody>
            {order.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>
                  {item.plan} {item.service}
                </td>
                <td>{item.duration} tháng</td>
                <td>{item.total}$</td>
                <td>
                  {/* format thời gian theo kiểu Y/M/D H:M:S */}
                  {new Date(item.order_date)
                    .toISOString()
                    .slice(0, 19)
                    .replace(/-/g, "/")
                    .replace("T", " ")}
                </td>
                <td
                  className={`${
                    item.status === "Hoàn thành"
                      ? "text-green-700"
                      : "text-red-500"
                  }`}
                >
                  {item.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default Order;
