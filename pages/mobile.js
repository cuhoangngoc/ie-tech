import TopMobileFrameWork from "../components/TopMobileFrameWork/TopMobileFrameWork";
import Gioithieu from "../components/Gioithieu/Gioithieu";
import Card from "../components/Card/Card";
import Mobiletech from "../components/Mobiletech/Mobiletech";
import Layout from "../components/Layout/Layout";

export default function Mobile() {
  return (
    <Layout>
      <section>
        <Gioithieu />
        <TopMobileFrameWork />
        <Card />
        <Mobiletech />
      </section>
    </Layout>
  );
}
