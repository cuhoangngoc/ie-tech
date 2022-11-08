import AI from '../../public/asset/AI.jpg'
import Chatbot from '../../public/asset/Chatbot.jpg'
import ThucTeAo from '../../public/asset/ThucTeAo.jpg'
import IoT from '../../public/asset/IoT.jpg'
import ttDD from '../../public/asset/ttDD.jpg'
import blockchain from '../../public/asset/blockchain.jpg'
const Mobiletech = () => (
  <section className="bg-white dark:bg-gray-900">
    <div className="container px-6 py-10 mx-auto">
      <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">Xu hướng phát triển</h1>

      <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">
        <div className="lg:flex">
          <img className="object-cover w-full h-56 rounded-lg lg:w-64" src={AI.src} alt="AI">
          </img>
          <div className="flex flex-col justify-between py-6 lg:mx-6">
            <a href="#" className="text-xl font-semibold text-gray-800 hover:underline dark:text-white ">
              Ứng dụng dựa trên trí tuệ nhân tạo và machine learning.
            </a>

            <span className="text-sm text-gray-500 dark:text-gray-300">On: 20 October 2019</span>
          </div>
        </div>

        <div className="lg:flex">
          <img className="object-cover w-full h-56 rounded-lg lg:w-64" src={Chatbot.src} alt="Chatbot">
          </img>
          <div className="flex flex-col justify-between py-6 lg:mx-6">
            <a href="#" className="text-xl font-semibold text-gray-800 hover:underline dark:text-white ">
              Ứng dụng chatbot.
            </a>

            <span className="text-sm text-gray-500 dark:text-gray-300">On: 20 October 2019</span>
          </div>
        </div>

        <div className="lg:flex">
          <img className="object-cover w-full h-56 rounded-lg lg:w-64" src={ThucTeAo.src} alt="ThucTeAo">
          </img>
          <div className="flex flex-col justify-between py-6 lg:mx-6">
            <a href="#" className="text-xl font-semibold text-gray-800 hover:underline dark:text-white ">
              Công nghệ thực tế ảo và tương tác thực tế ảo.
            </a>

            <span className="text-sm text-gray-500 dark:text-gray-300">On: 25 November 2020</span>
          </div>
        </div>

        <div className="lg:flex">
          <img className="object-cover w-full h-56 rounded-lg lg:w-64" src={IoT.src} alt="IoT">
          </img>
          <div className="flex flex-col justify-between py-6 lg:mx-6">
            <a href="#" className="text-xl font-semibold text-gray-800 hover:underline dark:text-white ">
              Mạng lưới vạn vật kết nối Internet (IoT).
            </a>

            <span className="text-sm text-gray-500 dark:text-gray-300">On: 30 September 2020</span>
          </div>
        </div>

        <div className="lg:flex">
          <img className="object-cover w-full h-56 rounded-lg lg:w-64" src={ttDD.src} alt="ttDD">
          </img>
          <div className="flex flex-col justify-between py-6 lg:mx-6">
            <a href="#" className="text-xl font-semibold text-gray-800 hover:underline dark:text-white ">
              Thanh toán di động, chuyển khoản và lưu trữ tiền.
            </a>

            <span className="text-sm text-gray-500 dark:text-gray-300">On: 13 October 2019</span>
          </div>
        </div>

        <div className="lg:flex">
          <img className="object-cover w-full h-56 rounded-lg lg:w-64" src={blockchain.src} alt="blockchain">
          </img>
          <div className="flex flex-col justify-between py-6 lg:mx-6">
            <a href="#" className="text-xl font-semibold text-gray-800 hover:underline dark:text-white ">
              Các ứng dụng dựa trên công nghệ blockchain.
            </a>

            <span className="text-sm text-gray-500 dark:text-gray-300">On: 20 October 2019</span>
          </div>
        </div>
      </div>
    </div>
  </section>
)
export default Mobiletech