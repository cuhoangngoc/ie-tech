import ApplicationLogo from "../components/Breeze/ApplicationLogo";
import AuthCard from "../components/Breeze/AuthCard";
import Button from "../components/Breeze/Button";
import GuestLayout from "../components/Breeze/Layouts/GuestLayout";
import Link from "next/link";
import { useAuth } from "../hooks/auth";
import { useState } from "react";

const VerifyEmail = () => {
  const { logout, resendEmailVerification } = useAuth({
    middleware: "auth",
    redirectIfAuthenticated: "/dashboard",
  });

  const [status, setStatus] = useState(null);

  return (
    <GuestLayout>
      <AuthCard
        logo={
          <Link href="/">
            <a>
              <ApplicationLogo className="h-20 w-20 fill-current text-gray-500" />
            </a>
          </Link>
        }
      >
        <div className="mb-4 text-sm text-gray-600">
          Cảm ơn bạn đã đăng ký! Trước khi bắt đầu, bạn có thể xác minh địa chỉ
          email của mình bằng cách nhấp vào liên kết chúng tôi vừa gửi cho bạn
          qua email không? Nếu bạn không nhận được email, chúng tôi sẽ sẵn lòng
          gửi cho bạn một email khác.
        </div>

        {status === "verification-link-sent" && (
          <div className="mb-4 text-sm font-medium text-green-600">
            Một liên kết xác minh mới đã được gửi đến địa chỉ email mà bạn cung
            cấp.
          </div>
        )}

        <div className="mt-4 flex items-center justify-between">
          <Button onClick={() => resendEmailVerification({ setStatus })}>
            Gửi lại
          </Button>

          <button
            type="button"
            className="text-sm text-gray-600 underline hover:text-gray-900"
            onClick={logout}
          >
            Đăng xuất
          </button>
        </div>
      </AuthCard>
    </GuestLayout>
  );
};

export default VerifyEmail;
