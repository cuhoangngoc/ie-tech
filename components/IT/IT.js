import { BiBot } from "react-icons/bi";

const IT = () => {
    return (
        <>
        <div className="it bg-lime-200 relative ">
            <div className="flex flex-col w-full md:w-1/2 p-8">
                <section>
                <header className="text-6xl bg-lime-200">IT Services</header>

                </section>
            </div>
        </div>

        <div className="relative h-40 m-10">
            <section  className="pt-10">
                <h2 className="text-4xl font-semibold">We Offer a Wide {'\n'} Variety of IT Services</h2>
            </section>
        </div>
        <div className = "grid grid-cols-3 gap-10 p-4 ml-10">
            <section>
                <h5 className="font-bold">Web development</h5>
                <p>We carry more than just good coding skills. Our experience makes us stand out from other web development.</p>
            </section>
            <section>
                <h5 className="font-bold">Mobile development</h5>
                <p>Create complex enterprise software, ensure reliable software integration, modernise your legacy system.</p>
            </section>
            <section>
                <h5 className="font-bold">UI/UX Design</h5>
                <p>Build the product you need on time with an experienced team that uses a clear and effective design process.</p>
            </section>
            <section>
                <h5 className="font-bold">QA {' & '} Testing</h5>
                <p>Turn to our experts to perform comprehensive, multi-stage testing and auditing of your software.</p>
            </section>
            <section>
                <h5 className="font-bold">IT Counsultancy</h5>
                <p>Trust our top minds to eliminate workflow pain points, implement new tech, and consolidate app portfolios.</p>
            </section>
            <section>
                <h5 className="font-bold">Dedicated Team</h5>
                <p>Over the past decade, our customers succeeded by leveraging Intellectsoft’s process of building, motivating.</p>
            </section>
        </div>

        
        {/* Phần thứ 2 */}
        <div className="m-10 mt-60">
            <h2 className="text-4xl font-semibold">Flexible Pricing Plans</h2>
            <p className="font-thin my-4 text-gray-500" >We help businesses elevate their value through custom software development {'\n'}, product design, QA and consultancy services.</p>
            
            
            <div className="grid  grid-cols-1 lg:grid-cols-3 gap-10 content-center mt-20">
                <section className="border-2 border-slate-300 p-20 bg-inherit hover:bg-violet-300">
                    <h4 className="text-3xl">Basic Plan</h4>
                    <h2 className="text-5xl">$129.99</h2>
                    <span className="text-gray-400 ">Monthly Package</span>
                    <ul className="mt-10 space-y-5 text-2xl ">
                        <li>Web Counsulting</li>
                        <li>24/7 System Monitoring</li>
                        <li>Machine and Deep Learning</li>
                        <li>Data Quality Management</li>
                        <li>Security Management</li>
                    </ul>
                    <button className="bg-blue-500 text-white font-bold py-2 px-4 mt-10">Choose Plan</button>
                </section>
                <section className="border-2 border-slate-300 p-20" >
                    <h4 className="text-3xl">Economy Plan</h4>
                    <h2 className="text-5xl">$159.99</h2>
                    <span className="text-gray-400">Monthly Package</span>
                    <ul className="mt-10 space-y-5 text-2xl">
                        <li>Web Counsulting</li>
                        <li>24/7 System Monitoring</li>
                        <li>Machine and Deep Learning</li>
                        <li>Data Quality Management</li>
                        <li>Security Management</li>
                    </ul>
                    <button className="bg-blue-500 text-white font-bold py-2 px-4 mt-10">Choose Plan</button>
                </section >
                <section className="border-2 border-slate-300 p-20">
                    <h4 className="text-3xl">Premium Plan</h4>
                    <h2 className="text-5xl">$189.99</h2>
                    <span className="text-gray-400">Monthly Package</span>
                    <ul className="mt-10 space-y-5 text-2xl">
                        <li>Web Counsulting</li>
                        <li>24/7 System Monitoring</li>
                        <li>Machine and Deep Learning</li>
                        <li>Data Quality Management</li>
                        <li>Security Management</li>
                    </ul>
                    <button className="bg-blue-500 text-white font-bold py-2 px-4 mt-10">Choose Plan</button>
                </section>
            </div>
        </div>

        {/* Phần thứ 3 */}
        <div className=" mt-60 bg-[url('http://wpdemo.archiwp.com/engitech/wp-content/uploads/sites/4/2020/03/bg-cta-home2.jpg')]">
            <section className="grid place-items-center pt-20">
                <span className="text-white text-2xl">// Drop us a line! We are here to answer your questions 24/7</span>
                <h2 className="text-3xl lg:text-7xl font-bold text-white mt-10">NEED A CONSULTATION?</h2>
                <button className="bg-blue-500 text-white font-bold py-2 px-4 mt-10 mb-40">CONTACT US</button>
            </section>
        </div>

        {/* Phần thứ 4 */}
        <div className="mt-60">
            <section className="grid place-items-center">
                <span>// OUR CLIENTS</span>
                <h2>We are Trusted 15+ Countries Worldwide</h2>
            </section>
        </div>

        {/* Phần thứ 5 */}
        <div className="mt-60">
            <section className="bg-indigo-900 grid place-items-center">
            <div className='flex md:w-1/5 md:justify-center items-center cursor-pointer hover:animate-bounce'>
                <BiBot className="w-8 h-8 text-blue-500" />
                <span className="ml-2 py-4 text-white">ietech</span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-40 text-white text-center">
                <div>
                    <p>411 University St, Seattle, USA</p>
                    <h6 className="text-gray-400">Our Address</h6>
                </div>
                <div>
                    <p>contact@oceanthemes.net</p>
                    <h6 className="text-gray-400">Our Email</h6>
                </div>
                <div>
                    <p>+1 -800-456-478-23</p>
                    <h6 className="text-gray-400">Our Phone</h6>
                </div>
            </div>
            
            </section>
        </div>
        </>
    )
}

export default IT