import { BiBot } from "react-icons/bi";
import { ImHtmlFive2 } from "react-icons/im";
import { ImMobile } from "react-icons/im";
import { ImDisplay } from "react-icons/im";
import { ImFileText, ImStatsDots, ImSphere, ImPhone, ImMail } from "react-icons/im";
import CS from "../Client_slider/cs";
import Plan_render from "./plan_render";
import { useEffect, useState } from "react";
const IT = () => {
    const [dataResponse, setdataResponse] = useState([]);
    const [planRes, setPlanRes] = useState([]);
    useEffect(() => {
        async function getPageData() {
            //Lấy client api
            const apiUrlEndpoint = `http://localhost:3000/api/getdata`;
            //fetch dữ liệu client
            const response = await fetch(apiUrlEndpoint);
            const res = await response.json();
            setdataResponse(res);
            //Lấy plan api
            const planUrL = `http://localhost:3000/api/getPlanDataInIT`;
            const respone_1 = await fetch(planUrL);
            const res_1 = await respone_1.json();
            setPlanRes(res_1);
        }
        getPageData();

    }, []);
    planRes.forEach((item) => {
        item.descriptionArr = item.description.split(", ");
    });
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
                <section className="pt-10">
                    <span className="font-semibold text-purple-800">// OUR SERVICES</span>
                    <h2 className="text-4xl font-semibold">We Offer a Wide {'\n'} Variety of IT Services</h2>
                </section>
            </div>
            <div className="grid grid-cols-3 gap-10 p-4 ml-10">
                <section className="flex items-center">
                    <ImHtmlFive2 className="w-20 h-20 text-purple-800 hover:text-blue-500" />
                    <div className="ml-4">
                        <h5 className="font-bold">Web development</h5>
                        <p>We carry more than just good coding skills. Our experience makes us stand out from other web development.</p>
                    </div>
                </section>
                <section className="flex items-center">
                    <ImMobile className="w-20 h-20  text-purple-800 hover:text-blue-500" />
                    <div className="ml-4">
                        <h5 className="font-bold">Mobile development</h5>
                        <p>Create complex enterprise software, ensure reliable software integration, modernise your legacy system.</p>
                    </div>
                </section>
                <section className="flex items-center">
                    <ImDisplay className="w-20 h-20  text-purple-800 hover:text-blue-500" />
                    <div className="ml-4">
                        <h5 className="font-bold">UI/UX Design</h5>
                        <p>Build the product you need on time with an experienced team that uses a clear and effective design process.</p>
                    </div>
                </section>
                <section className="flex items-center">
                    <ImFileText className="w-20 h-20  text-purple-800 hover:text-blue-500" />
                    <div className="ml-4">
                        <h5 className="font-bold">QA {' & '} Testing</h5>
                        <p>Turn to our experts to perform comprehensive, multi-stage testing and auditing of your software.</p>
                    </div>
                </section>
                <section className="flex items-center">
                    <ImStatsDots className="w-20 h-20  text-purple-800 hover:text-blue-500" />
                    <div className="ml-4">
                        <h5 className="font-bold">IT Counsultancy</h5>
                        <p>Trust our top minds to eliminate workflow pain points, implement new tech, and consolidate app portfolios.</p>
                    </div>
                </section>
                <section className="flex items-center">
                    <ImSphere className="w-20 h-20  text-purple-800 hover:text-blue-500" />
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


            </div>

            <div className='grid md:grid-cols-3 gap-8'>
                {planRes.map((plan) => (
                    <Plan_render key={plan.id} {...plan} />
                ))}

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
                <CS {...dataResponse} />
            </div>


        </>
    )
}

export default IT