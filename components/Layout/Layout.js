import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Head from "next/head";
import Logo from "../../public/asset/Logo-only.png";

const AppLayout = ({ children }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" type="image/x-icon" href={Logo.src} />
        <title>IE Tech</title>
      </Head>

      <Navbar />
      <main className="container mx-auto px-2 md:px-4">{children}</main>
      <Footer />
    </>
  );
};

export default AppLayout;
