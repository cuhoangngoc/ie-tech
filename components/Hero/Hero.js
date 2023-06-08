import heroImg from '../../public/asset/hero-img.png';
import { en, vi } from '../../feature/translate/language';
import { useSelector } from 'react-redux';
import Image from 'next/image';

const Hero = () => {
  const { isEnglish } = useSelector((state) => {
    return state.language;
  });
  const { hero } = isEnglish ? en : vi;
  return (
    <section id="Home" className="flex flex-col items-center justify-around px-8 py-12 md:flex-row">
      {/* text */}
      <div className="flex w-full flex-col p-8 md:w-1/2">
        <h1 className="text-4xl">
          {hero.title} <br className="hidden sm:block" />
          <span className="bg-gradient-to-r from-blue-900 to-cyan-500 bg-clip-text text-4xl font-extrabold text-transparent md:text-7xl">
            {hero.titleTech}
          </span>
        </h1>
        <p className="mt-8 text-justify text-xl">{hero.description}</p>
      </div>

      {/* image */}
      <div className="flex w-full md:w-1/2">
        <Image src={heroImg} alt="hero" className="rounded-full object-scale-down shadow-lg" />
      </div>
    </section>
  );
};

export default Hero;
