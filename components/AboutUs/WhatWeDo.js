import Image from 'next/image';
const WhatWeDo = () => {
  const items = [
    {
      title: 'PHP Website Development Services',
      content:
        'Ngôn ngữ PHP là từ viết tắt của Personal Home Page (hiện nay là Hypertext Preprocessor). Thuật ngữ này chỉ chuỗi ngôn ngữ kịch bản hay mã lệnh, phù hợp để phát triển cho các ứng dụng nằm trên máy chủ.',
      link: '#',
    },
    {
      title: 'React JSX',
      content:
        'ReactJS là một thư viện viết bằng javascript, dùng để xây dựng giao diện người dùng (User Interface – UI). React có thể được dùng để phát triển các ứng dụng web single-page, hoặc trên các thiết bị di động.',
      link: '#',
    },
    {
      title: 'JavaScript',
      content:
        'JavaScript là ngôn ngữ lập trình phổ biến dùng để tạo ra các trang web tương tác. Được tích hợp và nhúng vào HTML giúp website trở nên sống động hơn. JavaScript đóng vai trò như một phần của trang web, thực thi cho phép Client-Side Script từ phía người dùng cũng như phía máy chủ (Nodejs) tạo ra các trang web động.',
      link: '#',
    },
    {
      title: 'CSS',
      content:
        'CSS là chữ viết tắt của Cascading Style Sheets, nó là một ngôn ngữ được sử dụng để tìm và định dạng lại các phần tử được tạo ra bởi các ngôn ngữ đánh dấu (HTML). Nói ngắn gọn hơn là ngôn ngữ tạo phong cách cho trang web.',
    },
  ];

  return (
    <section className="rounded-lg bg-black ">
      <div className="container mx-auto flex w-full flex-col justify-center px-6 py-10">
        <h1 className="text-3xl font-semibold capitalize text-white dark:text-white lg:text-4xl xl:text-5xl">
          Những gì{' '}
          <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text font-semibold text-transparent">
            Chúng tôi
          </span>{' '}
          đang làm
        </h1>

        <div className="mt-10 lg:flex lg:items-center">
          <Image
            className="h-96 w-full rounded-lg object-cover object-center lg:w-[30rem]"
            src="https://viettourist.com/resources/images/Blog-Khachdoan/teamb1.png"
            alt=""
            width={1200}
            height={1200}
          />

          <div className="mt-8 lg:mt-0 lg:px-10">
            <div className="mt-8 grid grid-cols-1 gap-3 md:grid-cols-2 xl:mt-12 xl:gap-8">
              {items.map((item, index) => (
                <div className="space-y-3" key={index}>
                  <h1 className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-2xl font-semibold capitalize text-transparent ">
                    {item.title}
                  </h1>

                  <p className="text-gray-500 dark:text-gray-300">{item.content}</p>

                  <a
                    href={item.link}
                    className="-mx-1 inline-flex transform items-center text-sm capitalize text-blue-500 transition-colors duration-300 hover:text-blue-600 hover:underline dark:text-blue-400 dark:hover:text-blue-500"
                  >
                    <span className="mx-1">read more</span>
                    <svg
                      className="mx-1 h-4 w-4 rtl:-scale-x-100"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default WhatWeDo;
