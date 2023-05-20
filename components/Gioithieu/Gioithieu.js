import appMobile from '../../public/asset/appMobile.jpg';
import Image from 'next/image';
const Gioithieu = () => (
  <section
    id="Home"
    className="container mx-auto flex flex-col items-center justify-around px-8 py-12 md:flex-row"
  >
    {/* image */}
    <div className="flex w-full md:w-1/2">
      <Image src={appMobile} alt="appMobile" className="rounded-lg object-scale-down shadow-lg" />
    </div>
    {/* text */}
    <div className="flex w-full flex-col p-8 md:w-1/2">
      <h1 className="text-4xl">
        Ie-Solution <br className="hidden sm:block" />
        <span className="bg-gradient-to-r from-blue-900 to-cyan-500 bg-clip-text text-8xl font-extrabold text-transparent">
          Mobile development
        </span>
      </h1>
      <p className="mt-8 text-justify text-xl">
        Phát triển ứng dụng dành cho thiết bị di động là quy trình mà ứng dụng dành cho thiết bị di
        động được phát triển cho thiết bị di động, chẳng hạn như trợ lý kỹ thuật số cá nhân, trợ lý
        kỹ thuật số doanh nghiệp hoặc điện thoại di động. Các ứng dụng phần mềm này được thiết kế để
        chạy trên các thiết bị di động, chẳng hạn như điện thoại thông minh hoặc máy tính bảng.{' '}
      </p>
    </div>
  </section>
);

export default Gioithieu;
