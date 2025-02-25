"use client";
import DashboardLayout from "@/library/components/templates/dashboard-layout-wrapper";
import React, { useState } from "react";
import {
  Banknote,
  ChevronRight,
  Eye,
  EyeOff,
  HandCoins,
  MoveDownLeft,
  MoveUpRight,
} from "lucide-react";
import Link from "next/link";

const Page = () => {
  const [showBalance, setShowBalance] = useState(false);

  const transactions = [
    {
      name: "Sarah Doe",
      vehicle_no: "234-6573-ABJ",
      date: "3rd Nov, 2023",
      amount: 25000,
      type: "receive",
    },
    {
      name: "John Smith",
      vehicle_no: "234-6573-ABJ",
      date: "4th Nov, 2023",
      amount: 30000,
      type: "receive",
    },
    {
      name: "Michael Brown",
      vehicle_no: "234-6573-ABJ",
      date: "7th Nov, 2023",
      amount: 35000,
      type: "send",
    },
    {
      name: "Emma Johnson",
      vehicle_no: "234-6573-ABJ",
      date: "5st Nov, 2023",
      amount: 28000,
      type: "receive",
    },
    {
      name: "Michael Brown",
      vehicle_no: "234-6573-ABJ",
      date: "7th Nov, 2023",
      amount: 35000,
      type: "receive",
    },
    {
      name: "Michael Brown",
      vehicle_no: "234-6573-ABJ",
      date: "7th Nov, 2023",
      amount: 35000,
      type: "send",
    },
  ];

  return (
    <DashboardLayout>
      <div className="flex gap-8 flex-col justify-center items-center">
        <div className=" w-full flex flex-col gap-6 items-center border border-[#F0F2F5] rounded-xl p-6 shadow-sm">
          <div>
            <div className="flex items-center gap-4">
              <p className=" text-[12px] text-gray-600">Total Balance</p>
              <button
                type="button"
                onClick={() => setShowBalance(!showBalance)}
              >
                {showBalance ? (
                  <EyeOff className="h-5 w-5 text-gray-500" />
                ) : (
                  <Eye className="h-5 w-5 text-gray-500" />
                )}
              </button>
            </div>
            {showBalance ? (
              <p className=" font-bold text-lg">₦25,000.40</p>
            ) : (
              <p className=" font-bold text-lg">₦﹡﹡﹡﹡﹡</p>
            )}
          </div>

          <div className=" flex gap-6 items-center">
            <div className=" flex gap-2.5 items-center ">
              <div className=" p-2 rounded-full bg-lightMode-brand-accent/10">
                <Banknote className=" w-4 h-4 text-lightMode-brand-accent" />
              </div>

              <div>
                <p className=" text-[12px] text-gray-600">Expected Yield</p>
                <p className=" font-semibold">₦20,000</p>
              </div>
            </div>
            <div className="h-10 w-[1px] bg-orange-100"></div>
            <div className=" flex gap-2.5 items-center ">
              <div className=" p-2 rounded-full bg-lightMode-brand-accent/10">
                <HandCoins className=" w-4 h-4 text-lightMode-brand-accent" />
              </div>

              <div>
                <p className=" text-[12px] text-gray-600">Yield Generated</p>
                <p className=" font-semibold">₦20,000</p>
              </div>
            </div>
          </div>
        </div>

        <div className=" px-8 py-3 flex gap-10 items-center justify-center border border-[#F0F2F5] rounded-xl w-min shadow-sm">
          <Link  href={"/transactions/send"} className=" flex gap-2 items-center">
            <div className=" bg-lightMode-brand-accent p-1.5 rounded-full">
              <MoveUpRight className=" w-3 h-3 text-white" />
            </div>
            <p className=" text-lg font-medium">Withdraw</p>
          </Link>
          <div className="h-10 w-[1px] bg-orange-100"></div>
          <Link href={"/transactions/receive"}  className=" flex gap-2 items-center">
            <div className=" bg-lightMode-brand-accent p-1.5 rounded-full">
              <MoveDownLeft className=" w-3 h-3 text-white" />
            </div>
            <p className=" text-lg font-medium">Receive</p>
          </Link>
        </div>

        {/* Transaction History */}
        <div className="w-full ">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-medium">Recent Transactions</h2>
            <Link href="/transactions/all-transactions" className="text-xs text-gray-400 flex">
              View All
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          {transactions.map((transaction, index) => (
            <div
              key={index}
              className="flex justify-between items-center py-3 border-b last:border-b-0"
            >
              <div className="flex gap-4 items-center">
                <div
                  className={` ${
                    transaction.type === "receive"
                      ? " bg-green-100"
                      : "bg-red-100"
                  } p-1.5 rounded-full`}
                >
                  {transaction.type === "receive" ? (
                    <MoveDownLeft
                      strokeWidth={3}
                      className=" w-3 h-3 text-green-500"
                    />
                  ) : (
                    <MoveUpRight
                      strokeWidth={3}
                      className=" w-3 h-3 text-red-500"
                    />
                  )}
                </div>
                <div>
                  <p className="font-medium text-sm">{transaction.name} paid to <span className=" font-light">{transaction.vehicle_no}</span> </p>
                  <p className="text-xs text-gray-400">{transaction.date}</p>
                </div>
              </div>
              <p
                className={`font-semibold text-sm ${
                  transaction.type === "receive"
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {transaction.type === "receive" ? "+" : "-"}₦
                {transaction.amount.toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Page;
