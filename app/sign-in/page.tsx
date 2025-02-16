"use client"
import { Input } from "@/library/components/atoms/input";
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
          <h1 className="text-2xl font-bold text-gray-900">Welcome Back!</h1>
          <p className="mt-2 text-sm text-gray-600">
            Sign in to access your account
          </p>
        </div>
        <div className="mt-4 space-y-6">
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
          <div className="flex justify-end -mt-4">
            <Link
              href="/sign-in/forgot-password"
              className=" text-lightMode-brand-primary hover:text-lightMode-brand-primary/80 text-sm"
            >
              Forgot Password?
            </Link>
          </div>

          <ButtonBlack
            // type="submit"
            text="Sign In"
            onClick={() => router.push("/dashboard")}
          />
        </div>

        {/* Sign In Link */}
        <div className="text-center">
          <p className="text-sm text-gray-600">
            Don&apos;t have an account?{" "}
            <Link
              href="/sign-up"
              className="font-medium text-lightMode-brand-primary hover:text-lightMode-brand-primary/80"
            >
              SIGN UP
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
