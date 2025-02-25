"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ChevronLeft, ChevronDown, Search } from "lucide-react";
import ButtonBlack from "@/library/components/atoms/button-black";
import { Input } from "@/library/components/atoms/input";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/library/components/atoms/drawer";

const Page = () => {
  const router = useRouter();
  const [selectedBank, setSelectedBank] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const banks = [
    "OPAY DIGITAL SERVICES",
    "AB Microfinance Bank",
    "ABU Microfinance Bank",
    "AG Mortgage Bank",
    "AMJU Unique Microfinance Bank",
    "AMML MFB",
    "Access Bank",
    "Fidelity Bank",
    "First Bank",
    "GTBank",
    "UBA",
    "Zenith Bank",
  ];

  const filteredBanks = banks.filter((bank) =>
    bank.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleBankSelect = (bank: string) => {
    setSelectedBank(bank);
  };

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

          <div>
            <h1 className="text-xl font-semibold text-gray-900">Send Money</h1>
            <p className="text-sm text-gray-600">
              Total Balance <b>₦25000.40</b>
            </p>
          </div>
        </div>

        <div className="space-y-1">
          <label className="text-sm font-medium text-gray-700">Bank</label>
          <Drawer>
            <DrawerTrigger className="w-full">
              <div className="flex items-center justify-between w-full border border-gray-300 rounded-md h-12 px-3 text-gray-500">
                <span
                  className={`${selectedBank ? "text-black" : ""} text-sm `}
                >
                  {selectedBank || "Select Bank"}
                </span>
                <ChevronDown size={18} />
              </div>
            </DrawerTrigger>
            <DrawerContent className="h-[70%] p-0 bg-white">
              <DrawerHeader className="border-b px-4 py-4">
                <DrawerTitle className=" font-semibold">
                  Select Bank
                </DrawerTitle>
              </DrawerHeader>
              <div className="p-4 pb-0">
                <div className="relative mb-6">
                  <Input
                    placeholder="Search Bank Name"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pr-10 pl-3 h-12 text-sm"
                  />
                  <Search
                    className="absolute right-3 top-3 text-gray-400"
                    size={20}
                  />
                </div>
                <div className="space-y-4 max-h-96 overflow-y-auto">
                  {filteredBanks.map((bank, index) => (
                    <button
                      key={index}
                      className="w-full text-left py-4 border-b border-gray-100 hover:bg-gray-50 text-sm"
                      onClick={() => {
                        handleBankSelect(bank);
                        (
                          document.querySelector(
                            "[data-state='open']"
                          ) as HTMLElement
                        )?.click();
                      }}
                    >
                      {bank}
                    </button>
                  ))}
                </div>
              </div>
            </DrawerContent>
          </Drawer>
        </div>

        <Input
          placeholder="Enter Account Number"
          label="Account Number"
          className="h-12 text-sm"
          type="number"
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
