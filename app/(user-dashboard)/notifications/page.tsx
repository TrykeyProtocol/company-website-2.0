"use client";

import React, { useState } from "react";
import {
  ArrowLeft,
  ChevronDown,
  Bell,
  AlertCircle,
  ArrowUpDown,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface Notification {
  id: string;
  type: "debit_alert" | "vehicle_exit";
  title: string;
  description: string;
  timestamp: Date;
}

const NotificationsScreen: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"all" | "transactions" | "alerts">(
    "all"
  );
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const router = useRouter();

  // Sample data
  const notifications: Notification[] = [
    {
      id: "1",
      type: "debit_alert",
      title: "Debit Alert",
      description: "₦50,000 has been withdrawn from your account.",
      timestamp: new Date(),
    },
    {
      id: "2",
      type: "vehicle_exit",
      title: "Vehicle Exit Alert",
      description:
        "ABC-123XYZ has exited its designated area. Last seen near Wuse, Abuja at 11:00 AM.",
      timestamp: new Date(),
    },
    {
      id: "3",
      type: "vehicle_exit",
      title: "Vehicle Exit Alert",
      description:
        "ABC-123XYZ has exited its designated area. Last seen near Wuse, Abuja at 11:00 AM.",
      timestamp: new Date(),
    },
    {
      id: "4",
      type: "debit_alert",
      title: "Debit Alert",
      description: "₦50,000 has been withdrawn from your account.",
      timestamp: new Date(),
    },
  ];

  // Filter notifications based on active tab
  const filteredNotifications = notifications.filter((notification) => {
    if (activeTab === "all") return true;
    if (activeTab === "transactions" && notification.type === "debit_alert")
      return true;
    if (activeTab === "alerts" && notification.type === "vehicle_exit")
      return true;
    return false;
  });

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClearAll = () => {
    // In a real app, you would implement logic to clear notifications
    console.log(`Clearing all ${activeTab} notifications`);
  };

  const renderNotificationIcon = (type: string) => {
    if (type === "debit_alert") {
      return (
        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
          <Image
            src="/money-icon.png"
            alt="Money"
            width={20}
            height={20}
            className="text-green-500"
          />
        </div>
      );
    } else if (type === "vehicle_exit") {
      return (
        <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
          <Image
            src="/bell-icon.png"
            alt="Alert"
            width={20}
            height={20}
            className="text-red-500"
          />
        </div>
      );
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-white py-3 px-4 flex items-center shadow-sm">
        <div className="text-gray-500">
          <ArrowLeft
            size={20}
            onClick={() => router.back()}
            className=" cursor-pointer"
          />
        </div>
        <div className="flex-1 text-center font-medium">Notifications</div>
      </div>

      {/* Tab Header */}
      <div className=" px-4 py-3 flex items-center justify-between">
        <div className="relative">
          <button
            onClick={toggleMenu}
            className="flex items-center space-x-1 text-sm font-medium"
          >
            <span>
              {activeTab === "all" && "All Notifications"}
              {activeTab === "transactions" && "Transactions"}
              {activeTab === "alerts" && "Alerts"}
            </span>
            <ChevronDown size={16} />
          </button>

          {/* Dropdown Menu */}
          {isMenuOpen && (
            <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg z-10">
              <ul className="py-1">
                <li
                  className={`px-4 py-2 text-sm cursor-pointer hover:bg-gray-100 ${
                    activeTab === "all" ? "bg-gray-100" : ""
                  }`}
                  onClick={() => {
                    setActiveTab("all");
                    setIsMenuOpen(false);
                  }}
                >
                  All Notifications
                </li>
                <li
                  className={`px-4 py-2 text-sm cursor-pointer hover:bg-gray-100 ${
                    activeTab === "transactions" ? "bg-gray-100" : ""
                  }`}
                  onClick={() => {
                    setActiveTab("transactions");
                    setIsMenuOpen(false);
                  }}
                >
                  Transactions
                </li>
                <li
                  className={`px-4 py-2 text-sm cursor-pointer hover:bg-gray-100 ${
                    activeTab === "alerts" ? "bg-gray-100" : ""
                  }`}
                  onClick={() => {
                    setActiveTab("alerts");
                    setIsMenuOpen(false);
                  }}
                >
                  Alerts
                </li>
              </ul>
            </div>
          )}
        </div>

        <button
          onClick={handleClearAll}
          className="text-red-500 text-xs font-medium"
        >
          Clear all
        </button>
      </div>

      {/* Notifications List */}
      <div className="flex-1 overflow-y-auto">
        {filteredNotifications.length === 0 ? (
          <div className="h-full flex flex-col items-center justify-center text-gray-500">
            <p className="text-sm">No notifications yet</p>
          </div>
        ) : (
          <div className="p-4 space-y-4">
            {filteredNotifications.map((notification) => (
              <div
                key={notification.id}
                className="bg-white rounded-lg p-4 shadow-sm flex items-start space-x-3"
              >
                {notification.type === "debit_alert" ? (
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-green-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm2 3a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                ) : (
                  <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-red-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12zm0-9a1 1 0 011 1v3a1 1 0 11-2 0V8a1 1 0 011-1z"
                        clipRule="evenodd"
                      />
                      <path d="M10 14a1 1 0 100-2 1 1 0 000 2z" />
                    </svg>
                  </div>
                )}
                <div className="flex-1">
                  <h3 className="font-medium text-sm">{notification.title}</h3>
                  <p className="text-gray-600 text-xs mt-1">
                    {notification.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default NotificationsScreen;
