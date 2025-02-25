import DashboardLayout from "@/library/components/templates/dashboard-layout-wrapper";
import { Card } from "@/library/components/atoms/card";
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "@/library/components/atoms/avatar";
import {
  LogOut,
  KeyRound,
  UserRound,
  MessagesSquare,
  Camera,
  Lock,
  ChevronRight,
} from "lucide-react";
import React from "react";
import { Button } from "@/library/components/atoms/button-cn";
import Image from "next/image";
import Link from "next/link";

const ProfilePage = () => {
  return (
    <DashboardLayout headerTitle={"Profile"}>
      <div className="flex flex-col items-center p-4">
        {/* Profile Picture */}
        <div className="relative w-20 h-20">
          <Avatar className="w-20 h-20 border-[1px] border-lightMode-brand-primary shadow-sm">
            <AvatarImage src="/path-to-profile-pic.jpg" alt="Profile Picture" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
          <button className="absolute bottom-0 right-0 bg-lightMode-brand-primary p-2 rounded-full shadow-md">
            <Camera size={16} color="white" />
          </button>
        </div>

        {/* Profile Options */}
        <div className="w-full max-w-md mt-6 space-y-2">
          <ProfileOption
            icon={<UserRound size={20} />}
            text="Personal Details"
            href={"/profile/personal-details"}
          />
          <ProfileOption
            icon={<KeyRound size={20} />}
            text="Change Password"
            href={"/profile/change-password"}
          />
          <ProfileOption
            icon={<MessagesSquare size={20} />}
            text="Support"
            href={"/profile/support"}
          />
        </div>

        {/* Logout Button */}
        <button className="mt-8 text-lightMode-brand-primary flex items-center space-x-2">
          <LogOut size={20} />
          <span className=" text-sm">Log out</span>
        </button>

        {/* Promotion Box */}
        <Card className="w-full mt-20 p-6 bg-black text-white rounded-2xl text-center">
          <div className="flex flex-col items-center">
            <Image
              src={"/images/logo/logo.svg"}
              width={40}
              height={32}
              alt={""}
            />
            <p className="mt-4 font-bold text-sm">Trykey Management Kit</p>
            <Button className="mt-4 bg-white text-black w-40 py-2.5 rounded-xl">
              Buy now
            </Button>
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
};

const ProfileOption = ({
  icon,
  text,
  href,
}: {
  icon: any;
  text: string;
  href: string;
}) => {
  return (
    <Link
      className="flex items-center justify-between py-4 border-b border-gray-200 cursor-pointer"
      href={href}
    >
      <div className="flex items-center space-x-3">
        {icon}
        <span className=" text-sm text-gray-500">{text}</span>
      </div>
      <ChevronRight className=" text-gray-600" size={20} />
    </Link>
  );
};

export default ProfilePage;
