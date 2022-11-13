import Head from "next/head";
import Navbar from "../components/Navbar/Navbar";
import AboutUs from "../components/AboutUs/AboutUs";
import Stat from "../components/AboutUs/Stat";
import WhatWeDo from "../components/AboutUs/WhatWeDo";
import Cards from "../components/AboutUs/Cards";
import Team from "../components/AboutUs/Team";
import Footer from "../components/AboutUs/AU-Footer";

export default function GioiThieu() {
  return (
    <>
      <Head>
        <title>IE Solution</title>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </Head>
      <Navbar />
      {/* main */}
      <div className="container px-2 mx-auto md:px-4 font-sans">
        <AboutUs />
        <Stat />
        <Cards />
        <WhatWeDo />
        <Team />
      </div>
      <Footer />

    </>
  );
}
