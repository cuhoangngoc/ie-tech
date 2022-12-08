import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import {useState } from "react";
import style from "../components/Contact/Contact.module.css";
import {useAuth} from '../hooks/auth'


const payment = () => {
    const {user} = useAuth({middleware:'auth'})
    const [account_number, setaccount_number] = useState("");
    const [amount, setamount] = useState("");
    const [date, setdate] = useState("");
  
    function handleSubmit(e) {
      e.preventDefault();
      const postData = async () => {
        const data = {
          user_id: user?.id,
          account_number: account_number,
          amount: amount,
          date: date
        };
        console.log(data)
        const response = await fetch("/api/getpaymentofclient", {
          method: "POST",
          body: JSON.stringify(data),
        });
        return response.json();
      };
      postData().then(() => {
        alert("Chúng tôi đã ghi nhận yêu cầu nạp tiền của bạn! Vui lòng chờ 12h để chúng tôi tăng số dư!");
      });
      alert("Chúng tôi đã ghi nhận yêu cầu nạp tiền của bạn! Vui lòng chờ 12h để chúng tôi tăng số dư!");
    }

  return (
    <>
      <Navbar />
      <main className="container mx-auto mt-10 max-w-[600px]">
      <form onSubmit={handleSubmit} action="" className={`${style.form} sm:basis-1/2`}>
            <h1 className={style.headerCenter}>Gửi yêu cầu nạp tiền</h1>
            <input
              className={style.input}
              type="text"
              value={account_number}
              id="account_number"
              onChange={(e) => setaccount_number(e.target.value)}
              placeholder="Số tài khoản"
              required
            />
            <input
              className={style.input}
              type="text"
              name="amount"
              id="amount"
              value={amount}
              onChange={(e) => setamount(e.target.value)}
              placeholder="Số tiền"
              required
            />

            <input
              className={style.input}
              type="date"
              name="date"
              id="date"
              value={date}
              onChange={(e) => setdate(e.target.value)}
              placeholder="Ngày gửi tiền"
              required
            />

            <button
              className={`${style.button} bg-blue-700`}
              type="submit"
            >
              Gửi
            </button>
          </form>
      </main>

      <Footer />
    </>
  );
};

export default payment;