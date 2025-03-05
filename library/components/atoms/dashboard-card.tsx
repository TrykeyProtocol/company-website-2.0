import { Car } from "lucide-react";
import React from "react";

const DashboardCard = () => {
  return (
    <div
      className="bg-cover bg-center flex flex-col gap-20 py-4 px-6 rounded-3xl"
      style={{
        backgroundImage: "url('/images/dashboard/hotel/hotel.png')", 
      }}
    >
      <div className="flex gap-2 items-center">
        <div className="rounded-full bg-white p-2">
          <Car className="w-6 h-6 text-orange-500" />
        </div>
        <p className="font-bold">Wuye Fleet</p>
      </div>
      <div className="bg-white rounded-xl py-2 px-10 flex items-center justify-center gap-4">
        <div className="flex items-center flex-col">
          <p className="text-[10px] whitespace-nowrap">Yield Generated</p>
          <p className="text-[10px] font-bold whitespace-nowrap text-lightMode-brand-accent">₦300000.00</p>
        </div>
        <div className="flex items-center flex-col">
          <p className="text-[10px] whitespace-nowrap">Expected Yield</p>
          <p className="text-[10px] font-bold whitespace-nowrap text-lightMode-brand-accent">₦3000.00</p>
        </div>
        <div className="flex items-center flex-col">
          <p className="text-[10px] whitespace-nowrap">Number of Vehicles</p>
          <p className="text-[10px] font-bold whitespace-nowrap text-lightMode-brand-accent">20</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardCard;
