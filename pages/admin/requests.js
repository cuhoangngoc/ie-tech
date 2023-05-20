import AdminLayout from '../../components/Admin/AdminLayout';
import style from '../../styles/admin.module.css';
import { useState, useEffect } from 'react';
import formatDate from '../../components/formatDate';

export default function Admin() {
  const [requestsData, setrequestsData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch('/api/getrequest');
      const data = await res.json();
      setrequestsData(data); // Lưu dữ liệu vào state
    }
    fetchData(); // Gọi hàm fetchData
  }, []);

  const Check = (e) => {
    e.preventDefault();
    const test = e.target.getAttribute('data-test');
    if (test == 1) {
      alert('Bạn đã duyệt trước đó! Không thể tiếp tục duyệt!!!');
    } else {
      const id = e.target.getAttribute('data-id');
      const postData = async () => {
        const response = fetch('/api/addMoney', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            id: id,
          }),
        });
      };
      postData();
      alert('Bạn vừa phê duyệt yêu cầu nạp tiền của khách hàng!');
      location.reload();
    }
  };

  return (
    <AdminLayout>
      <h1 className={`${style.header}`}>Yêu cầu nạp tiền</h1>

      <table className="bg-white">
        <thead>
          <tr>
            <th>Mã yêu cầu</th>
            <th>Mã người dùng</th>
            <th>Khoản tiền</th>
            <th>Thời điểm</th>
            <th>Số tài khoản</th>
            <th>Tình trạng</th>
            <th>Thao tác</th>
          </tr>
        </thead>
        <tbody>
          {requestsData.map((request) => (
            <tr key={request.id}>
              <td>{request.id}</td>
              <td>{request.user_id}</td>
              <td>{request.amount}</td>
              <td>{formatDate(request.date)}</td>
              <td>{request.account_number}</td>
              <td>{request.test}</td>
              <td>
                <button
                  className="rounded bg-green-300 p-2 hover:bg-green-700"
                  onClick={Check}
                  data-test={request.test}
                  data-id={request.id}
                >
                  Duyệt
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </AdminLayout>
  );
}
