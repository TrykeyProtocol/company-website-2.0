"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Bell,
  Home,
  BarChart2,
  Database,
  PlusCircle,
  User,
} from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

interface DashboardLayoutProps {
  children: React.ReactNode;
  showNav?: boolean;
  headerTitle?: string;
  className?: string;
  hideNotification?: boolean;
}

const DashboardLayout = ({
  children,
  showNav = true,
  headerTitle,
  className,
  hideNotification,
}: DashboardLayoutProps) => {
  const pathname = usePathname();
  const currentFirstSegment = pathname.split("/").filter(Boolean)[0] || "";
  
  // State to store the safe area height
  const [safeAreaHeight, setSafeAreaHeight] = useState("100vh");

  // Calculate the safe area height on component mount and window resize
  useEffect(() => {
    const calculateSafeAreaHeight = () => {
      // Use CSS env() variables to account for mobile browser UI elements
      // This will adjust for the search bar at the bottom in browsers that support it
      document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
      setSafeAreaHeight("calc(var(--vh, 1vh) * 100)");
    };

    // Initial calculation
    calculateSafeAreaHeight();

    // Recalculate on resize
    window.addEventListener('resize', calculateSafeAreaHeight);
    
    // Clean up
    return () => window.removeEventListener('resize', calculateSafeAreaHeight);
  }, []);

  const isLinkActive = (href: string) => {
    const hrefFirstSegment = href.split("/").filter(Boolean)[0] || "";
    return currentFirstSegment === hrefFirstSegment;
  };

  const getNavLinkClass = (href: string) => {
    return isLinkActive(href)
      ? "flex flex-col items-center text-orange-500"
      : "flex flex-col items-center text-gray-400 hover:text-orange-500 transition-all duration-300";
  };

  const getNotificationLinkClass = () => {
    return isLinkActive("/notifications")
      ? "relative text-orange-500"
      : "relative text-gray-400 hover:text-orange-500 transition-all duration-300";
  };

  return (
    <div 
      className={`flex flex-col bg-white ${className}`}
      style={{ height: safeAreaHeight }}
    >
      {/* Header */}
      <header className="p-4 bg-white">
        <div className="flex justify-between items-center">
          {pathname === "/dashboard" ? (
            <div className="flex items-center gap-4">
              <Image
                src={"/images/dashboard/avatar.jpg"}
                alt={""}
                width={40}
                height={40}
              />
              <div>
                <p className="text-lightMode-brand-primary text-xs font-bold">
                  Welcome Back,
                </p>
                <h1 className="text-2xl font-bold text-gray-800">John Doe</h1>
              </div>
            </div>
          ) : (
            <div className="flex ">
              {headerTitle && (
                <h1 className="text-xl font-semibold text-center">
                  {headerTitle}
                </h1>
              )}
            </div>
          )}
          {!hideNotification && (
            <Link href="/notifications" className={getNotificationLinkClass()}>
              <Bell className="w-6 h-6" />
              <span className="absolute -top-1 -right-1 bg-orange-500 rounded-full w-4 h-4 flex items-center justify-center text-white text-xs">
                1
              </span>
            </Link>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-4 pb-safe">{children}</main>

      {/* Bottom Navigation */}
      {showNav && (
        <nav className="bg-white border-t border-gray-200">
          <div className="flex justify-around items-center py-2 relative pb-safe">
            {[
              { href: "/dashboard", icon: Home, label: "Home" },
              { href: "/transactions", icon: BarChart2, label: "Transactions" },
              { href: "/assets", icon: Database, label: "Assets" },
              { href: "/add-asset", icon: PlusCircle, label: "Add asset" },
              { href: "/profile", icon: User, label: "Profile" },
            ].map(({ href, icon: Icon, label }) => (
              <Link key={href} href={href} className={getNavLinkClass(href)}>
                <Icon className="w-5 h-5 " strokeWidth={1.5} />
                <span className="text-xs mt-1 font-medium">{label}</span>
              </Link>
            ))}
          </div>
        </nav>
      )}
    </div>
  );
};

export default DashboardLayout;