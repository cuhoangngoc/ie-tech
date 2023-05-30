import Link from 'next/link';
import Image from 'next/image';
import missionImage from '../../public/asset/pexels-photo-3184311.jpeg';
import visionImage from '../../public/asset/pexels-photo-3184338.jpeg';
import strategyImage from '../../public/asset/pexels-photo-3184360.jpeg';
import philosophyImage from '../../public/asset/pexels-photo-3184339.jpeg';
const Cards = () => {
  const cardItems = [
    {
      title: 'Sứ mệnh',
      content:
        'Nhiệm vụ của chúng tôi là giúp duy trì và hiện đại hóa cơ sở hạ tầng CNTT của bạn và giải quyết các vấn đề cụ thể về cơ sở hạ tầng khác nhau.',
      image: missionImage,
    },
    {
      title: 'Tầm nhìn',
      content:
        'Chúng tôi cố gắng tạo ra cơ hội, tăng trưởng và tác động địa phương ở mọi quốc gia trên thế giới.',
      image: visionImage,
    },
    {
      title: 'Triết lý',
      content: 'Triết lý mà chúng tôi nhắm đến là "Hiện đại, Sáng Tạo, Bền vững".',
      image: philosophyImage,
    },
    {
      title: 'Chiến lược',
      content:
        'Chúng tôi cung cấp các giải pháp phần mềm tùy chỉnh, thiết kế sản phẩm, kiểm thử và các dịch vụ tư vấn.',
      image: strategyImage,
    },
  ];

  return (
    <div className="mx-auto bg-white px-4 py-16 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-2xl lg:px-8 lg:py-20">
      <div className="mb-6 flex flex-col md:mb-8 lg:flex-row lg:justify-between">
        <h2 className="group mb-5 max-w-lg font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:mb-6">
          <span className="mb-1 inline-block sm:mb-4">
            Sứ mệnh, Tầm nhìn, Triết lý và Chiến lược của chúng tôi:
          </span>
          <div className="bg-deep-purple-accent-400 scale-x-30 ml-auto h-1 origin-left transform duration-300 group-hover:scale-x-100" />
        </h2>
      </div>
      <div className="row-gap-5 sm:row-gap-6 mb-8 grid justify-center gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {cardItems.map((item, index) => (
          <Link href="/" key={index} aria-label="View Item">
            <div className="relative h-[200px] w-[300px] transform overflow-hidden rounded shadow-lg transition duration-200 hover:-translate-y-2 hover:shadow-2xl">
              <Image className="object-cover" src={item.image} alt="" height={200} width={300} />
              <div className="absolute inset-0 bg-black bg-opacity-75 px-6 py-4 opacity-0 transition-opacity duration-200 hover:opacity-100">
                <p className="mb-4 text-lg font-bold text-gray-100">{item.title}</p>
                <p className="text-sm tracking-wide text-gray-300">{item.content}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Cards;
