"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import ButtonBlack from "@/library/components/atoms/button-black";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { Input } from "@/library/components/atoms/input";

const Page = () => {
  const router = useRouter(); 

  return (
    <div className="flex flex-col items-center h-screen p-6 pt-10 bg-white">
      <div className="max-w-md w-full space-y-8">
        <Link
          href="/sign-in"
          className="text-gray-500 flex text-sm items-center"
        >
          <ChevronLeft width={24} />
          Back to login
        </Link>

        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Forgot your password
          </h1>
          <p className="mt-2 text-sm text-gray-600">
            {" "}
            Don’t worry, happens to all of us. Enter your email below to recover
            your password
          </p>
        </div>

        <Input placeholder="Enter your email" type="email" />
        <ButtonBlack
          text="Submit"
          onClick={() => router.push("/sign-in/forgot-password/verify-code")}
        />
      </div>
    </div>
  );
};

export default Page;
