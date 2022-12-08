import { FiArrowRight } from "react-icons/fi";

const WhyChooseUs = () => {
  const reasons = [
    {
      title: "Product Design",
      description:
        "Dịch vụ thiết kế sản phẩm của chúng tôi cho phép bạn tạo nguyên mẫu, thử nghiệm và xác thực ý tưởng của mình.",
      imgLink: "#",
      learnMoreLink: "#",
    },

    {
      title: "Development",
      description:
        "Dịch vụ thiết kế sản phẩm của chúng tôi cho phép bạn tạo nguyên mẫu, thử nghiệm và xác thực ý tưởng của mình.",
      imgLink: "#",
      learnMoreLink: "#",
    },

    {
      title: "Data Analytics",
      description:
        "Dịch vụ thiết kế sản phẩm của chúng tôi cho phép bạn tạo nguyên mẫu, thử nghiệm và xác thực ý tưởng của mình.",
      imgLink: "#",
      learnMoreLink: "#",
    },

    {
      title: "Cyber Security",
      description:
        "Dịch vụ thiết kế sản phẩm của chúng tôi cho phép bạn tạo nguyên mẫu, thử nghiệm và xác thực ý tưởng của mình.",
      imgLink: "#",
      learnMoreLink: "#",
    },
  ];

  return (
    <section
      id="WhyChooseUs"
      className="flex flex-col items-center justify-center py-12"
    >
      <h1 className="mb-8 text-2xl font-extrabold md:text-3xl">
        Thiết kế ý tưởng kinh doanh của bạn ngay bây giờ
      </h1>

      <div className="grid items-center sm:mb-2 md:grid-cols-2 xl:grid-cols-4">
        {reasons.map((reason, index) => (
          <div
            className="mb-4 max-w-sm rounded-lg border border-gray-200 bg-white shadow-md md:mx-4"
            key={index}
          >
            <a href="#">
              <img className="rounded-t-lg" src="" alt="" />
            </a>
            <div className="group rounded-lg p-4 duration-75 hover:bg-sky-200">
              <h5 className="mb-2 text-xl font-bold text-sky-600 duration-75 group-hover:text-white md:text-2xl">
                {reason.title.toUpperCase()}
              </h5>

              <p className="mb-3 font-normal text-gray-700">
                {reason.description}
              </p>
              <a
                href="#"
                className="inline-flex items-center rounded-lg bg-blue-700 py-2 px-3 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300"
              >
                Read more
                <FiArrowRight className="ml-2 -mr-1 h-4 w-4" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
