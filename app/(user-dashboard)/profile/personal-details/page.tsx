"use client";

import DashboardLayout from "@/library/components/templates/dashboard-layout-wrapper";
import { useState } from "react";
import { ArrowLeft, Mail, User } from "lucide-react";
import React from "react";
import { Input } from "@/library/components/atoms/input";
import { Button } from "@/library/components/atoms/button-cn";
import Link from "next/link";
// import Button from "@/library/components/atoms/button-cn";

const PersonalDetails = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "johndoe@gmail.com",
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="p-6 pt-10 max-w-md mx-auto">
      {/* Back Button */}
      <div className="flex gap-20">
        <Link className="flex items-center mb-4" href={"/profile"}>
          <ArrowLeft size={20} />
        </Link>
        <h1 className="text-gray-900">Personal Details</h1>
      </div>

      <div className="w-full flex flex-col gap-6 mt-10">
        {/* First Name */}
        <div className="w-full block">
          <label className="block text-sm mb-1">First name</label>
          <div className="relative w-full block">
            <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
            <Input
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              disabled={!isEditing}
              className="p-6 pl-10 w-full block border border-gray-300 disabled:font-light text-sm"
              style={{ width: "100%" }}
            />
          </div>
        </div>

        {/* Last Name */}
        <div className="w-full block">
          <label className="block text-sm mb-1">Last name</label>
          <div className="relative w-full block">
            <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
            <Input
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              disabled={!isEditing}
              className="p-6 pl-10 w-full block border border-gray-300 disabled:font-light text-sm"
              style={{ width: "100%" }}
            />
          </div>
        </div>

        {/* Email */}
        <div className="w-full block">
          <label className="block text-sm mb-1">Email</label>
          <div className="relative w-full block">
            <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
            <Input
              name="email"
              value={formData.email}
              onChange={handleChange}
              disabled={!isEditing}
              className="p-6 pl-10 w-full block border border-gray-300 disabled:font-light text-sm"
              style={{ width: "100%" }}
            />
          </div>
        </div>
      </div>

      {/* Toggle Button */}
      <div className="mt-6 w-full">
        <Button onClick={() => setIsEditing(!isEditing)} className="w-full bg-black text-white">
          {isEditing ? "Update" : "Edit"}
        </Button>
      </div>
    </div>
  );
};

export default PersonalDetails;