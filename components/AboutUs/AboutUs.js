import Image from 'next/image';
const AboutUs = () => (
  <section className="bg-white dark:bg-gray-900">
    <div className="container mx-auto bg-white px-6 py-10">
      <div className="lg:-mx-6 lg:flex lg:items-center">
        <img
          className="h-96 w-full rounded-lg object-cover object-center lg:mx-6 lg:h-[36rem] lg:w-1/2"
          src="https://img.freepik.com/free-vector/meet-our-team-concept-landing-page_52683-11236.jpg?w=2000"
          alt="aa"
        ></img>

        <div className="mt-8 lg:mt-0 lg:w-1/2 lg:px-6">
          <p className=" bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-6xl font-extrabold text-transparent">
            About Us
          </p>

          <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:w-96 xl:text-4xl">
            Đối tác của bạn về đổi mới phần mềm
          </h1>

          <p className="mt-6 text-xl text-gray-500 dark:text-gray-400">
            IEtech là đối tác được lựa chọn bởi nhiều doanh nghiệp hàng đầu thế giới, các doanh
            nghiệp vừa và nhỏ và những người thách thức công nghệ. Chúng tôi giúp các doanh nghiệp
            nâng cao giá trị của mình thông qua phát triển phần mềm tùy chỉnh, thiết kế sản phẩm, QA
            và các dịch vụ tư vấn.
          </p>
          <p className=" text-bold mt-6 text-xl font-bold text-gray-600 dark:text-gray-300">
            Chúng tôi có thể giúp duy trì và hiện đại hóa cơ sở hạ tầng CNTT của bạn và giải quyết
            các vấn đề khác nhau về cơ sở hạ tầng cụ thể mà một doanh nghiệp có thể gặp phải.
          </p>
        </div>
      </div>
    </div>
  </section>
);
export default AboutUs;
