import heroImg from '../../public/asset/hero-img.png';
import Image from 'next/image';

const Hero = () => (
  <section id="Home" className="flex flex-col items-center justify-around px-8 py-12 md:flex-row">
    {/* text */}
    <div className="flex w-full flex-col p-8 md:w-1/2">
      <h1 className="text-4xl">
        Đối Tác Tin Cậy Của Bạn Về <br className="hidden sm:block" />
        <span className="bg-gradient-to-r from-blue-900 to-cyan-500 bg-clip-text text-8xl font-extrabold text-transparent">
          Công Nghệ
        </span>
      </h1>
      <p className="mt-8 text-justify text-xl">
        IE Tech là đối tác của nhiều doanh nghiệp hàng đầu thế giới, các doanh nghiệp vừa và nhỏ và
        những công nghệ cao lựa chọn. Chúng tôi giúp các doanh nghiệp nâng cao giá trị của họ thông
        qua phát triển phần mềm tùy chỉnh, thiết kế sản phẩm, QA và các dịch vụ tư vấn.
      </p>
    </div>

    {/* image */}
    <div className="flex w-full md:w-1/2">
      <Image src={heroImg} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" alt="hero" className="rounded-full object-scale-down shadow-lg" />
    </div>
  </section>
);

export default Hero;
