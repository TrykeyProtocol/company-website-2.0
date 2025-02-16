"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import ButtonBlack from "@/library/components/atoms/button-black";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { Input } from "@/library/components/atoms/input";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/library/components/atoms/input-otp";

const page = () => {
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
          <h1 className="text-2xl font-bold text-gray-900">Verify code</h1>
          <p className="mt-2 text-sm text-gray-600">
            An authentication code has been sent to your email.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <InputOTP maxLength={6}>
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
            </InputOTPGroup>
            <InputOTPSeparator />
            <InputOTPGroup>
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
        </div>
        <ButtonBlack
          text="Verify"
          onClick={() => router.push("/sign-in/forgot-password/password-reset")}
        />
        <p className="mt-2 text-sm text-gray-600 text-center">
          Didn’t receive a code? <a href="" className=" text-lightMode-brand-primary font-bold">Resend</a> 
        </p>
      </div>
    </div>
  );
};

export default page;
