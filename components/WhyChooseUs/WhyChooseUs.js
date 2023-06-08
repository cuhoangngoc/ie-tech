import { FiArrowRight } from 'react-icons/fi';
import { en, vi } from '../../feature/translate/language';
import { useSelector } from 'react-redux';
const WhyChooseUs = () => {
  const { isDark } = useSelector((state) => {
    return state.darklight;
  });
  const { isEnglish } = useSelector((state) => {
    return state.language;
  });
  const { whyChooseus } = isEnglish ? en : vi;
  const reasons = whyChooseus.reasons;
  return (
    <section id="WhyChooseUs" className="flex flex-col items-center justify-center py-12">
      <h1 className="mb-8 text-2xl font-extrabold md:text-3xl">{whyChooseus.title}</h1>

      <div className="grid items-center sm:mb-2 md:grid-cols-2 xl:grid-cols-4">
        {reasons.map((reason, index) => (
          <div
            className={
              isDark
                ? 'mb-4 max-w-sm rounded-lg border border-gray-200 bg-[#1b1b23] shadow-md md:mx-4'
                : 'mb-4 max-w-sm rounded-lg border border-gray-200 bg-white shadow-md md:mx-4'
            }
            key={index}
          >
            <div className="group rounded-lg p-4 duration-75 hover:bg-sky-200">
              <h5 className="mb-2 text-xl font-bold text-sky-600 duration-75 group-hover:text-white md:text-2xl">
                {reason.title.toUpperCase()}
              </h5>

              <p
                className={
                  isDark ? 'mb-3 font-normal text-white' : 'mb-3 font-normal text-gray-700'
                }
              >
                {reason.description}
              </p>
              <a
                href="#"
                className="inline-flex items-center rounded-lg bg-blue-700 py-2 px-3 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300"
              >
                Read more
                <FiArrowRight className="ml-2 -mr-1 h-4 w-4" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
