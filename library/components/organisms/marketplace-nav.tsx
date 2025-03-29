// src/components/layout/bottom-nav.tsx
"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, ShoppingCart, Wallet, User } from "lucide-react";
import Image from "next/image";

interface NavItem {
  icon: React.ReactNode;
  label: string;
  href: string;
}

const MarketplaceNav: React.FC<{ userType: string }> = ({ userType }) => {
  const pathname = usePathname();
  const baseUrl = `/marketplace/${userType}`;

  const navItems: NavItem[] = [
    {
      icon: <Home size={20} />,
      label: "Home",
      href: baseUrl,
    },
    {
      icon: <ShoppingCart size={20} />,
      label: "Cart",
      href: `${baseUrl}/cart`,
    },
    {
      icon: <Wallet size={20} />,
      label: "Wallet",
      href: `${baseUrl}/wallet`,
    },
    {
      icon: <User size={20} />,
      label: "Profile",
      href: `${baseUrl}/profile`,
    },
  ];

  return (
    <div>


      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
        <div className="flex justify-around items-center h-16">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`flex flex-col items-center justify-center ${
                  isActive ? "text-orange-500" : "text-gray-500"
                }`}
              >
                {item.icon}
                <span className="text-xs mt-1">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
};

export default MarketplaceNav;
