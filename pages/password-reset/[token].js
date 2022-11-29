import ApplicationLogo from "../../components/Breeze/ApplicationLogo";
import AuthCard from "../../components/Breeze/AuthCard";
import AuthSessionStatus from "../../components/Breeze/AuthSessionStatus";
import Button from "../../components/Breeze/Button";
import GuestLayout from "../../components/Breeze/Layouts/GuestLayout";
import Input from "../../components/Breeze/Input";
import InputError from "../../components/Breeze/InputError";
import Label from "../../components/Breeze/Label";
import Link from "next/link";
import { useAuth } from "../../hooks/auth";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const PasswordReset = () => {
  const router = useRouter();

  const { resetPassword } = useAuth({ middleware: "guest" });

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [errors, setErrors] = useState([]);
  const [status, setStatus] = useState(null);

  const submitForm = (event) => {
    event.preventDefault();

    resetPassword({
      email,
      password,
      password_confirmation: passwordConfirmation,
      setErrors,
      setStatus,
    });
  };

  useEffect(() => {
    setEmail(router.query.email || "");
  }, [router.query.email]);

  return (
    <GuestLayout>
      <AuthCard
        logo={
          <Link href="/">
            <ApplicationLogo className="h-20 w-20 fill-current text-gray-500" />
          </Link>
        }
      >
        {/* Session Status */}
        <AuthSessionStatus className="mb-4" status={status} />

        <form onSubmit={submitForm}>
          {/* Email Address */}
          <div>
            <Label htmlFor="email">Email</Label>

            <Input
              id="email"
              type="email"
              value={email}
              className="mt-1 block w-full"
              onChange={(event) => setEmail(event.target.value)}
              required
              autoFocus
            />

            <InputError messages={errors.email} className="mt-2" />
          </div>

          {/* Password */}
          <div className="mt-4">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              value={password}
              className="mt-1 block w-full"
              onChange={(event) => setPassword(event.target.value)}
              required
            />

            <InputError messages={errors.password} className="mt-2" />
          </div>

          {/* Confirm Password */}
          <div className="mt-4">
            <Label htmlFor="passwordConfirmation">Confirm Password</Label>

            <Input
              id="passwordConfirmation"
              type="password"
              value={passwordConfirmation}
              className="mt-1 block w-full"
              onChange={(event) => setPasswordConfirmation(event.target.value)}
              required
            />

            <InputError
              messages={errors.password_confirmation}
              className="mt-2"
            />
          </div>

          <div className="mt-4 flex items-center justify-end">
            <Button>Reset Password</Button>
          </div>
        </form>
      </AuthCard>
    </GuestLayout>
  );
};

export default PasswordReset;
