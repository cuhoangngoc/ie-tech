import Head from "next/head";
import Image from "next/image";
import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs";
import TopMobileFrameWork from "../components/TopMobileFrameWork/TopMobileFrameWork";
import Gioithieu from "../components/Gioithieu/Gioithieu";
import Card from "../components/Card/Card";
import Mobiletech from "../components/Mobiletech/Mobiletech";
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
        <Gioithieu />
        <TopMobileFrameWork />
        <Card />
        <Mobiletech />
      </div>
      {/* footer */}
    </>
  );
}
