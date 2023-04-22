import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Head from "next/head";
import Logo from "../../public/asset/Logo-only.png";
import GlobalStyle from "../../pages/GlobalStyle";
import { useSelector } from "react-redux";
const AppLayout = ({ children }) => {
  const { isDark } = useSelector((state) => {
    return state.darklight;
  });
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" type="image/x-icon" href={Logo.src} />
        <title>IE Tech</title>
      </Head>
      {isDark ? <GlobalStyle /> : ""}
      <Navbar />
      <main className={isDark ? "text-white" : ""}>{children}</main>
      {/* <main>{children}</main> */}
      <Footer />
    </>
  );
};

export default AppLayout;
