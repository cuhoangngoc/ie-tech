import AdminLayout from "../../components/Admin/AdminLayout";
import { useState, useEffect } from "react";
import style from "../../styles/admin.module.css";
import Input from "../../components/Breeze/Input";

export default function User() {
  const [usersData, setUsersData] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [search, setSearch] = useState("");
  const [userBackup, setUserBackup] = useState([]);
  const [selectPage, setSelectPage] = useState("");
  const [totalpage, setTotalpage] = useState("");
  useEffect(() => {
    async function fetchData() {
      const res = await fetch("/api/getEndUsers");
      const data = await res.json();
      setUsersData(data); // Lưu dữ liệu vào state
      setUserBackup(data);
    }
    fetchData(); // Gọi hàm fetchData
  }, []);
  useEffect(() => {
    setUsersData(getPageData(1));
  }, [userBackup]);
  useEffect(() => {
    setUsersData(
      userBackup.filter((data) => {
        return (
          data.name.toLowerCase().includes(search.toLowerCase()) ||
          data.email.toLowerCase().includes(search.toLowerCase())
        );
      })
    );
    if(search=="")
    {
      setUsersData(getPageData(selectPage))
    }
  }, [search]);

  const handleClickPage = (event) => {
    const value = event.target.textContent;
    if (value == "Next") {
      value = parseInt(selectPage) + 1;
    } else if (value == "Previous") {
      value = parseInt(selectPage) - 1;
    }
    setSelectPage(value);
  };
  useEffect(() => {
    setUsersData(getPageData(selectPage));
  }, [selectPage]);

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
    location.reload();
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
    location.reload();
  };
  //
  const itemsPerPage = 20;

  const totalPages = Math.ceil(userBackup.length / itemsPerPage);
  const getPageData = (pageNumber) => {
    const startIndex = (pageNumber - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return userBackup.slice(startIndex, endIndex);
  };
  useEffect(() => {
    setTotalpage(totalPages);
  }, [totalPages]);
  //

  return (
    <AdminLayout>
      <h1 className={`${style.header}`}>Quản lý người dùng</h1>
      <div class="mb-3">
        <div class="relative mb-4 flex w-[85%] flex-wrap items-stretch bg-white ">
          <input
            type="search"
            class="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-white bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="button-addon1"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <button
            class="hover:bg-primary-700 focus:bg-primary-700 active:bg-primary-800 relative z-[2] flex items-center rounded-r bg-primary px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
            type="button"
            id="button-addon1"
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="h-5 w-5"
            >
              <path
                fill-rule="evenodd"
                d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
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
      <nav aria-label="Page navigation example" className="flex-row">
        <ul class="list-style-none flex w-full  justify-center">
          <li>
            <a
              class={
                parseInt(selectPage) === 1
                  ? `pointer-events-none relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-500 transition-all duration-300 dark:text-neutral-400`
                  : `relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white`
              }
              href="#!"
              onClick={handleClickPage}
            >
              Previous
            </a>
          </li>
          <li>
            <a
              class="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100  dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
              href="#!"
              onClick={handleClickPage}
            >
              1
            </a>
          </li>
          <li aria-current="page">
            <a
              class="bg-primary-100 text-primary-700 relative block rounded px-3 py-1.5 text-sm font-medium transition-all duration-300"
              href="#!"
              onClick={handleClickPage}
            >
              2
            </a>
          </li>
          <li>
            <a
              class="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
              href="#!"
              onClick={handleClickPage}
            >
              3
            </a>
          </li>
          <li>
            <a
              class="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
              href="#!"
              onClick={handleClickPage}
            >
              4
            </a>
          </li>
          <li>
            <a
              class="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
              href="#!"
              onClick={handleClickPage}
            >
              5
            </a>
          </li>
          <li>
            <a
              class="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
              href="#!"
              onClick={handleClickPage}
            >
              6
            </a>
          </li>
          <li>
            <a
              class="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
              href="#!"
              onClick={handleClickPage}
            >
              7
            </a>
          </li>
          <li>
            <a
              class="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
              href="#!"
              onClick={handleClickPage}
            >
              8
            </a>
          </li>
          <li>
            <a
              class="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
              href="#!"
              onClick={handleClickPage}
            >
              9
            </a>
          </li>
          <li>
            <a
              class="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
              href="#!"
              onClick={handleClickPage}
            >
              10
            </a>
          </li>
          <li>
            <a
              class={
                parseInt(selectPage) === parseInt(totalPages)
                  ? `pointer-events-none relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-500 transition-all duration-300 dark:text-neutral-400`
                  : `relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white`
              }
              href="#!"
              onClick={handleClickPage}
            >
              Next
            </a>
          </li>
        </ul>
      </nav>

      <form
        id="update-form"
        className="mt-4 hidden max-w-md flex-col items-center gap-4 bg-sky-400 p-4"
        onSubmit={updateUserInfo}
      >
        <h1 className={`${style.header}`}>Chỉnh sửa thông tin người dùng</h1>
        <div className="text-xl font-semibold text-white">Email: {email} </div>
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
          className="w-fit rounded-md p-1 hover:bg-blue-500"
          type="submit"
        >
          Lưu
        </button>
      </form>
      
    </AdminLayout>
  );
}
