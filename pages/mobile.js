import TopMobileFrameWork from "../components/TopMobileFrameWork/TopMobileFrameWork";
import Gioithieu from "../components/Gioithieu/Gioithieu";
import Card from "../components/Card/Card";
import Mobiletech from "../components/Mobiletech/Mobiletech";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";


export default function Mobile() {
  return (
    <>
      <Navbar />

      <section>
        <Gioithieu />
        <TopMobileFrameWork />
        <Card />
        <Mobiletech />
      </section>

      <Footer />
    </>
  );
}