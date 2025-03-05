"use client";

import { Card, CardContent } from "@/library/components/atoms/card";
import DashboardCard from "@/library/components/atoms/dashboard-card";
import { BarChartComponent } from "@/library/components/organisms/bar-chart";
import { LineGraph } from "@/library/components/organisms/line-graph";
import { RadialChart } from "@/library/components/organisms/radial-graph";
import DashboardLayout from "@/library/components/templates/dashboard-layout-wrapper";
import { ChevronRight, Plus } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import VehicleTable, {
  Vehicle,
} from "@/library/components/atoms/vehicle-table";
import { Button } from "@/library/components/atoms/button-cn";

const AssetsPage = () => {
  const router = useRouter();
  const initialVehicles: Vehicle[] = [
    {
      id: 1,
      regNo: "234-6573-ABJ",
      distanceCovered: "56km",
      yield: "N10,000",
      status: "Moving",
    },
    {
      id: 2,
      regNo: "234-6573-ABJ",
      distanceCovered: "56km",
      yield: "N10,000",
      status: "Inactive",
    },
    {
      id: 3,
      regNo: "234-6573-ABJ",
      distanceCovered: "56km",
      yield: "N10,000",
      status: "Inactive",
    },
    {
      id: 4,
      regNo: "234-6573-ABJ",
      distanceCovered: "56km",
      yield: "N10,000",
      status: "Idling",
    },
    {
      id: 5,
      regNo: "234-6573-ABJ",
      distanceCovered: "56km",
      yield: "N10,000",
      status: "Idling",
    },
    {
      id: 6,
      regNo: "234-6573-ABJ",
      distanceCovered: "56km",
      yield: "N10,000",
      status: "Inactive",
    },
    {
      id: 7,
      regNo: "234-6573-ABJ",
      distanceCovered: "56km",
      yield: "N10,000",
      status: "Moving",
    },
    {
      id: 8,
      regNo: "234-6573-ABJ",
      distanceCovered: "56km",
      yield: "N10,000",
      status: "Moving",
    },
    {
      id: 9,
      regNo: "234-6573-ABJ",
      distanceCovered: "56km",
      yield: "N10,000",
      status: "Moving",
    },
    {
      id: 10,
      regNo: "234-6573-ABJ",
      distanceCovered: "56km",
      yield: "N10,000",
      status: "Moving",
    },
    {
      id: 11,
      regNo: "234-6573-ABJ",
      distanceCovered: "56km",
      yield: "N10,000",
      status: "Moving",
    },
    {
      id: 12,
      regNo: "234-6573-ABJ",
      distanceCovered: "56km",
      yield: "N10,000",
      status: "Moving",
    },
    {
      id: 13,
      regNo: "234-6573-ABJ",
      distanceCovered: "56km",
      yield: "N10,000",
      status: "Moving",
    },
    {
      id: 14,
      regNo: "234-6573-ABJ",
      distanceCovered: "56km",
      yield: "N10,000",
      status: "Moving",
    },
    {
      id: 15,
      regNo: "234-6573-ABJ",
      distanceCovered: "56km",
      yield: "N10,000",
      status: "Moving",
    },
    {
      id: 16,
      regNo: "234-6573-ABJ",
      distanceCovered: "56km",
      yield: "N10,000",
      status: "Moving",
    },
  ];

  const [vehicles, setVehicles] = useState<Vehicle[]>(initialVehicles);

  const handleViewVehicle = (id: string | number) => {
    console.log(`View vehicle with ID: ${id}`);
    // Navigate to vehicle details page
    router.push(`/assets/manage-fleet/vehicle/${id}`);
  };

  const handleEditVehicle = (id: string | number) => {
    console.log(`Edit vehicle with ID: ${id}`);
    // Navigate to edit vehicle page
    router.push(`/assets/manage-fleet/edit-vehicle?id=${id}`);
  };

  const handleDeleteVehicle = (id: string | number) => {
    console.log(`Delete vehicle with ID: ${id}`);
    // Remove vehicle from the list
    setVehicles(vehicles.filter(vehicle => vehicle.id !== id));
  };

  const handleAddVehicle = () => {
    console.log("Add new vehicle");
    // Navigate to add vehicle page
    router.push("/assets/manage-fleet/add-vehicle");
  };

  return (
    <DashboardLayout headerTitle="Assets">
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center mb-1">
          <h2 className="font-bold text-xl">Fleets</h2>
          <div className="flex items-center text-gray-400 text-xs">
            <Link href={"/dashboard/view-all"}>View all</Link>
            <ChevronRight size={20} />
          </div>
        </div>
        <div className="flex overflow-x-auto gap-4">
          <DashboardCard />
          <DashboardCard />
        </div>

        <h2 className="font-bold text-xs mt-2">Today&apos;s analytics</h2>
        <div className="grid grid-cols-2 gap-4">
          <Card>
            <CardContent className="p-5 flex flex-col items-center gap-1">
              <h3 className="text-xl font-bold text-lightMode-brand-primary">
                70
              </h3>
              <p className="text-gray-700 text-sm">Active fleets</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 flex flex-col items-center gap-1">
              <h3 className="text-xl font-bold text-lightMode-brand-primary">
                ₦20,0000
              </h3>
              <p className="text-gray-700 text-sm">Yield Generated</p>
            </CardContent>
          </Card>
        </div>

        <BarChartComponent />
        <RadialChart />
      </div>
      <div className="flex justify-between items-center mt-8 mb-4">
        <p>Wuye Fleet</p>
        <Button
          onClick={handleAddVehicle}
          className="bg-black text-white hover:bg-black/80"
        >
          <Plus className="mr-2 h-4 w-4" /> Add Vehicle
        </Button>
      </div>
      {/* Vehicle Table */}
      <VehicleTable
        vehicles={vehicles}
        itemsPerPage={10}
        onViewVehicle={handleViewVehicle}
        onEditVehicle={handleEditVehicle}
        onDeleteVehicle={handleDeleteVehicle}
      />
    </DashboardLayout>
  );
};

export default AssetsPage;