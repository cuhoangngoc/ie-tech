import ApplicationLogo from "../components/Breeze/ApplicationLogo";
import AuthCard from "../components/Breeze/AuthCard";
import Button from "../components/Breeze/Button";
import GuestLayout from "../components/Breeze/Layouts/GuestLayout";
import Input from "../components/Breeze/Input";
import InputError from "../components/Breeze/InputError";
import Label from "../components/Breeze/Label";
import Link from "next/link";
import { useAuth } from "../hooks/auth";
import { useState } from "react";

const Register = () => {
  const { register } = useAuth({
    middleware: "guest",
    redirectIfAuthenticated: "/dashboard",
  });

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [errors, setErrors] = useState([]);

  const submitForm = (event) => {
    event.preventDefault();

    register({
      name,
      email,
      password,
      password_confirmation: passwordConfirmation,
      setErrors,
    });
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
        <form onSubmit={submitForm}>
          {/* Name */}
          <div>
            <Label htmlFor="name">Name</Label>

            <Input
              id="name"
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
              autoFocus
            />

            <InputError messages={errors.name} className="mt-2" />
          </div>

          {/* Email Address */}
          <div className="mt-4">
            <Label htmlFor="email">Email</Label>

            <Input
              id="email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
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
              onChange={(event) => setPassword(event.target.value)}
              required
              autoComplete="new-password"
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
              onChange={(event) => setPasswordConfirmation(event.target.value)}
              required
            />

            <InputError
              messages={errors.password_confirmation}
              className="mt-2"
            />
          </div>

          <div className="mt-4 flex items-center justify-end">
            <Link
              href="/login"
              className="text-sm text-gray-600 underline hover:text-gray-900"
            >
              Already registered?
            </Link>

            <Button className="ml-4">Register</Button>
          </div>
        </form>
      </AuthCard>
    </GuestLayout>
  );
};

export default Register;
