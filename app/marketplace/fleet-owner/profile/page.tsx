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
} from "lucide-react";
import MarketplaceNav from "@/library/components/organisms/marketplace-nav";
import AssetListItem from "@/library/components/atoms/view-all-item";
import DashboardCard from "@/library/components/atoms/dashboard-card";

const FleetOwnerProfile = () => {
  const [activeTab, setActiveTab] = useState("Fleets");

  return (
    <div className="min-h-screen bg-white pb-16">
      {/* Header */}
      <header className="bg-white p-4 flex justify-between items-center">
        <h1 className="text-xl font-semibold">Profile</h1>
        <button className="text-gray-500">
          <Settings size={20} />
        </button>
      </header>

      {/* Profile Info */}
      <div className="px-4 py-2 flex justify-between items-start">
        <div className="flex items-center gap-3">
          <div className="w-14 h-14 rounded-full overflow-hidden">
            <img
              src="/images/dashboard/avatar.jpg"
              alt="Ayo Bassey"
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <div className="font-semibold flex items-center gap-1">
              Ayo Bassey
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
          <div className="bg-lightMode-brand-primary rounded-full p-2 mb-1">
            <Star className=" w-4 h-4" stroke="white" fill="white" />
          </div>
          <div className="text-xs text-gray-500">Rating</div>
          <div className=" font-semibold">4.89</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-red-100 rounded-full p-2 mb-1">
            <CreditCard fill="#FF5722" className=" w-4 h-4 stroke-red-100" />
          </div>
          <div className="text-xs text-gray-500">Credit Score</div>
          <div className=" font-semibold">75</div>
        </div>
        <div className="flex flex-col items-center">
          <div className=" p-1 mb-1">
            <Wrench className=" w-5 h-5 stroke-lightMode-brand-primary" />
          </div>
          <div className="text-xs text-gray-500">Number of Vehicles</div>
          <div className=" font-semibold">1500</div>
        </div>
      </div>

      {/* Tabs */}
      <div className="grid grid-cols-3 border-b">
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
            activeTab === "Fleets"
              ? "text-black border-b-2 border-black"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab("Fleets")}
        >
          Fleets
        </button>
        <button
          className={`py-3 text-center text-sm font-medium ${
            activeTab === "reviews"
              ? "text-black border-b-2 border-black"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab("reviews")}
        >
          Reviews
        </button>
      </div>

      {/* Tab Content */}
      <div className="p-4">
        {activeTab === "Fleets" && (
          <div>
            <div className="flex justify-between mb-4">
              <h3 className="font-medium">All Fleets</h3>
              <button className="text-xs text-gray-500">See all</button>
            </div>
            <div className="flex flex-col gap-4">
          <DashboardCard />
          <DashboardCard />
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
      <MarketplaceNav userType="fleet-owner" />
    </div>
  );
};

export default FleetOwnerProfile;
