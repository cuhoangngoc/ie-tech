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
      <p className='mt-8 text-xl text-justify'>Mobile app development is the act or process by which a mobile app is developed for mobile devices, such as personal digital assistants, enterprise digital assistants or mobile phones. These software applications are designed to run on mobile devices, such as a smartphone or tablet computer. </p>
    </div>

  </section>
)


export default Gioithieu