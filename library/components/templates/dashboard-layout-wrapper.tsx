"use client";
import React from "react";
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
    <div className={`flex flex-col bg-white h-screen ${className}`}>
      {/* Header */}
      <header className="p-4 bg-white">
        <div className="flex justify-between items-center">
          {pathname === "/dashboard" ? (
            <div>
              <p className="text-orange-500 text-xs font-bold">Welcome Back,</p>
              <h1 className="text-2xl font-bold text-gray-800">John Doe</h1>
            </div>
          ) : (
            <div className="flex ">
              {headerTitle && (
                <h1 className="text-xl font-semibold text-center">{headerTitle}</h1>
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
      <main className="flex-1 overflow-y-auto p-4">{children}</main>

      {/* Bottom Navigation */}
      {showNav && (
        <nav className="bg-white border-t border-gray-200">
          <div className="flex justify-around items-center py-2 relative">
            {[
              { href: "/dashboard", icon: Home, label: "Home" },
              { href: "/transactions", icon: BarChart2, label: "Transactions" },
              { href: "/assets", icon: Database, label: "Assets" },
              { href: "/add-asset", icon: PlusCircle, label: "Add asset" },
              { href: "/profile", icon: User, label: "Profile" },
            ].map(({ href, icon: Icon, label }) => (
              <Link key={href} href={href} className={getNavLinkClass(href)}>
                <Icon className="w-6 h-6" />
                <span className="text-xs mt-1 font-bold">{label}</span>
                {isLinkActive(href) && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </div>
  );
};

export default DashboardLayout;
