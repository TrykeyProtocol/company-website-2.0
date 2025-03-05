"use client";

import React, { useState } from "react";
import { Button } from "@/library/components/atoms/button-cn";
import { ChevronLeft, ChevronDown } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import DashboardLayout from "@/library/components/templates/dashboard-layout-wrapper";
import * as Select from "@radix-ui/react-select";

const AddVehiclePage: React.FC = () => {
  const router = useRouter();
  const [vehicleType, setVehicleType] = useState("");
  const [vehicleNumber, setVehicleNumber] = useState("");
  const [vehicleImage, setVehicleImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

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

    // Create vehicle data object
    const vehicleData = {
      type: vehicleType,
      number: vehicleNumber,
      // In a real application, you'd upload the image to a server
      // and get back a URL to store in your database
    };

    // Here you would make an API call to save the new vehicle
    console.log("Adding new vehicle:", vehicleData);

    // Mock API success
    setTimeout(() => {
      // Navigate back to the fleet management page
      router.push("/assets/manage-fleets");
    }, 500);
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <div className="flex items-center mb-6">
        <Link href="/assets/manage-fleet" className="mr-2">
          <ChevronLeft size={20} />
        </Link>
        <h1 className="text-xl font-semibold">Add Vehicle</h1>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label htmlFor="vehicleType" className="block font-medium text-sm">
            Vehicle Type
          </label>
          <div className="relative">
            <Select.Root value={vehicleType} onValueChange={setVehicleType}>
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
                  className="overflow-hidden bg-white rounded-md shadow-lg w-[200px]"
                  position="popper"
                  sideOffset={5}
                >
                  <Select.Viewport className="p-1">
                    <Select.Group>
                      <Select.Item
                        value="car"
                        className="relative flex items-center h-10 px-6 text-sm rounded outline-none select-none hover:bg-gray-100 cursor-pointer"
                      >
                        <Select.ItemText>Car</Select.ItemText>
                      </Select.Item>
                      <Select.Item
                        value="truck"
                        className="relative flex items-center h-10 px-6 text-sm rounded outline-none select-none hover:bg-gray-100 cursor-pointer"
                      >
                        <Select.ItemText>Truck</Select.ItemText>
                      </Select.Item>
                      <Select.Item
                        value="bike"
                        className="relative flex items-center h-10 px-6 text-sm rounded outline-none select-none hover:bg-gray-100 cursor-pointer"
                      >
                        <Select.ItemText>Bike</Select.ItemText>
                      </Select.Item>
                      <Select.Item
                        value="keke"
                        className="relative flex items-center h-10 px-6 text-sm rounded outline-none select-none hover:bg-gray-100 cursor-pointer"
                      >
                        <Select.ItemText>Keke</Select.ItemText>
                      </Select.Item>
                    </Select.Group>
                  </Select.Viewport>
                </Select.Content>
              </Select.Portal>
            </Select.Root>
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="vehicleNumber" className="block font-medium text-sm">
            Vehicle Number
          </label>
          <input
            id="vehicleNumber"
            type="text"
            value={vehicleNumber}
            onChange={(e) => setVehicleNumber(e.target.value)}
            placeholder="Enter asset name"
            className="w-full p-3 border rounded-lg"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="block font-medium text-sm">Vehicle Image</label>
          <div className="border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center">
            {imagePreview ? (
              <div className="mb-4">
                <img
                  src={imagePreview}
                  alt="Vehicle preview"
                  className="max-h-40 object-contain"
                />
              </div>
            ) : (
              <div className="mb-4 text-gray-400">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 16L8.586 11.414C8.96106 11.0391 9.46967 10.8284 10 10.8284C10.5303 10.8284 11.0389 11.0391 11.414 11.414L16 16M14 14L15.586 12.414C15.9611 12.0391 16.4697 11.8284 17 11.8284C17.5303 11.8284 18.0389 12.0391 18.414 12.414L20 14M14 8H14.01M6 20H18C18.5304 20 19.0391 19.7893 19.4142 19.4142C19.7893 19.0391 20 18.5304 20 18V6C20 5.46957 19.7893 4.96086 19.4142 4.58579C19.0391 4.21071 18.5304 4 18 4H6C5.46957 4 4.96086 4.21071 4.58579 4.58579C4.21071 4.96086 4 5.46957 4 6V18C4 18.5304 4.21071 19.0391 4.58579 19.4142C4.96086 19.7893 5.46957 20 6 20Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            )}
            <p className="text-sm text-center mb-2">Upload a .png or .jpg</p>
            <div>
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
              />
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <Button
            type="submit"
            className="bg-black text-white hover:bg-black/80 w-full"
          >
            Add Vehicle
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddVehiclePage;
