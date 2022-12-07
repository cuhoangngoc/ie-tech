import Layout from "../../components/Layout/Layout";
import Link from "next/link";
import Sidebar from "../../components/Admin/Sidebar";
import { useAuth } from "../../hooks/auth";
const AdminLayout = ({ children }) => {
  const { user } = useAuth({ middleware: "auth" });

  return (
    <>
      {user?.is_admin === 1 ? (
        <div className="flex">
          <Sidebar />
          <div>
            <main className="p-8">{children}</main>
          </div>
        </div>
      ) : (
        <div className="">Bạn không có quyền truy cập vào trang này</div>
      )}
    </>
  );

  // During Pre-rendering (SSR or SSG) you tried to access a router method push, replace, back, which is not supported. You can only use these methods on the client side. one of the solutions is to use useEffect hook to redirect the user to the login page
  // return <Redirect to="/" />;
};

export default AdminLayout;
