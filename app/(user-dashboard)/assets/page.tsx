"use client"

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import DashboardLayout from "@/library/components/templates/dashboard-layout-wrapper";
import { Button } from "@/library/components/atoms/button-cn";

// Types
import { Vehicle, ViewState, FilterState } from "@/library/types/assets";

// Dynamic imports for components with browser dependencies
const AssetMap = dynamic(() => import("@/library/components/atoms/assets-map"), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-screen w-full">
      <p>Loading map...</p>
    </div>
  ),
});

const VehicleDrawer = dynamic(() => import("@/library/components/atoms/vehicle-drawer"), {
  ssr: false,
});

const FilterControls = dynamic(() => import("@/library/components/atoms/map-filter-controls"), {
  ssr: false,
});

const FleetSelector = dynamic(() => import("@/library/components/atoms/map-fleet-selector"), {
  ssr: false,
});

// Mock data for vehicles - in a real app, this would come from an API
const MOCK_VEHICLES: Vehicle[] = [
  {
    id: "234-6573-ABJ",
    location: { latitude: 9.0765, longitude: 7.3986 }, // Abuja
    status: "moving", // moving, idle, inactive
    fleet: "Wuye Fleet",
    passengers: 5,
    speed: 100, // km/h
    driving: { hours: 4, minutes: 30 },
    distance: 74, // km
    mileage: 3.2, // km/l
    vehicleType: "keke", // keke (tricycle)
  },
  {
    id: "544-7812-KDN",
    location: { latitude: 9.1765, longitude: 7.4286 }, // Near Garam
    status: "moving",
    fleet: "Wuye Fleet",
    passengers: 3,
    speed: 85,
    driving: { hours: 2, minutes: 15 },
    distance: 45,
    mileage: 2.8,
    vehicleType: "keke",
  },
  {
    id: "122-3456-WUS",
    location: { latitude: 9.0265, longitude: 7.2986 }, // Near Suleja
    status: "idle",
    fleet: "Wuye Fleet",
    passengers: 0,
    speed: 0,
    driving: { hours: 0, minutes: 0 },
    distance: 0,
    mileage: 0,
    vehicleType: "keke",
  },
  {
    id: "765-9012-GWR",
    location: { latitude: 9.0525, longitude: 7.4386 }, // Gwarinpa
    status: "inactive",
    fleet: "Wuye Fleet",
    passengers: 0,
    speed: 0,
    driving: { hours: 0, minutes: 0 },
    distance: 0,
    mileage: 0,
    vehicleType: "keke",
  },
  {
    id: "322-4567-KRS",
    location: { latitude: 8.9565, longitude: 7.5186 }, // Karshi
    status: "moving",
    fleet: "Wuye Fleet",
    passengers: 2,
    speed: 60,
    driving: { hours: 1, minutes: 45 },
    distance: 30,
    mileage: 3.0,
    vehicleType: "keke",
  },
];

const AssetsScreen: React.FC = () => {
  const router = useRouter();

  // State management
  const [viewport, setViewport] = useState<ViewState>({
    center: [9.0765, 7.3986],
    zoom: 10,
  });

  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);
  const [filters, setFilters] = useState<FilterState>({
    moving: true,
    idle: true,
    inactive: true,
  });
  const [displayedFleet, setDisplayedFleet] = useState<string>("Wuye Fleet");

  // Filter vehicles based on current filters
  const filteredVehicles = MOCK_VEHICLES.filter(
    (vehicle) => filters[vehicle.status]
  );

  // Event handlers
  const handleVehicleClick = (vehicle: Vehicle) => {
    setSelectedVehicle(vehicle);
    setIsDrawerOpen(true);
  };

  const toggleFilter = (status: keyof FilterState) => {
    setFilters((prev) => ({
      ...prev,
      [status]: !prev[status],
    }));
  };

  const handleFleetChange = (value: string) => {
    setDisplayedFleet(value);
  };

  const handleViewVehicle = (vehicleId: string) => {
    router.push(`/assets/${vehicleId}`);
  };

  return (
    <DashboardLayout headerTitle="Assets" hideNotification>
      <div className="h-screen w-screen relative -m-4 left-0 right-0 overflow-hidden">
        {/* Map Component */}
        <AssetMap
          viewport={viewport}
          setViewport={setViewport}
          vehicles={filteredVehicles}
          onVehicleClick={handleVehicleClick}
        />

        {/* Fleet Selector */}
        <div className="absolute top-4 right-4 z-50">
          <FleetSelector
            value={displayedFleet}
            onChange={handleFleetChange}
            options={["Wuye Fleet", "Garki Fleet", "Maitama Fleet"]}
          />
        </div>

        {/* Filter Controls */}
        <FilterControls
          isOpen={isFilterOpen}
          setIsOpen={setIsFilterOpen}
          filters={filters}
          toggleFilter={toggleFilter}
        />

        {/* Manage Fleet Button */}
        <div className="fixed bottom-20 right-4 z-50">
          <Button className="bg-black text-white px-6 py-2 rounded-lg" onClick={()=> router.push("/assets/manage-fleet")}>
            Manage Fleet
          </Button>
        </div>

        {/* Vehicle Details Drawer */}
        {selectedVehicle && (
          <VehicleDrawer
            isOpen={isDrawerOpen}
            setIsOpen={setIsDrawerOpen}
            vehicle={selectedVehicle}
            onViewVehicle={handleViewVehicle}
          />
        )}
      </div>
    </DashboardLayout>
  );
};

export default AssetsScreen;