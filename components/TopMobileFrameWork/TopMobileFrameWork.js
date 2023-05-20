import Swiftic from '../../public/asset/swiftic.png';
import Xamarin from '../../public/asset/Xamarin.png';
import Flutter from '../../public/asset/Flutter.png';
import ReactNative from '../../public/asset/ReactNative.png';
import Link from 'next/link';
import Image from 'next/image';
const TopMobileFrameWork = () => (
  <div className="mx-auto bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-16 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-2xl lg:px-8 lg:py-20">
    <div className="mb-6 flex flex-col md:mb-8 lg:flex-row lg:justify-between">
      <h2 className="text-center font-sans text-3xl font-bold text-gray-900">
        Top Mobile Development Framework
      </h2>
    </div>
    <div className="row-gap-5 sm:row-gap-6 mb-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      <Link href="/" aria-label="View Item">
        <div className="relative transform overflow-hidden rounded shadow-lg transition duration-200 hover:-translate-y-2 hover:shadow-2xl">
          <Image className="h-56 w-full object-fill md:h-64 xl:h-80" src={Swiftic} alt="Swiftic" />
          <div className="absolute inset-0 bg-black bg-opacity-75 px-6 py-4 opacity-0 transition-opacity duration-200 hover:opacity-100">
            <p className="mb-4 text-lg font-bold text-gray-100">Swiftic</p>
            <p className="text-sm tracking-wide text-gray-300">
              Swiftic là giải pháp phần mềm Drag and Drop App Builder Software với chức năng và chi
              phí phù hợp cho các doanh nghiệp từ nhỏ và vừa (SMEs) tới các doanh nghiệp lớn. Phần
              mềm Swiftic được đánh giá cao bởi cả người dùng lẫn chuyên gia trong lĩnh vực
              Application Development Software.
            </p>
          </div>
        </div>
      </Link>
      <Link href="/" aria-label="View Item">
        <div className="relative transform overflow-hidden rounded shadow-lg transition duration-200 hover:-translate-y-2 hover:shadow-2xl">
          <Image className="h-56 w-full object-fill md:h-64 xl:h-80" src={Xamarin} alt="Xamarin" />
          <div className="absolute inset-0 bg-black bg-opacity-75 px-6 py-4 opacity-0 transition-opacity duration-200 hover:opacity-100">
            <p className="mb-4 text-lg font-bold text-gray-100">Xamarin</p>
            <p className="text-sm tracking-wide text-gray-300">
              Là 1 nền tảng lập trình ứng dụng di động cross-platform (có nghĩa là code một lúc có
              thể chạy trên được cả iOS lẫn Android), Xamarin có những đặc điểm riêng biệt, hiếm có
              so với các frameworks hiện tại trên thị trường khi mà khả năng native access và trải
              nghiệm người dùng native vẫn đang bị đặt nghi vấn.
            </p>
          </div>
        </div>
      </Link>
      <a href="" aria-label="View Item">
        <div className="relative transform overflow-hidden rounded shadow-lg transition duration-200 hover:-translate-y-2 hover:shadow-2xl">
          <Image className="h-56 w-full object-fill md:h-64 xl:h-80" src={Flutter} alt="Flutter" />
          <div className="absolute inset-0 bg-black bg-opacity-75 px-6 py-4 opacity-0 transition-opacity duration-200 hover:opacity-100">
            <p className="mb-4 text-lg font-bold text-gray-100">Flutter</p>
            <p className="text-sm tracking-wide text-gray-300">
              Flutter được phát triển nhằm giải quyết bài toán thường gặp trong mobile là Fast
              Development và Native Performance. Nếu như React Native chỉ đảm bảo Fast Development
              và code native thuần chỉ đảm bảo Native Performance thì Flutter làm được cả 2 điều
              trên.
            </p>
          </div>
        </div>
      </a>
      <Link href="/" aria-label="View Item">
        <div className="relative transform overflow-hidden rounded shadow-lg transition duration-200 hover:-translate-y-2 hover:shadow-2xl">
          <Image
            className="h-56 w-full object-fill md:h-64 xl:h-80"
            src={ReactNative}
            alt="ReactNative"
          />
          <div className="absolute inset-0 bg-black bg-opacity-75 px-6 py-4 opacity-0 transition-opacity duration-200 hover:opacity-100">
            <p className="mb-4 text-lg font-bold text-gray-100">ReactNative</p>
            <p className="text-sm tracking-wide text-gray-300">
              React Native là một framework do công ty công nghệ nổi tiếng Facebook phát triển nhằm
              mục đích giải quyết bài toán hiệu năng của Hybrid và bài toán chi phí khi mà phải viết
              nhiều loại ngôn ngữ native cho từng nền tảng di động.
            </p>
          </div>
        </div>
      </Link>
    </div>
  </div>
);

export default TopMobileFrameWork;
