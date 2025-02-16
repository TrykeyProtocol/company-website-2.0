"use client";
import ButtonBlack from "@/library/components/atoms/button-black";
import { Input } from "@/library/components/atoms/input";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter(); // Initialize Next.js router

  return (
    <div className="flex flex-col items-center h-screen p-6 pt-10 bg-white">
      <div className="max-w-md w-full space-y-8">
        <Link
          href="/sign-in/forgot-password"
          className="text-gray-500 flex text-sm items-center"
        >
          <ChevronLeft width={24} />
          Back
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Create new password
          </h1>
          <p className="mt-2 text-sm text-gray-600">
            Your previous password has been reseted. Please set a new password
            for your account.{" "}
          </p>
        </div>
        <div className=" flex flex-col gap-4">
          <Input placeholder="Enter new password" type="password" />
          <Input placeholder="Re-enter password" type="password" />
        </div>

        <ButtonBlack
          text="Set Password"
          onClick={() => router.push("/sign-in/forgot-password/verify-code")}
        />
        <p className="mt-2 text-sm text-gray-600 text-center">
          Didn’t receive a code?{" "}
          <a href="" className=" text-lightMode-brand-primary font-bold">
            Resend
          </a>
        </p>
      </div>
    </div>
  );
};

export default Page;
