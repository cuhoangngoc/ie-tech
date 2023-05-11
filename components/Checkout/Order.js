import { useState, useEffect } from 'react';

const Order = (props) => {
  // Hook để lấy dữ liệu từ API
  const [order, setOrder] = useState([]);

  useEffect(() => {
    const postData = async () => {
      const response = await fetch('/api/getUserOrder', {
        method: 'POST',
        body: JSON.stringify({ id: props.user_id }),
      });
      const data = await response.json();
      setOrder(data);
    };
    postData();
  }, [props.user_id]);

  return (
    <>
      {order.length === 0 || !(order instanceof Array) ? (
        <div className="mt-10 flex items-center justify-center gap-2">
          <h1>Lịch sử mua hàng rỗng</h1>
        </div>
      ) : (
        // Nếu có dữ liệu thì hiển thị
        <table className="my-8 w-full">
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
                  {new Date(item.created_at)
                    .toISOString()
                    .slice(0, 19)
                    .replace(/-/g, '/')
                    .replace('T', ' ')}
                </td>
                <td
                  className={`${item.status === 'Thành công' ? 'text-green-700' : 'text-red-500'}`}
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
