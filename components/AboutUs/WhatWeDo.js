const WhatWeDo = () => {

  const items = [
    {
      title: "PHP Website Development Services",
      content: "Ngôn ngữ PHP là từ viết tắt của Personal Home Page (hiện nay là Hypertext Preprocessor). Thuật ngữ này chỉ chuỗi ngôn ngữ kịch bản hay mã lệnh, phù hợp để phát triển cho các ứng dụng nằm trên máy chủ.",
      link: "#"
    },
    {
      title: "React JSX",
      content: "ReactJS là một thư viện viết bằng javascript, dùng để xây dựng giao diện người dùng (User Interface – UI). React có thể được dùng để phát triển các ứng dụng web single-page, hoặc trên các thiết bị di động.",
      link: "#"
    },
    {
      title: "JavaScript",
      content: "JavaScript là ngôn ngữ lập trình phổ biến dùng để tạo ra các trang web tương tác. Được tích hợp và nhúng vào HTML giúp website trở nên sống động hơn. JavaScript đóng vai trò như một phần của trang web, thực thi cho phép Client-Side Script từ phía người dùng cũng như phía máy chủ (Nodejs) tạo ra các trang web động.",
      link: "#"
    },
    {
      title: "CSS",
      content: "CSS là chữ viết tắt của Cascading Style Sheets, nó là một ngôn ngữ được sử dụng để tìm và định dạng lại các phần tử được tạo ra bởi các ngôn ngữ đánh dấu (HTML). Nói ngắn gọn hơn là ngôn ngữ tạo phong cách cho trang web.",
    }

  ];

  return (
    <section className="bg-black rounded-lg ">
      <div className="container flex flex-col justify-center w-full px-6 py-10 mx-auto">

        <h1 className="text-3xl font-semibold text-white capitalize lg:text-4xl xl:text-5xl dark:text-white">
          Những gì <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Chúng tôi</span> đang làm
        </h1>

        <div className="mt-10 lg:flex lg:items-center">
          <img className="object-cover object-center w-full lg:w-[30rem] rounded-lg h-96" src="https://viettourist.com/resources/images/Blog-Khachdoan/teamb1.png" alt="" ></img>

          <div className="mt-8 lg:px-10 lg:mt-0">

            <div className="grid grid-cols-1 gap-3 mt-8 xl:mt-12 xl:gap-8 md:grid-cols-2">

              {
                items.map((item, index) => (
                  <div className="space-y-3" key={index}>
                    <h1 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 capitalize ">
                      {item.title}
                    </h1>

                    <p className="text-gray-500 dark:text-gray-300">
                      {item.content}
                    </p>

                    <a href={item.link} className="inline-flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                      <span className="mx-1">read more</span>
                      <svg className="w-4 h-4 mx-1 rtl:-scale-x-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </a>
                  </div>

                ))
              }
            </div>


          </div>
        </div>
      </div>
    </section>
  )
}
export default WhatWeDo