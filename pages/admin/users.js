import AdminLayout from "../../components/Admin/AdminLayout";
import { useState, useEffect } from "react";
import style from "../../styles/admin.module.css";
import Input from "../../components/Breeze/Input";
import { data } from "autoprefixer";

export default function User() {
  const [usersData, setUsersData] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("/api/getEndUsers");
      const data = await res.json();
      setUsersData(data); // Lưu dữ liệu vào state
    }

    fetchData(); // Gọi hàm fetchData
  }, []);

  const insert = (e) => {
    e.preventDefault();
    const form = document.getElementById("insert-form");
    form.classList.toggle("hidden");
    form.classList.toggle("flex");
  };

  const update = (e) => {
    e.preventDefault();
    const form = document.getElementById("update-form");
    setEmail(e.target.getAttribute("data-email"));
    setName(e.target.getAttribute("data-name"));
    setPhone(e.target.getAttribute("data-phone"));
    setAddress(e.target.getAttribute("data-address"));
    form.classList.toggle("hidden");
    form.classList.toggle("flex");
  };

  function updateUserInfo(e) {
    e.preventDefault();

    // Validate số điện thoại
    if (phone === null || !phone.match(/^0[0-9]{9}/)) {
      alert("Số điện thoại không hợp lệ");
      return;
    }

    const postData = async () => {
      const data = {
        name: name,
        email: email,
        phone: phone,
        address: address,
      };

      const response = await fetch("/api/updateUserInfo", {
        method: "POST",
        body: JSON.stringify(data),
      });
      return response.json();
    };
    postData();
    alert("Cập nhật thông tin thành công!");
  }

  const deleteUser = (e) => {
    e.preventDefault();

    // Hỏi người dùng, nếu không muốn xóa thì thoát
    if (!confirm("Bạn muốn xóa người dùng này")) return;

    const id = e.target.getAttribute("data-key");
    const postData = async () => {
      const res = fetch("/api/deleteUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: id,
        }),
      });
    };
    postData();
    alert("Xóa người dùng thành công");
  };

  return (
    <AdminLayout>
      <h1 className={`${style.header}`}>Quản lý người dùng</h1>
      <table className="bg-white">
        <thead>
          <tr>
            <th>STT</th>
            <th>ID</th>
            <th>Họ tên</th>
            <th>Email</th>
            <th>Số điện thoại</th>
            <th>Địa chỉ</th>
            <th>Điều khiển</th>
          </tr>
        </thead>
        <tbody>
          {usersData.map((user, index) => (
            <tr key={user.id}>
              <td>{index + 1}</td>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.address}</td>
              <td>
                <div className="flex gap-1">
                  {/* Thêm custom attribute data-attr */}
                  <button
                    onClick={update}
                    data-email={user.email}
                    data-name={user.name}
                    data-phone={user.phone}
                    data-address={user.address}
                    className="rounded bg-blue-500 p-2 hover:bg-blue-700"
                  >
                    Sửa
                  </button>
                  <button
                    onClick={deleteUser}
                    data-key={user.id}
                    className="rounded bg-red-500 p-2 hover:bg-red-700"
                  >
                    Xóa
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <form
        id="update-form"
        className="mt-4 hidden flex-col items-center gap-4 bg-sky-400 p-4"
        onSubmit={updateUserInfo}
      >
        <h1 className={`${style.header}`}>Chỉnh sửa thông tin người dùng</h1>
        <div>Email: {email} </div>
        <Input
          type="text"
          id="name-update"
          defaultValue={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type="text"
          id="phone-update"
          defaultValue={phone}
          placeholder="Số điện thoại"
          onChange={(e) => setPhone(e.target.value)}
        />
        <Input
          type="text"
          id="address-update"
          defaultValue={address}
          placeholder="Địa chỉ"
          onChange={(e) => setAddress(e.target.value)}
        />
        <button
          className="w-fit rounded-md p-1 hover:bg-green-600"
          type="submit"
        >
          Lưu
        </button>
      </form>
    </AdminLayout>
  );
}
