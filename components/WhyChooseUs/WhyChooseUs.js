import { HiArrowLongRight } from "react-icons/hi2";

const WhyChooseUs = () => {
  const reasons = [
    {
      title: 'Product Design',
      description: 'Our product design service lets you prototype, test and validate your ideas.',
      imgLink: '#',
      learnMoreLink: '#'
    },

    {
      title: 'Development',
      description: 'Our product design service lets you prototype, test and validate your ideas.',
      imgLink: '#',
      learnMoreLink: '#'
    },

    {
      title: 'Data Analytics',
      description: 'Our product design service lets you prototype, test and validate your ideas.',
      imgLink: '#',
      learnMoreLink: '#'

    },

    {
      title: 'Cyber Security',
      description: 'Our product design service lets you prototype, test and validate your ideas.',
      imgLink: '#',
      learnMoreLink: '#'
    }
  ]

  return (
    <section id="WhyChooseUs" className="flex flex-col justify-center items-center py-12">
      <h1 className="mb-8 text-2xl md:text-3xl font-extrabold">Design the Concept of Your Business Idea Now</h1>

      <div className="flex flex-col md:flex-row items-center sm:mb-2">
        {reasons.map((reason, index) => (
          <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md md:mx-4 mb-4" key={index}>
            <a href="#">
              <img className="rounded-t-lg" src="" alt="" />
            </a>
            <div className="group p-4 rounded-lg hover:bg-sky-200 duration-75">

              <h5 className="mb-2 text-xl md:text-2xl font-bold text-sky-600 group-hover:text-white duration-75">
                {reason.title.toUpperCase()}
              </h5>

              <p className="mb-3 font-normal text-gray-700">{reason.description}</p>
              <a href="#" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                Read more
                <HiArrowLongRight className="ml-2 -mr-1 w-4 h-4" />
              </a>
            </div>
          </div>
        ))}
      </div>

    </section>
  )
}

export default WhyChooseUs