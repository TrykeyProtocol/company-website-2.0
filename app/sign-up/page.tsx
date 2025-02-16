"use client"
import { Input } from "@/library/components/atoms/input";
import Logo from "@/library/components/atoms/logo";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import ButtonBlack from "@/library/components/atoms/button-black";

const Page = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen flex justify-center p-6 pt-10 bg-white">
      <div className="max-w-md w-full space-y-8">
        <div className="flex justify-center mb-5">
          <Image
            src="/images/logo/logo-vertical.svg"
            alt="Logo"
            width={80}
            height={80}
          />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Hello!</h1>
          <p className="mt-2 text-sm text-gray-600">Sign up to get started</p>
        </div>
        <div className="mt-4 space-y-6">
          {/* First Name */}
          <Input
            label="First name"
            placeholder="Enter first name"
            className="mt-1"
          />

          {/* Last Name */}
          <Input
            label="Last name"
            placeholder="Enter last name"
            className="mt-1"
          />

          {/* Email */}
          <Input
            label="Email"
            type="email"
            placeholder="Enter your email"
            className="mt-1"
          />

          {/* Password */}
          <Input
            label="Password"
            type="password"
            placeholder="Enter password"
            className="mt-1"
            isPassword
          />

          {/* Confirm Password */}
          <Input
            label="Confirm password"
            type="password"
            placeholder="Enter password again"
            className="mt-1"
            isPassword
          />

          <ButtonBlack
            type="submit"
            text="Sign Up"
            onClick={() => router.push("/dashboard")}
          />
        </div>

        {/* Sign In Link */}
        <div className="text-center">
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <Link
              href="/sign-in"
              className="font-medium text-lightMode-brand-primary hover:text-lightMode-brand-primary/80"
            >
              SIGN IN
            </Link>
          </p>
        </div>
        <div className=" flex flex-col items-center space-y-4">
          <div className="flex items-center justify-center space-x-4 w-1/2">
            <div className="flex-1 border-t border-gray-300"></div>
            <span className="text-sm text-gray-500">OR</span>
            <div className="flex-1 border-t border-gray-300"></div>
          </div>

          <div className="flex justify-between w-1/2">
            <FcGoogle className="h-7 w-7" />
            <FaApple className="h-7 w-7" />
            <FaFacebook className="h-7 w-7" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
