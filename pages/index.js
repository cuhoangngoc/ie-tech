import Head from "next/head";
import Image from "next/image";
import AboutCompany from "../components/AboutCompany/AboutCompany";
import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import WeCarry from "../components/WeCarry/WeCarry";
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs";
import Footer from "../components/Footer/Footer";
import List_user from "../components/Web_development/List_user";
import Our_clients from "../components/Web_development/Our_clients";
import Slider from "../components/Slider/Slider"

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
        <Slider/>
        <Hero />
        <List_user />
        <AboutCompany />
        <WhyChooseUs />
        <WeCarry />
        <Our_clients />
      </div >

      {/* footer */}
      < Footer />
    </>
  );
}
