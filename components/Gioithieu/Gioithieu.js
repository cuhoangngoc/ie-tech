import appMobile from '../../public/asset/appMobile.jpg'
const Gioithieu = () => (
  <section id="Home" className="flex flex-col md:flex-row justify-around px-8 py-12 items-center container mx-auto">
    {/* image */}
    <div className="flex w-full md:w-1/2">
      <img src={appMobile.src} alt="appMobile" className='object-scale-down rounded-lg shadow-lg' />
    </div>
    {/* text */}
    <div className="flex flex-col w-full md:w-1/2 p-8">
      <h1 className='text-4xl'>Ie-Solution {" "} <br className='sm:block hidden' />
        <span className='font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-blue-900 to-cyan-500'>
          Mobile development
        </span>
      </h1>
      <p className='mt-8 text-xl text-justify'>Phát triển ứng dụng dành cho thiết bị di động là quy trình mà ứng dụng dành cho thiết bị di động được phát triển cho thiết bị di động, chẳng hạn như trợ lý kỹ thuật số cá nhân, trợ lý kỹ thuật số doanh nghiệp hoặc điện thoại di động. Các ứng dụng phần mềm này được thiết kế để chạy trên các thiết bị di động, chẳng hạn như điện thoại thông minh hoặc máy tính bảng. </p>
    </div>

  </section>
)


export default Gioithieu