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
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Layout from "../components/Layout/Layout";

const Login = () => {
  const router = useRouter();
  const { login } = useAuth({
    middleware: "guest",
    redirectIfAuthenticated: "/",
  });

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [shouldRemember, setShouldRemember] = useState(false);
  const [errors, setErrors] = useState([]);
  const [status, setStatus] = useState(null);

  useEffect(() => {
    if (router.query.reset?.length > 0 && errors.length === 0) {
      setStatus(atob(router.query.reset));
    } else {
      setStatus(null);
    }
  });

  const submitForm = async (event) => {
    event.preventDefault();

    login({
      email,
      password,
      remember: shouldRemember,
      setErrors,
      setStatus,
    });
  };

  return (
    <Layout>
      <AuthCard
        logo={
          <Link href="/">
            <a>
              <ApplicationLogo className="h-20 w-20 fill-current text-gray-500" />
            </a>
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
              className="mt-1 block w-full border p-2"
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
              className="mt-1 block w-full border p-2"
              onChange={(event) => setPassword(event.target.value)}
              required
              autoComplete="current-password"
            />

            <InputError messages={errors.password} className="mt-2" />
          </div>

          {/* Remember Me */}
          <div className="mt-4 block">
            <label htmlFor="remember_me" className="inline-flex items-center">
              <input
                id="remember_me"
                type="checkbox"
                name="remember"
                className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                onChange={(event) => setShouldRemember(event.target.checked)}
              />

              <span className="ml-2 text-sm text-gray-600">Remember me</span>
            </label>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <Link
              href="/forgot-password"
              className="text-sm text-gray-600 underline hover:text-gray-900"
            >
              Forgot your password?
            </Link>

            <Link href="/register">Register</Link>

            <Button className="ml-3">Login</Button>
          </div>
        </form>
      </AuthCard>
    </Layout>
  );
};

export default Login;
