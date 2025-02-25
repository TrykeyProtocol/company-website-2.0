"use client";

import { useState } from "react";
import { ArrowLeft, Mail, Lock, Eye, EyeOff } from "lucide-react";
import React from "react";
import { Input } from "@/library/components/atoms/input";
import { Button } from "@/library/components/atoms/button-cn";
import Link from "next/link";

const Page = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const togglePasswordVisibility = (field: string) => {
    if (field === "oldPassword") {
      setShowOldPassword(!showOldPassword);
    } else if (field === "newPassword") {
      setShowNewPassword(!showNewPassword);
    } else if (field === "confirmPassword") {
      setShowConfirmPassword(!showConfirmPassword);
    }
  };

  return (
    <div className="p-6 pt-10 max-w-md mx-auto bg-gray-100 min-h-screen flex flex-col">
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <Link className="flex items-center" href={"/profile"}>
          <ArrowLeft size={20} />
        </Link>
        <h1 className="text-gray-900 text-lg font-semibold">
          Create New Password
        </h1>
      </div>

      {/* Form */}
      <div className="w-full flex flex-col gap-5">
        {/* Old Password */}
        <div className="w-full">
          <div className="relative w-full">
            <Lock
              size={16}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
            />
            <Input
              type={showOldPassword ? "text" : "password"}
              name="oldPassword"
              value={formData.oldPassword}
              onChange={handleChange}
              className="p-3 pl-10 w-full border border-gray-300 rounded-lg text-sm placeholder:text-xs"
              placeholder="Enter old password"
            />
            <button
              type="button"
              onClick={() => togglePasswordVisibility("oldPassword")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 focus:outline-none"
            >
              {showOldPassword ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>
        </div>

        {/* New Password */}
        <div className="w-full">
          <div className="relative w-full">
            <Lock
              size={16}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
            />
            <Input
              type={showNewPassword ? "text" : "password"}
              name="newPassword"
              value={formData.newPassword}
              onChange={handleChange}
              className="p-3 pl-10 w-full border border-gray-300 rounded-lg text-sm placeholder:text-xs"
              placeholder="Enter new password"
            />
            <button
              type="button"
              onClick={() => togglePasswordVisibility("newPassword")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 focus:outline-none"
            >
              {showNewPassword ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>
        </div>

        {/* Confirm Password */}
        <div className="w-full">
          <div className="relative w-full">
            <Lock
              size={16}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
            />
            <Input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="p-3 pl-10 w-full border border-gray-300 rounded-lg text-sm placeholder:text-xs"
              placeholder="Re-enter password"
            />
            <button
              type="button"
              onClick={() => togglePasswordVisibility("confirmPassword")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 focus:outline-none"
            >
              {showConfirmPassword ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <div className="mt-6 w-full">
        <Button
          disabled={
            !formData.oldPassword ||
            !formData.newPassword ||
            !formData.confirmPassword
          }
          className={`w-full p-3 rounded-lg text-white ${
            formData.oldPassword &&
            formData.newPassword &&
            formData.confirmPassword
              ? "bg-black"
              : "bg-gray-500"
          }`}
        >
          Set Password
        </Button>
      </div>
    </div>
  );
};

export default Page;
