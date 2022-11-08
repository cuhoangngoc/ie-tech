import Swiftic from '../../public/asset/swiftic.png'
import Xamarin from '../../public/asset/Xamarin.png'
import Flutter from '../../public/asset/Flutter.png'
import ReactNative from '../../public/asset/ReactNative.png'
const TopMobileFrameWork = () => (
  <div className="bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8 lg:py-20">
    <div className="flex flex-col mb-6 lg:justify-between lg:flex-row md:mb-8">
      <h2 className="font-sans text-3xl font-bold text-gray-900 text-center">
        Top Mobile Development Framework
      </h2>
    </div>
    <div className="grid gap-6 row-gap-5 mb-8 lg:grid-cols-4 sm:row-gap-6 sm:grid-cols-2">
      <a href="/" aria-label="View Item">
        <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
          <img
            className="object-fill w-full h-56 md:h-64 xl:h-80"
            src={Swiftic.src}
            alt="Swiftic"
          />
          <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
            <p className="mb-4 text-lg font-bold text-gray-100">Swiftic</p>
            <p className="text-sm tracking-wide text-gray-300">

              Swiftic là giải pháp phần mềm Drag and Drop App Builder Software với chức năng và chi phí phù hợp cho các doanh nghiệp từ nhỏ và vừa (SMEs) tới các doanh nghiệp lớn. Phần mềm Swiftic được đánh giá cao bởi cả người dùng lẫn chuyên gia trong lĩnh vực Application Development Software.
            </p>
          </div>
        </div>
      </a>
      <a href="/" aria-label="View Item">
        <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
          <img
            className="object-fill w-full h-56 md:h-64 xl:h-80"
            src={Xamarin.src}
            alt="Xamarin"
          />
          <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
            <p className="mb-4 text-lg font-bold text-gray-100">
              Xamarin
            </p>
            <p className="text-sm tracking-wide text-gray-300">
              Là 1 nền tảng lập trình ứng dụng di động cross-platform (có nghĩa là code một lúc có thể chạy trên được cả iOS lẫn Android), Xamarin có những đặc điểm riêng biệt, hiếm có so với các frameworks hiện tại trên thị trường khi mà khả năng native access và trải nghiệm người dùng native vẫn đang bị đặt nghi vấn.
            </p>
          </div>
        </div>
      </a>
      <a href="" aria-label="View Item">
        <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
          <img
            className="object-fill w-full h-56 md:h-64 xl:h-80"
            src={Flutter.src}
            alt="Flutter"
          />
          <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
            <p className="mb-4 text-lg font-bold text-gray-100">Flutter</p>
            <p className="text-sm tracking-wide text-gray-300">
              Flutter được phát triển nhằm giải quyết bài toán thường gặp trong mobile là Fast Development và Native Performance. Nếu như React Native chỉ đảm bảo Fast Development và code native thuần chỉ đảm bảo Native Performance thì Flutter làm được cả 2 điều trên.
            </p>
          </div>
        </div>
      </a>
      <a href="/" aria-label="View Item">
        <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
          <img
            className="object-fill w-full h-56 md:h-64 xl:h-80"
            src={ReactNative.src}
            alt="ReactNative"
          />
          <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
            <p className="mb-4 text-lg font-bold text-gray-100">
              ReactNative
            </p>
            <p className="text-sm tracking-wide text-gray-300">
              React Native là một framework do công ty công nghệ nổi tiếng Facebook phát triển nhằm mục đích giải quyết bài toán hiệu năng của Hybrid và bài toán chi phí khi mà phải viết nhiều loại ngôn ngữ native cho từng nền tảng di động.
            </p>
          </div>
        </div>
      </a>
    </div>

  </div>
)

export default TopMobileFrameWork