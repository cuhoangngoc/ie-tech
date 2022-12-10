import Layout from "../../components/Layout/Layout";
import Link from "next/link";
import Head from "next/head";
import Logo from "../../public/asset/Logo-only.png";
import Sidebar from "../../components/Admin/Sidebar";
import { useAuth } from "../../hooks/auth";
const AdminLayout = ({ children }) => {
  const { user } = useAuth({ middleware: "auth" });

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" type="image/x-icon" href={Logo.src} />
        <title>IE Tech</title>
      </Head>

      {user?.is_admin === 1 ? (
        <div className="flex">
          <Sidebar />
          <main className="flex-grow p-8">{children}</main>
        </div>
      ) : (
        <div className="">Bạn không có quyền truy cập vào trang này</div>
      )}
    </>
  );
};

export default AdminLayout;
