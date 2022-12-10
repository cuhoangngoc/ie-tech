import AppLayout from "../components/Breeze/Layouts/AppLayout";
import Head from "next/head";
import Loader from "../components/Loader";
import Order from "../components/Checkout/Order";
import Link from "next/link";
import Logo from "../public/asset/Logo-only.png";
import Avatar from "../public/asset/avatar-svgrepo-com.svg";
import { FcHome } from "react-icons/fc";
import { FcSupport } from "react-icons/fc";
import { useState } from "react";
import { useAuth } from "../hooks/auth";

const Dashboard = () => {
  const { user } = useAuth({ middleware: "auth" });

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [update, setUpdate] = useState(false);

  if (!user) {
    return <Loader />;
  }

  function updateUserInfo(e) {
    e.preventDefault();
    const postData = async () => {
      const data = {
        name: name ? name : user?.name,
        email: user?.email,
        phone: phone ? phone : user?.phone ? user?.phone : null,
        address: address ? address : user?.address ? user?.address : null,
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

  const enableUpdate = (e) => {
    e.preventDefault();
    setUpdate(!update);
    const usernameEl = document.getElementById("username");
    const phoneEl = document.getElementById("phone");
    const addressEl = document.getElementById("address");
    const avatarEl = document.getElementById("avatar");
    const els = [usernameEl, phoneEl, addressEl];
    if (update) {
      els.forEach((el) => {
        el.disabled = false;
      });
      avatarEl.hidden = false;
    } else {
      els.forEach((el) => {
        el.disabled = true;
      });
      avatarEl.hidden = true;
    }
  };
  const payment = (e) => {
    e.preventDefault();
    const form = document.getElementById("insert-form");
    form.classList.toggle("hidden");
    form.classList.toggle("flex");
  };

  return (
    <AppLayout
      header={
        <h2 className="text-xl font-semibold leading-tight text-gray-800">
          Hồ sơ người dùng
        </h2>
      }
    >
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" type="image/x-icon" href={Logo.src} />
        <title>IE Tech</title>
      </Head>

      <div className="py-12">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
            <div className="flex items-center justify-between border-b border-gray-200 bg-white p-6">
              <p>
                Xin chào {user?.name}! Cảm ơn bạn đã sử dụng dịch vụ của ietech.
              </p>
              <Link href="/">
                <a className="inline-flex items-center gap-1 rounded-lg bg-[#7FBCD2] p-2 hover:opacity-80">
                  Trang chủ <FcHome size={20} />
                </a>
              </Link>
            </div>

            <div className="border-b border-gray-200 bg-white p-6">
              <img
                src={user?.avatar ? user.avatar : Avatar.src}
                alt="avatar"
                className="mx-auto max-w-[100px]"
              />
              <label htmlFor="">
                <input type="file" id="avatar" hidden />
              </label>
              <div>
                Số dư:&nbsp;
                <span className="text-[#5F8D4E]">
                  {user?.balance
                    ? +(Math.round(user?.balance + "e+2") + "e-2")
                    : 0}
                  $
                </span>
              </div>
              <div>
                <Link href="/payment">Nạp tiền</Link>
              </div>
              <form onSubmit={updateUserInfo} className="pt-4">
                <table className="mt-4 w-full">
                  <tbody>
                    <tr>
                      <td>Tên:</td>
                      <td>
                        {/* Dùng value sẽ khiến input không thể nhập được, dùng defaultValue */}
                        <input
                          type="text"
                          defaultValue={user?.name}
                          id="username"
                          onChange={(e) => setName(e.target.value)}
                          disabled
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Email:</td>
                      <td>{user?.email}</td>
                    </tr>
                    <tr>
                      <td>Số điện thoại</td>
                      <td>
                        <input
                          type="text"
                          defaultValue={user?.phone ? user?.phone : "..."}
                          id="phone"
                          onChange={(e) => setPhone(e.target.value)}
                          disabled
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Địa chỉ:</td>
                      <td>
                        <input
                          type="text"
                          defaultValue={user?.address ? user?.address : "..."}
                          minLength="10"
                          maxLength="10"
                          id="address"
                          onChange={(e) => setAddress(e.target.value)}
                          disabled
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>

                <div className="flex justify-between">
                  <button
                    className="mt-2 rounded-lg p-2 hover:bg-[#7FBCD2]"
                    onClick={enableUpdate}
                  >
                    Chỉnh sửa
                  </button>
                  <button
                    type="submit"
                    className="mt-2 rounded-lg p-2 hover:bg-[#7FBCD2]"
                  >
                    <FcSupport size={40} />
                  </button>
                </div>
              </form>
            </div>

            {/* Lịch sử mua hàng của người dùng */}
            <div className="border-b border-gray-200 bg-white p-6">
              <h1> Lịch sử mua hàng </h1>
              <Order user_id={user?.id} />
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default Dashboard;
