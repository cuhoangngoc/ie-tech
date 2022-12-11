import AdminLayout from "../../components/Admin/AdminLayout";
import { useState, useEffect } from "react";
import style from "../../styles/admin.module.css";

export default function Admin() {
  const [servicesData, setServicesData] = useState([]);
  const [serviceId, setServiceId] = useState(0);
  const [ServiceName, setServiceName] = useState("");
  useEffect(() => {
    async function fetchData() {
      const res = await fetch("/api/getServicesData");
      const data = await res.json();
      setServicesData(data); // Lưu dữ liệu vào state
    }
    fetchData(); // Gọi hàm fetchData
  }, []);

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
      <table className="bg-white">
        <thead>
          <tr>
            <th>ID</th>
            <th>Tên dịch vụ</th>
            <th>Thao tác</th>
          </tr>
        </thead>
        <tbody>
          {servicesData.map((service) => (
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
