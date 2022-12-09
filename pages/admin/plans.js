import AdminLayout from "../../components/Admin/AdminLayout";
import { useState, useEffect } from "react";
import Input from "../../components/Breeze/Input";

export default function Admin() {
  const [planData, setplanData] = useState([]);
  const [id, setID] = useState(0);
  const [name, setName] = useState("");
  const [price, setPrice] = useState(null);
  const [description, setDesc] = useState("");
  const [service_id, setService_id] = useState(null);
  const [update, setUpdate] = useState(false);
  // Dùng useEffect để lấy dữ liệu từ API
  useEffect(() => {
    async function fetchData() {
      const res = await fetch("/api/getPlanData");
      const data = await res.json();
      setplanData(data); // Lưu dữ liệu vào state
    }

    fetchData(); // Gọi hàm fetchData
  }, []);


  //Hàm updatePlan có tác dụng lưu tạm thời các thay đổi trong form để hàm send_data_to_database gửi đến cơ sở dữ liệu
  function updatePlan(e) {
    e.preventDefault();
    // Lấy phần tử với id form và gán cho biến form
    const form = document.getElementById("form");

    setID(e.target.getAttribute("id"))
    // Lấy dữ liệu với thuộc tính name để set lại state name
    setName(e.target.getAttribute("name"));
    setPrice(e.target.getAttribute("price"));
    setDesc(e.target.getAttribute("description"));
    form.classList.toggle("hidden");
    form.classList.toggle("flex");
  }
  //Hàm send_data gửi các thay đổi tạm thời đến cơ sở dữ liệu biến chúng thành thay đổi vĩnh viễn
  function send_data_to_database() {
    const postData = async () => {
      const data = {
        id: id,
        name: name,
        description: description,
        price: price,
      };
      console.log(id, name, description, price);
      const response = await fetch("/api/updatePlanInfo", {
        method: "POST",
        body: JSON.stringify(data),
      });
      return response.json();
    };
    postData();
    alert("Cập nhật thông tin thành công!");
  }


  //Hàm xóa plan sử dụng id lấy từ thuộc tính  plan_id của nút xóa
  const deletePlan = (e) => {
    e.preventDefault();
    setID(e.target.getAttribute("plan_id"))
    // Hỏi người dùng, nếu không muốn xóa thì thoát
    if (!confirm("Bạn muốn xóa gói này")) return;
    const id_data = { id: id }
    console.log(id)
    const postData = async () => {
      const res = await fetch("/api/deletePlan", {
        method: "POST",
        body: JSON.stringify(id_data)
      });
      return res.json();
    };
    postData();
    alert("Xóa gói thành công");
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
    const postData = async () => {
      const data = {
        name: name,
        description: description,
        price: price,
        service_id: service_id
      };
      console.log(id, name, description, price);
      const response = await fetch("/api/insertPlan", {
        method: "POST",
        body: JSON.stringify(data),
      });
      return response.json();
    };
    postData();
    alert("Cập nhật thông tin thành công!");
  }


  return (
    <AdminLayout>
      <div className="grid grid-cols-2 gap-4">
        <table className="bg-white">
          <thead>
            <tr>
              <th>Plan Name</th>
              <th>Price</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {planData?.map((plan) => (
              <tr key={plan.id}>
                <td>{plan.name}</td>
                <td>{plan.price}</td>
                <td>{plan.description}</td>
                <td>
                  {/*Hiện form sửa */}
                  <button
                    onClick={updatePlan}
                    // gán dữ liệu cho hàm updatePlan ở trên
                    id={plan.id}
                    name={plan.name}
                    price={plan.price}
                    description={plan.description}
                    className="rounded bg-blue-500 p-2 hover:bg-blue-700"
                  >Sửa
                  </button>
                  <button
                    onClick={deletePlan}
                    // gán dữ liệu id cho hàm xóa dữ liệu
                    plan_id={plan.id}
                    className="rounded bg-red-500 p-2 hover:bg-red-700"

                  >Xóa</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <form
          id="form"
          className="mt-4 hidden flex-col items-center gap-4 bg-sky-400 p-4"
          onSubmit={send_data_to_database}
        >
          <h1 >Chỉnh sửa thông tin gói dịch vụ</h1>
          <Input
            type="text"
            id="name-update"
            defaultValue={name}
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            type="number"
            id="price-update"
            defaultValue={price}
            placeholder="Price"
            onChange={(e) => setPrice(e.target.value)}
          />
          <Input
            type="text"
            id="desc-update"
            defaultValue={description}
            placeholder="Description"
            onChange={(e) => setDesc(e.target.value)}
          />
          <button
            className="w-fit rounded-md p-1 hover:bg-green-600"
            type="submit"
          >
            Lưu
          </button>
        </form>
      </div>
      <button onClick={hiddenOrAppearFormInsert} className="rounded bg-green-500 p-2 hover:bg-green-800 mt-2">
        Thêm
      </button>

      {/*form thêm gói dịch vụ*/}
      <form
        id="insert-form"
        className="mt-4 hidden flex-col items-center gap-4 bg-sky-400 p-4 "
        onSubmit={insertPlan}
      >
        <Input
          type="text"
          id="name-insert"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type="number"
          step="any"
          id="price-insert"
          placeholder="Price"
          onChange={(e) => setPrice(e.target.value)}
        />
        <Input
          type="text"
          id="desc-insert"
          placeholder="Description"
          onChange={(e) => setDesc(e.target.value)}
        />
        <Input
          type="number"
          id="service_id insert"
          placeholder="service_id"
          onChange={(e) => setService_id(e.target.value)}
        />
        <button
          className="w-fit rounded-md p-1 hover:bg-green-600"
          type="submit"
        >
          Thêm
        </button>
      </form>
      {/*}
      <table className="bg-white">
        <thead>
          <tr>
            <th>Plan Name</th>
            <th>Price</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {planData.map((plan) => (
            <tr key={plan.id}>
              <td>{plan.name}</td>
              <td>{plan.price}</td>
              <td>{plan.description}</td>
              <td>
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
          {*/}
    </AdminLayout>
  );
}
