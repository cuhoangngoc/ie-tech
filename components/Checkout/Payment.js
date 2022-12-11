import { useState, useEffect } from "react";

const Payment = (props) => {
  // Hook để lấy dữ liệu từ API
  const [payment, setPayment] = useState([]);

  useEffect(() => {
    const postData = async () => {
      const response = await fetch("/api/getrequest", {
        method: "POST",
        body: JSON.stringify({ id: props.user_id }),
      });
      const data = await response.json();
      setPayment(data);
    };
    postData();
  }, [props.user_id]);

  return (
    <>
      {payment.length === 0 || !(payment instanceof Array) ? (
        <div className="mt-10 flex items-center justify-center gap-2">
          <h1>Bạn không có yêu cầu nạp tiền nào</h1>
        </div>
      ) : (
        // Nếu có dữ liệu thì hiển thị
        <table className="my-8 w-full">
          <thead>
            <tr>
              <th>Mã yêu cầu</th>
              <th>Khoản tiền</th>
              <th>Ngày yêu cầu</th>
              <th>Trạng thái</th>
            </tr>
          </thead>
          <tbody>
            {payment.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.amount}</td>
                <td>
                  {/* format thời gian theo kiểu Y/M/D H:M:S */}
                  {new Date(item.date)
                    .toISOString()
                    .slice(0, 19)
                    .replace(/-/g, "/")
                    .replace("T", " ")}
                </td>
                <td
                  className={`${item.test ? "text-green-700" : "text-red-500"}`}
                >
                  {item.test ? "Đã xử lý" : "Đang chờ"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default Payment;
