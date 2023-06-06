import AdminLayout from "../../components/Admin/AdminLayout";
import { useState, useEffect } from "react";
import style from "../../styles/admin.module.css";

export default function Admin() {
  const [servicesData, setServicesData] = useState([]);
  const [serviceId, setServiceId] = useState(0);
  const [ServiceName, setServiceName] = useState("");
  const [search, setSearch] = useState("");
  const [statebackup, setStatebackup] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("/api/getServicesData");
      const data = await res.json();
      setStatebackup(data);// backup dữ liệu để search
      setServicesData(data); // Lưu dữ liệu vào state
    }
    fetchData(); // Gọi hàm fetchData
  }, []);

  //XỬ lí sự kiện search
  useEffect(() => {
    setServicesData(
      statebackup.filter((data) => {
        return (
          data.name.toLowerCase().includes(search.toLowerCase()) 
        );
      })
    );
  }, [search]);

  const insert = (e) => {
    e.preventDefault();
    const form = document.getElementById("insert-Serviceform");
    form.classList.toggle("hidden");
    form.classList.toggle("flex");
  };

  const update = (e) => {
    e.preventDefault();
    const form = document.getElementById("update-Serviceform");
    setServiceName(e.target.getAttribute("data-name"));
    setServiceId(e.target.getAttribute("data-key"));
    form.classList.toggle("hidden");
    form.classList.toggle("flex");
  };
  function insertService(e) {
    e.preventDefault();
    if (ServiceName === null || ServiceName === "") {
      alert("Tên dịch vụ không được để trống");
      return;
    }

    const postData = async () => {
      const data = {
        name: ServiceName,
      };
      console.log(data);
      const response = await fetch("/api/insertService", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    };
    postData();
    alert("Thêm dịch vụ thành công!");
    location.reload();
  }
  function updateServiceInfo(e) {
    e.preventDefault();
    if (ServiceName === null || ServiceName === "") {
      alert("Tên Service không được để trống");
      return;
    }
    const postData = async () => {
      const data = {
        name: ServiceName,
        id: serviceId,
      };

      const response = await fetch("/api/updateServiceInfo", {
        method: "POST",
        body: JSON.stringify(data),
      });
      return response.json();
    };
    postData();
    alert("Cập nhật dịch vụ thành công!");
    location.reload();
  }
  const deleteService = (e) => {
    e.preventDefault();
    const id = e.target.getAttribute("data-key");
    console.log(id);
    if (!confirm("Bạn có muốn xóa dịch vụ này")) return;
    const postData = async () => {
      const res = fetch("/api/deleteService", {
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
    location.reload();
  };
  return (
    <AdminLayout>
      <h1 className={`${style.header}`}>Quản lý dịch vụ</h1>

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
            <th>ID</th>
            <th>Tên dịch vụ</th>
            <th>Thao tác</th>
          </tr>
        </thead>
        <tbody>
          {servicesData&&servicesData.map((service) => (
            <tr key={service.id}>
              <td>{service.id}</td>
              <td>{service.name}</td>
              <td>
                <div className="flex gap-1">
                  <button
                    onClick={update}
                    data-name={service.name}
                    data-key={service.id}
                    className="rounded bg-blue-500 p-2 hover:bg-blue-700"
                  >
                    Sửa
                  </button>
                  <button
                    onClick={deleteService}
                    data-key={service.id}
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
      <div className="mt-5 flex gap-4">
        <button
          onClick={insert}
          className="rounded bg-green-500 p-2 hover:bg-green-700"
        >
          Thêm dịch vụ
        </button>
      </div>
      <form
        id="insert-Serviceform"
        className="mt-4 hidden max-w-[300px] flex-col items-center gap-4 bg-sky-400 p-4"
        onSubmit={insertService}
      >
        <label
          htmlFor="ServiceName"
          className="text-center font-extrabold text-white"
        >
          Thêm dịch vụ
        </label>
        <input
          type="text"
          id="ServiceName"
          value={ServiceName}
          onChange={(e) => setServiceName(e.target.value)}
          className="px-2"
        />
        <button
          className="rounded-lg bg-blue-500 p-2 hover:bg-blue-700"
          type="submit"
        >
          Thêm
        </button>
      </form>
      <form
        id="update-Serviceform"
        className="mt-4 hidden max-w-[400px] flex-col gap-4 bg-sky-400 p-4"
        onSubmit={updateServiceInfo}
      >
        <label
          htmlFor="ServiceName"
          className="text-center font-extrabold text-white"
        >
          Chỉnh sửa dịch vụ
        </label>
        <input
          type="text"
          id="ServiceName"
          value={ServiceName}
          onChange={(e) => setServiceName(e.target.value)}
          className="px-2"
        />
        <button
          className="rounded-lg bg-blue-500 p-2 hover:bg-blue-700"
          type="submit"
        >
          Cập nhật
        </button>
      </form>
    </AdminLayout>
  );
}
