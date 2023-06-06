import AdminLayout from '../../components/Admin/AdminLayout';
import { useState, useEffect } from 'react';
import Input from '../../components/Breeze/Input';
import style from '../../styles/admin.module.css';

export default function Admin() {
  const [planData, setplanData] = useState([]);
  const [id, setID] = useState(0);
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [description, setDesc] = useState('');
  const [service_id, setService_id] = useState(null);
  const [serviceData, setServiceData] = useState([]);
  const [search, setSearch] = useState("");
  const [statebackup, setStatebackup] = useState([]);

  // Dùng useEffect để lấy dữ liệu từ API
  useEffect(() => {
    async function fetchData() {
      const res = await fetch('/api/getPlanData');
      const data = await res.json();
      setStatebackup(data); // backup dữ liệu để search
      setplanData(data); // Lưu dữ liệu vào state
    }

    fetchData(); // Gọi hàm fetchData
  }, []);

  //XỬ lí sự kiện search
  useEffect(() => {
    setplanData(
      statebackup.filter((data) => {
        return (
          data.plan.toLowerCase().includes(search.toLowerCase()) ||
          data.description.toLowerCase().includes(search.toLowerCase())
        );
      })
    );
  }, [search]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch('/api/getServicesData');
      const data = await res.json();
      setServiceData(data); // Lưu dữ liệu vào state
    }
    fetchData(); // Gọi hàm fetchData
  }, []);

  //Hàm updatePlan có tác dụng lưu tạm thời các thay đổi trong form để hàm send_data_to_database gửi đến cơ sở dữ liệu
  function updatePlan(e) {
    e.preventDefault();
    // Lấy phần tử với id form và gán cho biến form
    const form = document.getElementById('form');

    setID(e.target.getAttribute('id'));
    // Lấy dữ liệu với thuộc tính name để set lại state name
    setName(e.target.getAttribute('name'));
    setPrice(e.target.getAttribute('price'));
    setDesc(e.target.getAttribute('description'));
    form.classList.toggle('hidden');
    form.classList.toggle('flex');
  }
  //Hàm send_data gửi các thay đổi tạm thời đến cơ sở dữ liệu biến chúng thành thay đổi vĩnh viễn
  function send_data_to_database() {
    if (price <= 0) {
      alert('Giá tiền phải lớn hơn 0');
      return;
    }

    const postData = async () => {
      const data = {
        id: id,
        name: name,
        description: description,
        price: price,
      };

      const response = await fetch('/api/updatePlanInfo', {
        method: 'POST',
        body: JSON.stringify(data),
      });
      return response.json();
    };
    postData();
    alert('Cập nhật thông tin thành công!');
    location.reload();
  }

  //Hàm xóa plan sử dụng id lấy từ thuộc tính  plan_id của nút xóa
  const deletePlan = async (e) => {
    e.preventDefault();
    const id = e.target.getAttribute('plan_id');
    // Hỏi người dùng, nếu không muốn xóa thì thoát
    if (!confirm('Bạn muốn xóa gói này')) return;

    const postData = async () => {
      const res = await fetch('/api/deletePlan', {
        method: 'POST',
        body: JSON.stringify({ id: id }),
      });
      return res.json();
    };
    postData();
    alert('Xóa gói thành công');
    location.reload();
  };

  //Hàm hiện và ẩn form insert
  function hiddenOrAppearFormInsert() {
    const form = document.getElementById('insert-form');
    form.classList.toggle('hidden');
    form.classList.toggle('flex');
  }
  //Hàm insert dữ liệu từ form insert
  function insertPlan(e) {
    e.preventDefault();

    if (price <= 0) {
      alert('Giá tiền phải lớn hơn 0');
      return;
    } else if (service_id == null) {
      alert('Hãy chọn dịch vụ');
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
      const response = await fetch('/api/insertPlan', {
        method: 'POST',
        body: JSON.stringify(data),
      });
    };
    postData();
    alert('Thêm plan thành công!');
    location.reload();
  }

  return (
    <AdminLayout>
      <h1 className={`${style.header}`}>Quản lý gói dịch vụ</h1>

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
          <button className="w-fit rounded-md p-1 hover:bg-blue-600" type="submit">
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
        <button className="w-fit rounded-md bg-blue-400 p-1 hover:bg-blue-600" type="submit">
          Thêm
        </button>
      </form>
    </AdminLayout>
  );
}
