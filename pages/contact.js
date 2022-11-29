import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import {
  BsFillTelephoneFill,
  BsEnvelopeFill,
  BsFillHouseDoorFill,
} from "react-icons/bs";
import { cloneElement } from "react";
import style from "../components/Contact/Contact.module.css";

const contact = () => {
  const contactInfo = [
    {
      icon: <BsFillTelephoneFill size={30} />,
      title: "Điện thoại",
      href: "tel:0123456789",
      content: "0123456789",
    },
    {
      icon: <BsEnvelopeFill size={30} />,
      title: "Email",
      href: "mailto:info@uit.edu.vn",
      content: "info@uit.edu.vn",
    },
    {
      icon: <BsFillHouseDoorFill size={30} />,
      title: "Địa chỉ",
      href: "https://www.google.com/maps/place/Tr%C6%B0%E1%BB%9Dng+%C4%90%E1%BA%A1i+h%E1%BB%8Dc+C%C3%B4ng+ngh%E1%BB%87+Th%C3%B4ng+tin+-+%C4%90HQG+TP.HCM/@10.8700142,106.8008654,17z/data=!3m1!4b1!4m6!3m5!1s0x317527587e9ad5bf:0xafa66f9c8be3c91!8m2!3d10.8700089!4d106.8030541!16s%2Fm%2F02qqlmm?hl=vi",
      content: "Khu phố 6, P.Linh Trung, Tp.Thủ Đức, Tp.Hồ Chí Minh",
    },
  ];

  return (
    <>
      <Navbar />

      <main className="container mx-auto mt-10">
        <section className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="sm:basis-1/2">
            <span>// Chi tiết liên hệ</span>
            <h1 className="text-4xl">Liên Hệ</h1>
            <p>
              Give us a call or drop by anytime, we endeavour to answer all
              enquiries within 24 hours on business days. We will be happy to
              answer your questions.
            </p>

            <div>
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="group my-2 flex items-center gap-4 rounded-lg p-2 duration-300 hover:shadow-xl hover:ring-1 hover:ring-black"
                >
                  {/* dùng cloneElement để copy icon và add thêm class */}
                  {cloneElement(item.icon, {
                    className:
                      item.icon.props.className +
                      " group-hover:text-sky-500 duration-300",
                  })}
                  <div className="w-full">
                    <h2 className="text-xl">{item.title}</h2>
                    <a
                      href={item.href}
                      className="text-blue-500 hover:underline"
                    >
                      {item.content}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <form action="" className={`${style.form} sm:basis-1/2`}>
            <h1 className={style.headerCenter}>Gửi thông điệp của bạn</h1>

            <input
              className={style.input}
              type="text"
              name="name"
              placeholder="Tên"
              required
            />

            <input
              className={style.input}
              type="email"
              name="email"
              placeholder="Email"
              required
            />

            <textarea
              className={style.input}
              name="content"
              id="content"
              placeholder="Nội dung..."
              rows="10"
            ></textarea>

            <button className={`${style.button} bg-blue-700`} type="submit">
              Gửi
            </button>
          </form>
        </section>

        <section className="mt-10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.2311711962097!2d106.80086541485065!3d10.870014160431545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317527587e9ad5bf%3A0xafa66f9c8be3c91!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBDw7RuZyBuZ2jhu4cgVGjDtG5nIHRpbiAtIMSQSFFHIFRQLkhDTQ!5e0!3m2!1svi!2s!4v1668786462993!5m2!1svi!2s"
            className="h-96 w-full border-none"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default contact;
