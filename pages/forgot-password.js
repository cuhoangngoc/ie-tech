import ApplicationLogo from "../components/Breeze/ApplicationLogo";
import AuthCard from "../components/Breeze/AuthCard";
import AuthSessionStatus from "../components/Breeze/AuthSessionStatus";
import Button from "../components/Breeze/Button";
import GuestLayout from "../components/Breeze/Layouts/GuestLayout";
import Input from "../components/Breeze/Input";
import InputError from "../components/Breeze/InputError";
import Label from "../components/Breeze/Label";
import Link from "next/link";
import { useAuth } from "../hooks/auth";
import { useState } from "react";

const ForgotPassword = () => {
  const { forgotPassword } = useAuth({ middleware: "guest" });

  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState([]);
  const [status, setStatus] = useState(null);

  const submitForm = (event) => {
    event.preventDefault();

    forgotPassword({ email, setErrors, setStatus });
  };

  return (
    <GuestLayout>
      <AuthCard
        logo={
          <Link href="/">
            <ApplicationLogo className="h-20 w-20 fill-current text-gray-500" />
          </Link>
        }
      >
        <div className="mb-4 text-sm text-gray-600">
          Forgot your password? No problem. Just let us know your email address
          and we will email you a password reset link that will allow you to
          choose a new one.
        </div>

        {/* Session Status */}
        <AuthSessionStatus className="mb-4" status={status} />

        <form onSubmit={submitForm}>
          {/* Email Address */}
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              name="email"
              value={email}
              className="mt-1 block w-full border p-2"
              onChange={(event) => setEmail(event.target.value)}
              required
              autoFocus
            />

            <InputError messages={errors.email} className="mt-2" />
          </div>

          <div className="mt-4 flex items-center justify-end">
            <Button>Email Password Reset Link</Button>
          </div>
        </form>
      </AuthCard>
    </GuestLayout>
  );
};

export default ForgotPassword;
