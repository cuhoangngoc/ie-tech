import Head from "next/head";
import AboutUs from "../components/AboutUs/AboutUs";
import Stat from "../components/AboutUs/Stat";
import WhatWeDo from "../components/AboutUs/WhatWeDo";
import Cards from "../components/AboutUs/Cards";
import Team from "../components/AboutUs/Team";
import Layout from "../components/Layout/Layout";

export default function GioiThieu() {
  return (
    <Layout>
      <AboutUs />
      <Stat />
      <Cards />
      <WhatWeDo />
      <Team />
    </Layout>
  );
}
