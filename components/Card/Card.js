import nativeMobile from '../../public/asset/nativeMobile.jpg';
import crossPlatform from '../../public/asset/crossPlatform.jpg';
import PWA from '../../public/asset/PWA.png';
import Image from 'next/image';

const Card = () => (
  <section className="bg-white py-20">
    <div className="mx-auto flex max-w-7xl flex-col space-y-12 px-8 xl:px-12">
      <div className="relative">
        <h2 className="w-full text-center text-3xl font-bold sm:text-4xl md:text-5xl">
          {' '}
          Mobile application development
        </h2>
        <p className="intro mx-auto -mt-2 w-full py-8 text-center text-lg text-gray-700 sm:max-w-3xl">
          Thêm một số điểm nhấn đẹp mắt vào giao diện của bạn với các thiết kế, thành phần và mẫu
          mới nhất của chúng tôi. Chúng tôi đã tạo trải nghiệm người dùng đẹp mắt mà khách truy cập
          của bạn sẽ yêu thích.{' '}
        </p>
      </div>
      <div className="animated fadeIn mb-8 flex flex-col sm:flex-row">
        <div className="mb-8 flex items-center sm:order-last sm:w-1/2 md:w-5/12">
          <Image className="rounded-lg shadow-xl" src={nativeMobile} alt="nativeMobile" />
        </div>
        <div className="mt-5 mb-8 flex flex-col justify-center sm:w-1/2 sm:pr-16 md:mt-0 md:w-7/12">
          <p className="mb-2 text-left text-sm font-semibold uppercase leading-none text-indigo-600">
            Phát triển ứng dụng gốc{' '}
          </p>
          <h3 className="mt-2 text-2xl sm:text-left md:text-4xl">Native App development</h3>
          <p className="text mt-5 text-lg text-gray-700 md:text-left">
            là tạo ra ứng dụng độc lập cho mỗi nền tảng di động. Do đó, công ty cần phát triển một
            ứng dụng cho iOS và một ứng dụng khác cho Android. Sau đó các ứng dụng sẽ được tải lên
            các nền tảng như App Store hay Google play.{' '}
          </p>
        </div>
      </div>
      <div className="animated fadeIn mb-8 flex flex-col sm:flex-row">
        <div className="mb-8 flex items-center sm:w-1/2 md:w-5/12">
          <Image className="rounded-lg shadow-xl" src={crossPlatform} alt="crossPlatform" />
        </div>
        <div className="mt-5 mb-8 flex flex-col justify-center sm:w-1/2 sm:pl-16 md:mt-0 md:w-7/12">
          <p className="mb-2 text-left text-sm font-semibold uppercase leading-none text-indigo-600">
            Phát triển đa nền tảng{' '}
          </p>
          <h3 className="mt-2 text-2xl sm:text-left md:text-4xl">Cross-platform Mobile app</h3>
          <p className="text mt-5 text-lg text-gray-700 md:text-left">
            của các ứng dụng di động là việc tạo ra một codebase chung cho hai nền tảng, với việc
            dịch mã code thêm trên mỗi hệ điều hành thông qua một lớp trung gian.
          </p>
        </div>
      </div>
      <div className="animated fadeIn mb-8 flex flex-col sm:flex-row">
        <div className="mb-8 flex items-center sm:order-last sm:w-1/2 md:w-5/12">
          <Image className="rounded-lg shadow-xl" src={PWA} alt="PWA" />
        </div>
        <div className="mt-5 mb-8 flex flex-col justify-center sm:w-1/2 sm:pr-16 md:mt-0 md:w-7/12">
          <p className="mb-2 text-left text-sm font-semibold uppercase leading-none text-indigo-600">
            Ứng dụng web lũy tiến{' '}
          </p>
          <h3 className="mt-2 text-2xl sm:text-left md:text-4xl">Progressive Web App(PWA)</h3>
          <p className="text mt-5 text-lg text-gray-700 md:text-left">
            {' '}
            Tập hợp những ưu điểm tốt nhất của web di động và ứng dụng gốc.. Những lợi thế của PWA
            là:không cần trung gian (cửa hàng),Chi phí phát triển thấp hơn so với khi sử dụng các
            phương pháp cổ điển.
          </p>
        </div>
      </div>
    </div>
  </section>
);
export default Card;
