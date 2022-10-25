import heroImg from '../../asset/hero-img.png'

const Hero = () => (
  <section id="Home" className="flex flex-col md:flex-row justify-around px-8 py-12 items-center">

    {/* text */}
    <div className="flex flex-col w-full md:w-1/2 p-8">
      <h1 className='text-4xl'>Đối Tác Tin Cậy Của Bạn Về {" "} <br className='sm:block hidden' />
        <span className='font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-blue-900 to-cyan-500'>
          Công Nghệ
        </span>
      </h1>
      <p className='mt-8 text-xl text-justify'>IE Tech is the partner of choice for many of the world’s leading enterprises, SMEs and technology challengers. We help businesses elevate their value through custom software development, product design, QA and consultancy services.</p>
    </div>

    {/* image */}
    <div className="flex w-full md:w-1/2">
      <img src={heroImg.src} alt="hero" className='object-scale-down rounded-full shadow-lg' />
    </div>

  </section>
)


export default Hero