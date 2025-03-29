"use client";

import React, { useState } from "react";
import {
  Settings,
  Check,
  Pencil,
  Star,
  CreditCard,
  ShoppingBag,
  Wrench,
  Coins,
  Banknote,
  ArrowUpRight,
} from "lucide-react";
import MarketplaceNav from "@/library/components/organisms/marketplace-nav";
import Image from "next/image";
import Link from "next/link";

const MechanicProfile = () => {
  const [activeTab, setActiveTab] = useState("Services");

  const products = [
    {
      id: 1,
      name: "Car Dealership",
      image: "/images/dashboard/vehicle/vehicle.jpg",
      rating: "5.0",
      reviews: "873",
      growth: "+1.34%",
      price: "₦1,000,000",
    },
  ];

  return (
    <div className="min-h-screen bg-white pb-16">
      {/* Header */}
      <header className="bg-white p-4 flex justify-between items-center">
      <div className=" flex gap-4 items-center">
          <Link href={"/dashboard"} className="">
            <Image
              src={"/images/logo/logo-vertical.svg"}
              alt={""}
              width={40}
              height={25}
            />
          </Link>
          <h1 className="text-xl font-semibold">Profile</h1>
        </div>        <button className="text-gray-500">
          <Settings size={20} />
        </button>
      </header>

      {/* Profile Info */}
      <div className="px-4 py-2 flex justify-between items-start">
        <div className="flex items-center gap-3">
          <div className="w-14 h-14 rounded-full overflow-hidden">
            <img
              src="/images/dashboard/avatar.jpg"
              alt="Basil Chinedu"
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <div className="font-semibold flex items-center gap-1">
              Basil Chinedu
              <span className="text-green-500">
                <Check size={16} />
              </span>
            </div>
            <div className="text-xs text-gray-500">nedunnabike@gmail.com</div>
          </div>
        </div>
        <button className="">
          <Pencil width={16} fill="black" />
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 px-6 py-4 border rounded-lg m-4">
        <div className="flex flex-col items-center">
          <Banknote className=" stroke-darkMode-text-accent" />
          <div className="text-xs text-gray-500 text-center">Amount Invested</div>
          <div className=" font-semibold">₦10,0000.00</div>
        </div>
        <div className="flex flex-col items-center">
          <Coins className=" stroke-darkMode-text-accent" />
          <div className="text-xs text-gray-500 text-center">Expected Interest</div>
          <div className=" font-semibold">1500</div>
        </div>
        <div className="flex flex-col items-center">
          <CreditCard className=" stroke-darkMode-text-accent" />
          <div className="text-xs text-gray-500 text-center">Credit Score</div>
          <div className=" font-semibold">1500</div>
        </div>
      </div>

      {/* Tabs */}
      <div className="grid grid-cols-2 border-b">
        <button
          className={`py-3 text-center text-sm font-medium ${
            activeTab === "points"
              ? "text-black border-b-2 border-black"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab("points")}
        >
          Points
        </button>
        <button
          className={`py-3 text-center text-sm font-medium ${
            activeTab === "Services"
              ? "text-black border-b-2 border-black"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab("Services")}
        >
          Investment
        </button>
      </div>

      {/* Tab Content */}
      <div className="p-4">
        {activeTab === "Services" && (
          <div>
            <div className="flex flex-col gap-4">
              {products.map((product) => (
                <div key={product.id} className="border rounded-lg">
                  <Image
                    src={product.image}
                    alt={product.name}
                    className="w-full h-40 object-cover rounded-t-lg"
                    width={500}
                    height={250}
                  />
                  <div className="p-4">
                    <div className="">{product.name}</div>
                    <div className=" flex justify-between items-end">

                    <div className="flex items-center gap-2 mt-1">
                      <div className="flex items-center border px-2 py-1 rounded-full text-sm">
                        <Star className="w-4 h-4 fill-yellow-500 stroke-none" />
                        <span className="ml-1 font-medium text-xs">
                          {product.rating} ({product.reviews})
                        </span>
                      </div>
                      <div className="flex items-center text-green-600 bg-green-100 px-2 py-1 rounded-full text-sm">
                        <span className="font-medium text-xs">{product.growth}</span>
                        <ArrowUpRight className="w-4 h-4 ml-1" />
                      </div>
                    </div>
                    <div className="text-black font-semibold text-sm mt-2">
                      {product.price}
                    </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        {activeTab === "points" && (
          <div className="text-center py-6 text-gray-500">
            Points information will be displayed here
          </div>
        )}
        {activeTab === "reviews" && (
          <div className="text-center py-6 text-gray-500">
            Reviews information will be displayed here
          </div>
        )}
      </div>

      {/* Bottom Nav */}
      <MarketplaceNav userType="investor" />
    </div>
  );
};

export default MechanicProfile;
