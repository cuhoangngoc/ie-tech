import Head from "next/head";
import Image from "next/image";
import AboutCompany from "../components/AboutCompany/AboutCompany";
import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import WeCarry from "../components/WeCarry/WeCarry";
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs";
<<<<<<< HEAD
import TopMobileFrameWork from "../components/TopMobileFrameWork/TopMobileFrameWork";
import Gioithieu from "../components/Gioithieu/Gioithieu";
import Card from "../components/Card/Card";
import Mobiletech from "../components/Mobiletech/Mobiletech";
=======
import Footer from "../components/Footer/Footer";
import List_user from "../components/Web_development/List_user";
import Our_clients from "../components/Web_development/Our_clients";

>>>>>>> 7bff036d567612f42468f6f592b1209afd814983
export default function Home() {
  return (
    <>
      <Head>
        <title>IE Solution</title>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </Head>

      <Navbar />

      {/* main */}
      <div className="container mx-auto px-2 md:px-4">
<<<<<<< HEAD
        <Gioithieu />
        <TopMobileFrameWork />
        <Card />
        <Mobiletech />
=======
        <Hero/>
        <List_user/>
        <AboutCompany/>
        <WhyChooseUs/>
        <WeCarry/>
        <Our_clients/>
>>>>>>> 7bff036d567612f42468f6f592b1209afd814983
      </div>
      
      {/* footer */}
      <Footer/>
    </>
  );
}
