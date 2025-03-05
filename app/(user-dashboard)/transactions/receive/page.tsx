"use client";
import ButtonBlack from "@/library/components/atoms/button-black";
import { Input } from "@/library/components/atoms/input";
import { ChevronLeft, QrCode } from "lucide-react";
import Link from "next/link";

const Page = () => {
  return (
    <div className="flex flex-col items-center h-screen p-6 pt-10 bg-white justify-between">
      <div className="max-w-md w-full space-y-8">
        <div className=" flex gap-4 items-center">
          <Link
            href="/transactions"
            className="text-gray-500 flex text-sm items-center"
          >
            <ChevronLeft width={24} />
          </Link>

          <h1 className="text-xl font-semibold text-gray-900">
            Receive Money
          </h1>
        </div>

        <div className="flex flex-col items-center pt-12">
          <QrCode className=" w-[273px] h-[273px]" />
          <p className=" text-lg font-semibold mt-7">Scan to get paid</p>
          <p className=" text-center text-sm">Hold the code inside the frame, it will be scanned automatically you will be notified once payment is received</p>
        </div>
      </div>
      <ButtonBlack text="Done" />
    </div>
  );
};

export default Page;
