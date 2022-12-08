import nativeMobile from '../../public/asset/nativeMobile.jpg'
import crossPlatform from '../../public/asset/crossPlatform.jpg'
import PWA from '../../public/asset/PWA.png'

const Card = () => (
    <section className="py-20 bg-white">
        <div className="flex flex-col px-8 mx-auto space-y-12 max-w-7xl xl:px-12">
            <div className="relative">
                <h2 className="w-full text-3xl font-bold text-center sm:text-4xl md:text-5xl"> Mobile application development</h2>
                <p className="w-full py-8 mx-auto -mt-2 text-lg text-center text-gray-700 intro sm:max-w-3xl">Thêm một số điểm nhấn đẹp mắt vào giao diện của bạn với các thiết kế, thành phần và mẫu mới nhất của chúng tôi. Chúng tôi đã tạo trải nghiệm người dùng đẹp mắt mà khách truy cập của bạn sẽ yêu thích. </p>
            </div>
            <div className="flex flex-col mb-8 animated fadeIn sm:flex-row">
                <div className="flex items-center mb-8 sm:w-1/2 md:w-5/12 sm:order-last">
                    <img className="rounded-lg shadow-xl" src={nativeMobile.src} alt="nativeMobile">
                    </img>
                </div>
                <div className="flex flex-col justify-center mt-5 mb-8 md:mt-0 sm:w-1/2 md:w-7/12 sm:pr-16">
                    <p className="mb-2 text-sm font-semibold leading-none text-left text-indigo-600 uppercase">Phát triển ứng dụng gốc </p>
                    <h3 className="mt-2 text-2xl sm:text-left md:text-4xl">Native App development</h3>
                    <p className="mt-5 text-lg text-gray-700 text md:text-left">là tạo ra ứng dụng độc lập cho mỗi nền tảng di động. Do đó, công ty cần phát triển một ứng dụng cho iOS và một ứng dụng khác cho Android. Sau đó các ứng dụng sẽ được tải lên các nền tảng như App Store hay Google play. </p>
                </div>
            </div>
            <div className="flex flex-col mb-8 animated fadeIn sm:flex-row">
                <div className="flex items-center mb-8 sm:w-1/2 md:w-5/12">
                    <img className="rounded-lg shadow-xl" src={crossPlatform.src} alt="crossPlatform">
                    </img>
                </div>
                <div className="flex flex-col justify-center mt-5 mb-8 md:mt-0 sm:w-1/2 md:w-7/12 sm:pl-16">
                    <p className="mb-2 text-sm font-semibold leading-none text-left text-indigo-600 uppercase">Phát triển đa nền tảng </p>
                    <h3 className="mt-2 text-2xl sm:text-left md:text-4xl">Cross-platform Mobile app</h3>
                    <p className="mt-5 text-lg text-gray-700 text md:text-left">của các ứng dụng di động là việc tạo ra một codebase chung cho hai nền tảng, với việc dịch mã code thêm trên mỗi hệ điều hành thông qua một lớp trung gian.</p>
                </div>
            </div>
            <div className="flex flex-col mb-8 animated fadeIn sm:flex-row">
                <div className="flex items-center mb-8 sm:w-1/2 md:w-5/12 sm:order-last">
                    <img className="rounded-lg shadow-xl" src={PWA.src} alt="PWA">
                    </img>
                </div>
                <div className="flex flex-col justify-center mt-5 mb-8 md:mt-0 sm:w-1/2 md:w-7/12 sm:pr-16">
                    <p className="mb-2 text-sm font-semibold leading-none text-left text-indigo-600 uppercase">Ứng dụng web lũy tiến </p>
                    <h3 className="mt-2 text-2xl sm:text-left md:text-4xl">Progressive Web App(PWA)</h3>
                    <p className="mt-5 text-lg text-gray-700 text md:text-left"> Tập hợp những ưu điểm tốt nhất của web di động và ứng dụng gốc.. Những lợi thế của PWA là:không cần trung gian (cửa hàng),Chi phí phát triển thấp hơn so với khi sử dụng các phương pháp cổ điển.</p>
                </div>
            </div>

        </div>
    </section>
)
export default Card