const Cards = () => {

  const cardItems = [
    {
      title: "Sứ mệnh",
      content: "Nhiệm vụ của chúng tôi là giúp duy trì và hiện đại hóa cơ sở hạ tầng CNTT của bạn và giải quyết các vấn đề cụ thể về cơ sở hạ tầng khác nhau.",
      image: "https://images.pexels.com/photos/3184311/pexels-photo-3184311.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500",
    },
    {
      title: "Tầm nhìn",
      content: "Chúng tôi cố gắng tạo ra cơ hội, tăng trưởng và tác động địa phương ở mọi quốc gia trên thế giới.",
      image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
    },
    {
      title: "Triết lý",
      content: 'Triết lý mà chúng tôi nhắm đến là "Hiện đại, Sáng Tạo, Bền vững".',
      image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
    },
    {
      title: "Chiến lược",
      content: "Chúng tôi cung cấp các giải pháp phần mềm tùy chỉnh, thiết kế sản phẩm, kiểm thử và các dịch vụ tư vấn.",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
    }
  ];

  return (
    <div className="bg-white px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8 lg:py-20">
      <div className="flex flex-col mb-6 lg:justify-between lg:flex-row md:mb-8">
        <h2 className="max-w-lg mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:mb-6 group">
          <span className="inline-block mb-1 sm:mb-4">
            Sứ mệnh, Tầm nhìn, Triết lý và Chiến lược của chúng tôi:
          </span>
          <div className="h-1 ml-auto duration-300 origin-left transform bg-deep-purple-accent-400 scale-x-30 group-hover:scale-x-100" />
        </h2>
      </div>
      <div className="grid gap-6 row-gap-5 mb-8 lg:grid-cols-4 sm:row-gap-6 sm:grid-cols-2">
        {
          cardItems.map((item, index) => (
            <a href="/" key={index} aria-label="View Item">
              <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                <img
                  className="object-cover w-full h-56 md:h-64 xl:h-80"
                  src={item.image}
                  alt=""
                />
                <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                  <p className="mb-4 text-lg font-bold text-gray-100">{item.title}</p>
                  <p className="text-sm tracking-wide text-gray-300">{item.content}</p>
                </div>
              </div>
            </a>
          ))
        }
      </div>

    </div>
  )
}
export default Cards