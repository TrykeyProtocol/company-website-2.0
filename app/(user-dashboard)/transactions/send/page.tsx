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
    <div className="flex flex-col items-center h-screen p-6 pt-10 bg-white justify-between">
      <div className="max-w-md w-full space-y-8">
        <Link
          href="/sign-in"
          className="text-gray-500 flex text-sm items-center"
        >
          <ChevronLeft width={24} />
        </Link>

        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Send Money</h1>
          <p className="mt-2 text-sm text-gray-600">
            Total Balance <b>₦25000.40 </b>
          </p>
        </div>
        <Input placeholder="Select Bank" label="Bank" className=" h-12" />
        <Input
          placeholder="Enter Account Number"
          label="Account Number"
          className=" h-12"
        />
      </div>
        <ButtonBlack
          text="Next"
          onClick={() => router.push("/sign-in/forgot-password/verify-code")}
        />
    </div>
  );
};

export default Page;
