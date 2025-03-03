"use client";

import React, { useState } from "react";
import { ArrowLeft, Calendar, ChevronDown } from "lucide-react";
import { useRouter } from "next/navigation";

interface RouteEntry {
  id: string;
  location: string;
  timeRange: string;
  status: "Moving" | "Stop";
  duration: string;
}

const RouteHistoryPage: React.FC = () => {
  const router = useRouter();
  const [currentDate, setCurrentDate] = useState("1st Nov 2024");
  
  // Mock data for route history
  const routeEntries: RouteEntry[] = [
    {
      id: "1",
      location: "8 County Road 11/6",
      timeRange: "2:39 PM - 5:39 PM",
      status: "Moving",
      duration: "2m 34s"
    },
    {
      id: "2",
      location: "8 County Road 11/6",
      timeRange: "2:39 PM - 5:39 PM",
      status: "Stop",
      duration: "2m 34s"
    },
    {
      id: "3",
      location: "8 County Road 11/6",
      timeRange: "2:39 PM - 5:39 PM",
      status: "Moving",
      duration: "2m 34s"
    },
    {
      id: "4",
      location: "8 County Road 11/6",
      timeRange: "2:39 PM - 5:39 PM",
      status: "Moving",
      duration: "2m 34s"
    },
    {
      id: "5",
      location: "8 County Road 11/6",
      timeRange: "2:39 PM - 5:39 PM",
      status: "Stop",
      duration: "2m 34s"
    }
  ];

  const handleGoBack = () => {
    router.back();
  };

  const handleDateSelect = () => {
    // Implement date selection functionality
    alert("Date picker would open here");
  };

  return (
    <div className="min-h-screen bg-white px-4 pb-20">
      {/* Header */}
      <div className="py-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <ArrowLeft
            size={20}
            onClick={handleGoBack}
            className="cursor-pointer"
          />
          <h1 className="font-medium">Route History</h1>
        </div>
        <div className="flex items-center gap-1 text-gray-500">
          <p className="text-sm">{currentDate}</p>
          <Calendar size={16} />
        </div>
      </div>

      {/* Route History List */}
      <div className="mt-4 flex flex-col gap-4">
        {routeEntries.map((entry) => (
          <div key={entry.id} className="flex gap-3 items-start">
            <div className={`py-0.5 px-0.5 rounded-full ${entry.status === "Moving" ? "bg-green-500" : "bg-red-500"} mt-2`}>
              <ChevronDown size={16} className="text-white" />
            </div>

            <div className="flex justify-between items-start w-full">
              <div>
                <h3 className="text-sm font-bold">{entry.location}</h3>
                <p className="text-gray-400 text-sm">{entry.timeRange}</p>
                <p
                  className={`${
                    entry.status === "Moving"
                      ? "text-green-500"
                      : "text-red-500"
                  } text-sm`}
                >
                  {entry.status}
                </p>
              </div>
              <div className="text-gray-500 font-medium text-sm">
                {entry.duration}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RouteHistoryPage;