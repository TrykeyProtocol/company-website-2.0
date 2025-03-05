"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/library/components/atoms/button-cn";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { useRouter, useParams } from "next/navigation";
import DashboardLayout from "@/library/components/templates/dashboard-layout-wrapper";
import * as Select from '@radix-ui/react-select';
import { ChevronDown } from 'lucide-react';

// This interface defines the vehicle data structure
interface VehicleData {
  id: string | number;
  type: string;
  regNo: string;
  image?: string;
  status?: string;
  distanceCovered?: string;
  yield?: string;
}

// Example API function to fetch vehicle data
const fetchVehicleData = async (id: string): Promise<VehicleData> => {
  // In a real app, this would be an API call
  // Mock data for now
  return {
    id,
    type: "keke",
    regNo: "234-6573-ABJ",
    image: "/auto-rickshaw.jpg", // This would be a real URL in production
    status: "Moving",
    distanceCovered: "56km",
    yield: "N10,000",
  };
};

// This is the page component
const EditVehiclePage: React.FC = () => {
  const router = useRouter();
  const params = useParams();
  const vehicleId = params.id as string;

  const [isLoading, setIsLoading] = useState(true);
  const [isEditMode, setIsEditMode] = useState(false);
  const [vehicleType, setVehicleType] = useState("");
  const [vehicleNumber, setVehicleNumber] = useState("");
  const [vehicleImage, setVehicleImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  // Fetch vehicle data on page load
  useEffect(() => {
    const loadVehicleData = async () => {
      try {
        setIsLoading(true);
        const data = await fetchVehicleData(vehicleId);
        setVehicleType(data.type);
        setVehicleNumber(data.regNo);
        if (data.image) {
          setImagePreview(data.image);
        }
      } catch (error) {
        console.error("Error loading vehicle data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    if (vehicleId) {
      loadVehicleData();
    }
  }, [vehicleId]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setVehicleImage(file);

      // Create a preview URL
      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Create updated vehicle data
    const updatedVehicleData = {
      id: vehicleId,
      type: vehicleType,
      regNo: vehicleNumber,
      // In a real app, you'd handle image upload separately
    };

    // Here you would make an API call to update the vehicle
    console.log("Updating vehicle:", updatedVehicleData);

    // Mock API success
    setTimeout(() => {
      // Exit edit mode and stay on the page
      setIsEditMode(false);
    }, 500);
  };

  // if (isLoading) {
  //   return (
  //     <DashboardLayout headerTitle="Edit Vehicle">
  //       <div className="flex justify-center items-center h-full">
  //         <p>Loading vehicle data...</p>
  //       </div>
  //     </DashboardLayout>
  //   );
  // }

  return (
      <div className="max-w-2xl mx-auto p-4">
        <div className="flex items-center mb-6">
          <Link href="/assets/manage-fleet" className="mr-2">
            <ChevronLeft size={20} />
          </Link>
          <h1 className="text-xl font-semibold">Edit Vehicle</h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex gap-8 items-center">
            <div className="mb-4">
              <label className="block font-medium text-sm mb-3">Vehicle Image</label>
              {imagePreview ? (
                <img
                  src={imagePreview}
                  alt="Vehicle"
                  className="w-24 h-24 object-cover"
                />
              ) : (
                <div className="w-24 h-24 bg-gray-200 flex items-center justify-center rounded">
                  <span className="text-gray-500">No image</span>
                </div>
              )}
            </div>
            {isEditMode && (
              <div>
                <p className="text-sm mb-2">Upload a .png or .jpg</p>
                <label
                  htmlFor="file-upload"
                  className="cursor-pointer bg-white px-4 py-2 border rounded-lg text-sm"
                >
                  Browse files
                </label>
                <input
                  id="file-upload"
                  type="file"
                  accept=".png,.jpg,.jpeg"
                  className="hidden"
                  onChange={handleImageChange}
                  disabled={!isEditMode}
                />
              </div>
            )}
          </div>

          <div className="space-y-2">
            <label htmlFor="vehicleType" className="block font-medium text-sm">
              Vehicle Type
            </label>
            {isEditMode ? (
              <div className="relative">
                <Select.Root
                  value={vehicleType}
                  onValueChange={setVehicleType}
                  disabled={!isEditMode}
                >
                  <Select.Trigger
                    className="w-full p-3 border rounded-lg flex items-center justify-between bg-white"
                    aria-label="Vehicle Type"
                    id="vehicleType"
                  >
                    <Select.Value placeholder="Choose Vehicle Type" />
                    <Select.Icon>
                      <ChevronDown size={16} />
                    </Select.Icon>
                  </Select.Trigger>
                  
                  <Select.Portal>
                    <Select.Content
                      className="overflow-hidden bg-white rounded-md shadow-lg w-[300px]"
                      position="popper"
                      sideOffset={5}
                    >
                      <Select.Viewport className="p-1">
                        <Select.Group>
                          <Select.Item value="car" className="relative flex items-center h-10 px-6 text-sm rounded outline-none select-none hover:bg-gray-100 cursor-pointer">
                            <Select.ItemText>Car</Select.ItemText>
                          </Select.Item>
                          <Select.Item value="truck" className="relative flex items-center h-10 px-6 text-sm rounded outline-none select-none hover:bg-gray-100 cursor-pointer">
                            <Select.ItemText>Truck</Select.ItemText>
                          </Select.Item>
                          <Select.Item value="bike" className="relative flex items-center h-10 px-6 text-sm rounded outline-none select-none hover:bg-gray-100 cursor-pointer">
                            <Select.ItemText>Bike</Select.ItemText>
                          </Select.Item>
                          <Select.Item value="keke" className="relative flex items-center h-10 px-6 text-sm rounded outline-none select-none hover:bg-gray-100 cursor-pointer">
                            <Select.ItemText>Keke</Select.ItemText>
                          </Select.Item>
                        </Select.Group>
                      </Select.Viewport>
                    </Select.Content>
                  </Select.Portal>
                </Select.Root>
              </div>
            ) : (
              <div className="w-full p-3 border rounded-lg bg-gray-50">
                {vehicleType || "Not specified"}
              </div>
            )}
          </div>

          <div className="space-y-2">
            <label htmlFor="vehicleNumber" className="block font-medium text-sm">
              Vehicle Number
            </label>
            {isEditMode ? (
              <input
                id="vehicleNumber"
                type="text"
                value={vehicleNumber}
                onChange={(e) => setVehicleNumber(e.target.value)}
                placeholder="Enter asset name"
                className="w-full p-3 border rounded-lg"
                disabled={!isEditMode}
                required
              />
            ) : (
              <div className="w-full p-3 border rounded-lg bg-gray-50">
                {vehicleNumber}
              </div>
            )}
          </div>

          <div className="flex justify-end">
            {isEditMode ? (
              <Button
                type="submit"
                className="bg-black text-white hover:bg-black/80 px-6"
              >
                Update Changes
              </Button>
            ) : (
              <Button
                type="button"
                className="bg-black text-white hover:bg-black/80 px-6"
                onClick={() => setIsEditMode(true)}
              >
                Edit
              </Button>
            )}
          </div>
        </form>
      </div>
  );
};

export default EditVehiclePage;