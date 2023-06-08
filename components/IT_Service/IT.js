import { ImHtmlFive2 } from 'react-icons/im';
import { ImMobile } from 'react-icons/im';
import { ImDisplay } from 'react-icons/im';
import { ImFileText, ImStatsDots, ImSphere, ImPhone, ImMail } from 'react-icons/im';
import CS from '../Client_slider/cs';
import Plan_render from './plan_render';
import { useEffect, useState } from 'react';
import Link from 'next/link';
const IT = () => {
  const [dataResponse, setdataResponse] = useState([]);
  const [planRes, setPlanRes] = useState([]);
  useEffect(() => {
    async function getPageData() {
      //Lấy client api
      const apiUrlEndpoint = `${process.env.NEXT_PUBLIC_BASE_URL}/api/getdata`;
      //fetch dữ liệu client
      const response = await fetch(apiUrlEndpoint);
      const res = await response.json();
      setdataResponse(res);
      //Lấy plan api
      const planUrL = `${process.env.NEXT_PUBLIC_BASE_URL}/api/getPlanDataInIT`;
      const respone_1 = await fetch(planUrL);
      const res_1 = await respone_1.json();
      setPlanRes(res_1);
    }
    getPageData();
  }, []);
  planRes.forEach((item) => {
    item.descriptionArr = item.description.split(', ');
  });
  return (
    <>
      <div className="it relative bg-[url('http://wpdemo.archiwp.com/engitech/wp-content/uploads/sites/4/2019/12/bg-pheader.jpg')] ">
        <div className="flex p-8">
          <section className="container">
            <header className="my-20 text-6xl font-bold text-white">IT Services</header>
          </section>
        </div>
      </div>

      <div className="container mx-auto px-2 md:px-4">
        <div className="relative m-10 h-40">
          <section className="pt-10">
            <span className="font-semibold text-purple-800">&#47;&#47; OUR SERVICES</span>
            <h2 className="text-4xl font-semibold">
              Chúng tôi cung cấp {'\n'} nhiều loại dịch vụ IT
            </h2>
          </section>
        </div>
        <div className="ml-10 grid gap-10 p-4 md:grid-cols-1 lg:grid-cols-3">
          <section className="flex rounded-md border-2 border-transparent p-1 hover:border-black">
            <ImHtmlFive2 className="h-20 w-20 text-purple-800 hover:text-blue-500" />
            <div className="ml-4">
              <h5 className="font-bold">Web development</h5>
              <p>
                Chúng tôi có nhiều kĩ năng hơn là chỉ có kỹ năng code tốt. Kinh nghiệm của chúng tôi
                khiến chúng tôi nổi bật so với các công ty phát triển web khác.
              </p>
            </div>
          </section>
          <section className="flex rounded-md border-2 border-transparent p-1 hover:border-black">
            <ImMobile className="h-20 w-20  text-purple-800 hover:text-blue-500" />
            <div className="ml-4">
              <h5 className="font-bold">Mobile development</h5>
              <p>
                Tạo phần mềm doanh nghiệp phức tạp, đảm bảo tích hợp phần mềm đáng tin cậy, hiện đại
                hóa hệ thống cũ của bạn.
              </p>
            </div>
          </section>
          <section className="flex rounded-md border-2 border-transparent p-1 hover:border-black">
            <ImDisplay className="h-20 w-20  text-purple-800 hover:text-blue-500" />
            <div className="ml-4">
              <h5 className="font-bold">UI/UX Design</h5>
              <p>
                Xây dựng sản phẩm bạn cần đúng thời hạn với đội ngũ giàu kinh nghiệm sử dụng quy
                trình thiết kế rõ ràng và hiệu quả.
              </p>
            </div>
          </section>
          <section className="flex rounded-md border-2 border-transparent p-1 hover:border-black">
            <ImFileText className="h-20 w-20  text-purple-800 hover:text-blue-500" />
            <div className="ml-4">
              <h5 className="font-bold">QA {' & '} Testing</h5>
              <p>
                Liên hệ với các chuyên gia của chúng tôi để thực hiện kiểm tra và kiểm tra phần mềm
                của bạn một cách toàn diện, nhiều giai đoạn.
              </p>
            </div>
          </section>
          <section className="flex rounded-md border-2 border-transparent p-1 hover:border-black">
            <ImStatsDots className="h-20 w-20  text-purple-800 hover:text-blue-500" />
            <div className="ml-4">
              <h5 className="font-bold">IT Counsultancy</h5>
              <p>
                Hãy tin tưởng vào những bộ óc hàng đầu của chúng tôi để loại bỏ các điểm yếu trong
                quy trình làm việc, triển khai công nghệ mới và hợp nhất các danh mục ứng dụng.
              </p>
            </div>
          </section>
          <section className="flex rounded-md border-2 border-transparent p-1 hover:border-black">
            <ImSphere className="h-20 w-20  text-purple-800 hover:text-blue-500" />
            <div className="ml-4">
              <h5 className="font-bold">Dedicated Team</h5>
              <p>
                Trong thập kỷ qua, khách hàng của chúng tôi thành công bằng cách tận dụng quá trình
                xây dựng, dựa trên Intellectsoft.
              </p>
            </div>
          </section>
        </div>

        {/* Phần thứ 2 */}
        <div className="m-10 mt-60">
          <span className=" font-semibold text-purple-800">&#47;&#47; CHOOSE YOUR PLAN</span>
          <h2 className="text-4xl font-semibold">Các gói giá</h2>
          <p className="my-4 font-thin text-gray-500">
            Chúng tôi giúp các doanh nghiệp nâng cao giá trị của họ thông qua phát triển phần mềm
            tùy chỉnh, thiết kế sản phẩm, QA và các dịch vụ tư vấn.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {planRes.map((plan) => (
            <Plan_render key={plan.id} {...plan} />
          ))}
        </div>

        {/* Phần thứ 3 */}
        <div className=" mt-20 bg-[url('http://wpdemo.archiwp.com/engitech/wp-content/uploads/sites/4/2020/03/bg-cta-home2.jpg')]">
          <section className="grid place-items-center pt-20">
            <span className="text-2xl text-white">
              &#47;&#47; Drop us a line! We are here to answer your questions 24/7
            </span>
            <h2 className="mt-10 text-3xl font-bold text-white lg:text-7xl">
              Cần chuyên gia tư vấn?
            </h2>
            <div className="mt-10 mb-20 bg-blue-500 py-2 px-4 font-bold text-white">
              <Link href="http://localhost:3000/contact">LIÊN HỆ CHÚNG TÔI</Link>
            </div>
          </section>
        </div>

        {/* Phần thứ 4 */}
        <div className="mt-10">
          <CS {...dataResponse} />
        </div>
      </div>
    </>
  );
};

export default IT;
