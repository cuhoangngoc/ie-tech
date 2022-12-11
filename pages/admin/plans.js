import AdminLayout from "../../components/Admin/AdminLayout";
import { useState, useEffect } from "react";
import Input from "../../components/Breeze/Input";
import style from "../../styles/Admin.module.css";

export default function Admin() {
  const [planData, setplanData] = useState([]);
  const [id, setID] = useState(0);
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDesc] = useState("");
  const [service_id, setService_id] = useState(null);
  const [serviceData, setServiceData] = useState([]);
  // Dùng useEffect để lấy dữ liệu từ API
  useEffect(() => {
    async function fetchData() {
      const res = await fetch("/api/getPlanData");
      const data = await res.json();
      setplanData(data); // Lưu dữ liệu vào state
    }

    fetchData(); // Gọi hàm fetchData
  }, []);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("/api/getServicesData");
      const data = await res.json();
      setServiceData(data); // Lưu dữ liệu vào state
    }
    fetchData(); // Gọi hàm fetchData
  }, []);

  //Hàm updatePlan có tác dụng lưu tạm thời các thay đổi trong form để hàm send_data_to_database gửi đến cơ sở dữ liệu
  function updatePlan(e) {
    e.preventDefault();
    // Lấy phần tử với id form và gán cho biến form
    const form = document.getElementById("form");

    setID(e.target.getAttribute("id"));
    // Lấy dữ liệu với thuộc tính name để set lại state name
    setName(e.target.getAttribute("name"));
    setPrice(e.target.getAttribute("price"));
    setDesc(e.target.getAttribute("description"));
    form.classList.toggle("hidden");
    form.classList.toggle("flex");
  }
  //Hàm send_data gửi các thay đổi tạm thời đến cơ sở dữ liệu biến chúng thành thay đổi vĩnh viễn
  function send_data_to_database() {
    if (price <= 0) {
      alert("Giá tiền phải lớn hơn 0");
      return;
    }

    const postData = async () => {
      const data = {
        id: id,
        name: name,
        description: description,
        price: price,
      };

      const response = await fetch("/api/updatePlanInfo", {
        method: "POST",
        body: JSON.stringify(data),
      });
      return response.json();
    };
    postData();
    alert("Cập nhật thông tin thành công!");
    location.reload();
  }

  //Hàm xóa plan sử dụng id lấy từ thuộc tính  plan_id của nút xóa
  const deletePlan = async (e) => {
    e.preventDefault();
    const id = e.target.getAttribute("plan_id");
    // Hỏi người dùng, nếu không muốn xóa thì thoát
    if (!confirm("Bạn muốn xóa gói này")) return;

    const postData = async () => {
      const res = await fetch("/api/deletePlan", {
        method: "POST",
        body: JSON.stringify({ id: id }),
      });
      return res.json();
    };
    postData();
    alert("Xóa gói thành công");
    location.reload();
  };

  //Hàm hiện và ẩn form insert
  function hiddenOrAppearFormInsert() {
    const form = document.getElementById("insert-form");
    form.classList.toggle("hidden");
    form.classList.toggle("flex");
  }
  //Hàm insert dữ liệu từ form insert
  function insertPlan(e) {
    e.preventDefault();

    if (price <= 0) {
      alert("Giá tiền phải lớn hơn 0");
      return;
    } else if (service_id == null) {
      alert("Hãy chọn dịch vụ");
      return;
    }

    const postData = async () => {
      const data = {
        name: name,
        description: description,
        price: price,
        service_id: service_id,
      };
      console.log(data);
      const response = await fetch("/api/insertPlan", {
        method: "POST",
        body: JSON.stringify(data),
      });
    };
    postData();
    alert("Thêm plan thành công!");
    location.reload();
  }

  return (
    <AdminLayout>
      <h1 className={`${style.header}`}>Quản lý gói dịch vụ</h1>
      <div className="flex flex-col gap-4 lg:flex-row">
        <table className="max-w-3xl bg-white">
          <thead>
            <tr>
              <th>Tên gói</th>
              <th>Dịch vụ</th>
              <th>Giá</th>
              <th>Mô tả</th>
              <th>Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {planData?.map((plan) => (
              <tr key={plan.id}>
                <td>{plan.plan}</td>
                <td>{plan.service}</td>
                <td>{plan.price}$</td>
                <td>{plan.description}</td>
                <td>
                  {/*Hiện form sửa */}
                  <button
                    onClick={updatePlan}
                    // gán dữ liệu cho hàm updatePlan ở trên
                    id={plan.id}
                    name={plan.plan}
                    price={plan.price}
                    description={plan.description}
                    className="rounded bg-blue-500 p-2 hover:bg-blue-700"
                  >
                    Sửa
                  </button>

                  {/*Nút xóa dữ liệu */}
                  <button
                    // gán dữ liệu id cho hàm xóa dữ liệu
                    plan_id={plan.id}
                    className="mt-1 rounded bg-red-500 p-2 hover:bg-red-700"
                    onClick={deletePlan}
                  >
                    Xóa
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <form
          id="form"
          className="mt-4 hidden h-fit flex-col items-center gap-4 bg-sky-400 p-4"
          onSubmit={send_data_to_database}
        >
          <h1>Chỉnh sửa thông tin gói dịch vụ</h1>
          <Input
            type="text"
            id="name-update"
            defaultValue={name}
            placeholder="Tên"
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            type="number"
            id="price-update"
            defaultValue={price}
            placeholder="Giá"
            onChange={(e) => setPrice(e.target.value)}
          />
          <Input
            type="text"
            id="desc-update"
            defaultValue={description}
            placeholder="Mô tả"
            onChange={(e) => setDesc(e.target.value)}
          />
          <button
            className="w-fit rounded-md p-1 hover:bg-blue-600"
            type="submit"
          >
            Lưu
          </button>
        </form>
      </div>

      {/* Nút bật tắt form thêm gói dịch vụ */}
      <button
        onClick={hiddenOrAppearFormInsert}
        className="mt-2 rounded bg-green-500 p-2 hover:bg-green-800"
      >
        Thêm
      </button>

      {/*form thêm gói dịch vụ*/}
      <form
        id="insert-form"
        className="mt-4 hidden max-w-md flex-col items-center gap-4 bg-sky-400 p-4"
        onSubmit={insertPlan}
      >
        <h1 className="font-bold">Thêm gói dịch vụ</h1>
        <Input
          type="text"
          id="name-insert"
          placeholder="Tên"
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type="number"
          step="any"
          id="price-insert"
          placeholder="Giá"
          onChange={(e) => setPrice(e.target.value)}
        />
        <Input
          type="text"
          id="desc-insert"
          placeholder="Mô tả"
          onChange={(e) => setDesc(e.target.value)}
        />
        {/* <Input
          type="number"
          id="service_id insert"
          placeholder="service_id"
          onChange={(e) => setService_id(e.target.value)}
        /> */}

        <select className="p-2" onChange={(e) => setService_id(e.target.value)}>
          <option value="">Chọn dịch vụ</option>
          {serviceData?.map((service) => (
            <option key={service.id} value={service.id}>
              {service.name}
            </option>
          ))}
        </select>
        <button
          className="w-fit rounded-md bg-blue-400 p-1 hover:bg-blue-600"
          type="submit"
        >
          Thêm
        </button>
      </form>
    </AdminLayout>
  );
}
