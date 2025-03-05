"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { useRouter, useParams } from "next/navigation";
import DashboardLayout from "@/library/components/templates/dashboard-layout-wrapper";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/library/components/atoms/select";
import { Button } from "@/library/components/atoms/button-cn";
import { Input } from "@/library/components/atoms/input";
// import { Textarea } from "@/library/components/atoms/textarea";

// Mock data for a single asset
const mockAsset = {
  id: "1",
  name: "Wuye Fleet",
  category: "Vehicle",
  bankName: "Wema Bank",
  accountNumber: "0123456789",
  details: "This is a fleet of vehicles operating in the Wuye district.",
  image: "/images/keke.jpg", // Replace with your actual image path
};

// Mock banks for dropdown
const banks = [
  "Access Bank",
  "First Bank",
  "GT Bank",
  "UBA",
  "Wema Bank",
  "Zenith Bank",
];

// Mock asset categories
const assetCategories = [
  "Vehicle",
  "Property",
  "Equipment",
  "Investment",
  "Other",
];

export default function EditAssetPage() {
  const router = useRouter();
  const params = useParams();
  const assetId = params.id as string;
  
  const [isLoading, setIsLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    bankName: "",
    accountNumber: "",
    details: "",
    image: null as File | null,
    imagePreview: null as string | null,
    subAssetFile: null as File | null,
  });

  // Load asset data
  useEffect(() => {
    // In a real app, you would fetch the asset data based on the ID
    // For now, we'll use mock data
    const loadAsset = async () => {
      try {
        setIsLoading(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 500));
        
        // Set form data with mock asset
        setFormData({
          name: mockAsset.name,
          category: mockAsset.category,
          bankName: mockAsset.bankName,
          accountNumber: mockAsset.accountNumber,
          details: mockAsset.details,
          image: null,
          imagePreview: mockAsset.image,
          subAssetFile: null,
        });
      } catch (error) {
        console.error("Error loading asset:", error);
      } finally {
        setIsLoading(false);
      }
    };

    if (assetId) {
      loadAsset();
    }
  }, [assetId]);

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setFormData((prev) => ({ ...prev, image: file }));
      
      // Create a preview URL
      const reader = new FileReader();
      reader.onload = () => {
        setFormData((prev) => ({
          ...prev,
          imagePreview: reader.result as string,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubAssetFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setFormData((prev) => ({
        ...prev,
        subAssetFile: file,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create updated asset data
    const updatedAssetData = {
      id: assetId,
      name: formData.name,
      category: formData.category,
      bankName: formData.bankName,
      accountNumber: formData.accountNumber,
      details: formData.details,
      // In a real app, you'd handle image upload separately
    };
    
    // Log the data (in a real app, you would send this to your API)
    console.log("Updating asset:", updatedAssetData);
    
    // Simulate API success
    setTimeout(() => {
      // Navigate back to the assets page or asset details page
      router.push("/assets");
    }, 500);
  };

  const handleCancel = () => {
    // Navigate back without saving
    router.back();
  };

  // if (isLoading) {
  //   return (
  //     <DashboardLayout headerTitle="Edit Asset">
  //       <div className="flex justify-center items-center h-full">
  //         <p>Loading asset data...</p>
  //       </div>
  //     </DashboardLayout>
  //   );
  // }

  return (
    <DashboardLayout headerTitle="Edit Asset">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center mb-6">
          <Link href="/assets" className="mr-2">
            <ChevronLeft size={24} />
          </Link>
          <h1 className="text-xl font-semibold">Edit Asset</h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Asset Image */}
          <div className="mb-6">
            <div className="relative w-full h-48 bg-gray-200 rounded-lg overflow-hidden mb-2">
              {formData.imagePreview ? (
                <img
                  src={formData.imagePreview}
                  alt="Asset preview"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gray-100">
                  <span className="text-gray-400">No image</span>
                </div>
              )}
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <button
                  type="button"
                  onClick={() => document.getElementById('image-upload')?.click()}
                  className="bg-white text-black px-4 py-2 rounded-lg text-sm font-medium"
                >
                  Browse Files
                </button>
                <input
                  id="image-upload"
                  type="file"
                  accept=".jpg,.jpeg,.png"
                  className="hidden"
                  onChange={handleImageChange}
                />
              </div>
            </div>
          </div>

          {/* Asset Name */}
          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm font-medium">
              Asset Name
            </label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleTextChange}
              placeholder="Enter asset name"
              required
            />
          </div>

          {/* Asset Category */}
          <div className="space-y-2">
            <label htmlFor="category" className="block text-sm font-medium">
              Asset Category
            </label>
            <Select
              value={formData.category}
              onValueChange={(value) => handleSelectChange("category", value)}
            >
              <SelectTrigger id="category">
                <SelectValue placeholder="Enter asset name" />
              </SelectTrigger>
              <SelectContent className=" bg-white">
                {assetCategories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Bank Name */}
          <div className="space-y-2">
            <label htmlFor="bankName" className="block text-sm font-medium">
              Bank Name
            </label>
            <Select
              value={formData.bankName}
              onValueChange={(value) => handleSelectChange("bankName", value)}
            >
              <SelectTrigger id="bankName">
                <SelectValue placeholder="Choose Bank" />
              </SelectTrigger>
              <SelectContent className=" bg-white">
                {banks.map((bank) => (
                  <SelectItem key={bank} value={bank}>
                    {bank}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Account Number */}
          <div className="space-y-2">
            <label htmlFor="accountNumber" className="block text-sm font-medium">
              Account Number
            </label>
            <Input
              id="accountNumber"
              name="accountNumber"
              value={formData.accountNumber}
              onChange={handleTextChange}
              placeholder="Enter account number"
            />
          </div>

          {/* Asset Details */}
          <div className="space-y-2">
            <label htmlFor="details" className="block text-sm font-medium">
              Asset Details
            </label>
            <textarea
              id="details"
              name="details"
              value={formData.details}
              onChange={handleTextChange}
              placeholder="Enter asset details"
              className="w-full p-3 border rounded-lg h-28"
            />
          </div>

          {/* Sub-Assets Upload */}
          <div className="space-y-2">
            <label className="block text-sm font-medium">Sub-Assets</label>
            <div className="border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center">
              <div className="mb-4 text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path>
                  <polyline points="17 21 17 13 7 13 7 21"></polyline>
                  <polyline points="7 3 7 8 15 8"></polyline>
                </svg>
              </div>
              <p className="text-sm text-center mb-2">Upload a .csv or xlsx file for subassets</p>
              <div>
                <label htmlFor="subasset-upload" className="cursor-pointer bg-white px-4 py-2 border rounded-lg text-sm">
                  Browse Files
                </label>
                <input
                  id="subasset-upload"
                  type="file"
                  accept=".csv,.xlsx"
                  className="hidden"
                  onChange={handleSubAssetFileChange}
                />
              </div>
              {formData.subAssetFile && (
                <p className="mt-2 text-sm text-green-600">
                  {formData.subAssetFile.name}
                </p>
              )}
            </div>
          </div>

          {/* Form Buttons */}
          <div className="flex gap-4 pt-4">
            <Button
              type="button"
              onClick={handleCancel}
              variant="outline"
              className="flex-1"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="flex-1 bg-black hover:bg-black/90 text-white"
            >
              Edit
            </Button>
          </div>
        </form>
      </div>
    </DashboardLayout>
  );
}