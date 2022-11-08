import { BiBot } from "react-icons/bi";
import { ImHtmlFive2 } from "react-icons/im";
import {ImMobile} from "react-icons/im";
import { ImDisplay } from "react-icons/im";
import { ImFileText, ImStatsDots, ImSphere, ImPhone, ImMail } from "react-icons/im";

const IT = () => {
    return (
        <>
        <div className="it  relative bg-[url('http://wpdemo.archiwp.com/engitech/wp-content/uploads/sites/4/2019/12/bg-pheader.jpg')] ">
            <div className="flex p-8">
                <section>
                    
                    <header className="text-6xl text-white font-bold my-20">IT Services</header>

                </section>
            </div>
        </div>

        <div className="relative h-40 m-10">
            <section  className="pt-10">
                <span className="font-semibold text-purple-800">// OUR SERVICES</span>
                <h2 className="text-4xl font-semibold">We Offer a Wide {'\n'} Variety of IT Services</h2>
            </section>
        </div>
        <div className = "grid grid-cols-3 gap-10 p-4 ml-10">
            <section className="flex items-center">
                <ImHtmlFive2 className="w-20 h-20 text-purple-800 hover:text-blue-500"/>
                <div className="ml-4">
                <h5 className="font-bold">Web development</h5>
                <p>We carry more than just good coding skills. Our experience makes us stand out from other web development.</p>
                </div>
            </section>
            <section className="flex items-center">
                <ImMobile className="w-20 h-20  text-purple-800 hover:text-blue-500"/>
                <div className="ml-4">
                    <h5 className="font-bold">Mobile development</h5>
                    <p>Create complex enterprise software, ensure reliable software integration, modernise your legacy system.</p>
                </div>
            </section>
            <section className="flex items-center">
                <ImDisplay className="w-20 h-20  text-purple-800 hover:text-blue-500"/>
                <div className="ml-4">
                    <h5 className="font-bold">UI/UX Design</h5>
                    <p>Build the product you need on time with an experienced team that uses a clear and effective design process.</p>
                </div>
            </section>
            <section className="flex items-center">
                <ImFileText className="w-20 h-20  text-purple-800 hover:text-blue-500"/>
                <div className="ml-4">
                    <h5 className="font-bold">QA {' & '} Testing</h5>
                    <p>Turn to our experts to perform comprehensive, multi-stage testing and auditing of your software.</p>
                </div>
            </section>
            <section className="flex items-center">
                <ImStatsDots className="w-20 h-20  text-purple-800 hover:text-blue-500"/>
                <div className="ml-4">
                <h5 className="font-bold">IT Counsultancy</h5>
                <p>Trust our top minds to eliminate workflow pain points, implement new tech, and consolidate app portfolios.</p>
                </div>
            </section>
            <section className="flex items-center">
                <ImSphere className="w-20 h-20  text-purple-800 hover:text-blue-500"/>
                <div className="ml-4">
                <h5 className="font-bold">Dedicated Team</h5>
                <p>Over the past decade, our customers succeeded by leveraging Intellectsoft’s process of building, motivating.</p>
                </div>
            </section>
        </div>

        
        {/* Phần thứ 2 */}
        <div className="m-10 mt-60" >
            <span className=" text-purple-800 font-semibold">// CHOOSE YOUR PLAN</span>
            <h2 className="text-4xl font-semibold">Flexible Pricing Plans</h2>
            <p className="font-thin my-4 text-gray-500" >We help businesses elevate their value through custom software development {'\n'}, product design, QA and consultancy services.</p>
            
            
            <div className="grid  grid-cols-1 lg:grid-cols-3 gap-10 content-center mt-20">
                <section className="border-2 border-slate-300 p-20 bg-inherit">
                    <h4 className="text-3xl font-semibold">Basic Plan</h4>
                    <h2 className="text-5xl font-bold text-blue-500">$129.99</h2>
                    <span className="text-gray-400 ">Monthly Package</span>
                    <ul className="mt-10 space-y-5 text-2xl ">
                        <li>Web Counsulting</li>
                        <li>24/7 System Monitoring</li>
                        <li>Machine and Deep Learning</li>
                        <li className="text-gray-400">Data Quality Management</li>
                        <li className="text-gray-400">Security Management</li>
                    </ul>
                    <button className="bg-blue-500 text-white font-bold py-2 px-4 mt-10">Choose Plan</button>
                </section>
                <section className="border-2 border-slate-300 p-20" >
                    <h4 className="text-3xl font-semibold">Economy Plan</h4>
                    <h2 className="text-5xl font-bold text-blue-500">$159.99</h2>
                    <span className="text-gray-400">Monthly Package</span>
                    <ul className="mt-10 space-y-5 text-2xl">
                        <li>Web Counsulting</li>
                        <li>24/7 System Monitoring</li>
                        <li>Machine and Deep Learning</li>
                        <li>Data Quality Management</li>
                        <li className="text-gray-400">Security Management</li>
                    </ul>
                    <button className="bg-blue-500 text-white font-bold py-2 px-4 mt-10">Choose Plan</button>
                </section >
                <section className="border-2 border-slate-300 p-20">
                    <h4 className="text-3xl font-semibold">Premium Plan</h4>
                    <h2 className="text-5xl font-bold text-blue-500">$189.99</h2>
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
                <span className=" text-purple-800 font-semibold">// OUR CLIENTS</span>
                <h2 className="text-4xl font-bold">We are Trusted 15+ Countries Worldwide</h2>
            </section>
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-20 place-items-center m-10">
                <section className="p-20 border-2 border-slate-300 bg-white shadow-lg">
                    <h4 className="text-2xl font-semibold">Moonkle LTD</h4>
                    <p className="mt-3 text-slate-500">"Very well thought out and articulate communication. Clear milestones, deadlines and fast work. Patience. Infinite patience. No shortcuts. Even if the client is being careless. The best part...always solving problems with great original ideas!."</p>
                </section>
                <section className="p-20 border-2 border-slate-300 bg-white shadow-lg">
                    <h4 className="text-2xl font-semibold">SoftTech</h4>
                    <p className="mt-3 text-slate-500">"Patience. Infinite patience. No shortcuts. Very well thought out and articulate communication. Clear milestones, deadlines and fast work. Even if the client is being careless. The best part...always solving problems with great original ideas!."</p>
                </section>
            </section>
        </div>

        {/* Phần thứ 5 */}
        <div className="mt-60">
            <section className="bg-indigo-900 grid place-items-center pb-20">
            <div className='flex md:w-1/5 md:justify-center items-center cursor-pointer hover:animate-bounce'>
                <BiBot className="w-8 h-8 text-blue-500" />
                <span className="ml-2 py-4 text-white">ietech</span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-40 text-white text-center mt-10">
                <div className="grid place-items-center">
                    <ImSphere className="w-8 h-8"/>
                    <p className="mt-5">411 University St, Seattle, USA</p>
                    <h6 className="text-gray-400">Our Address</h6>
                </div>
                <div className="grid place-items-center">
                    <ImMail className="w-8 h-8"/>
                    <p className="mt-5">contact@oceanthemes.net</p>
                    <h6 className="text-gray-400">Our Email</h6>
                </div>
                <div className="grid place-items-center">
                    <ImPhone className="w-8 h-8"/>
                    <p className="mt-5">+1 -800-456-478-23</p>
                    <h6 className="text-gray-400">Our Phone</h6>
                </div>
            </div>
            
            </section>
        </div>
        </>
    )
}

export default IT