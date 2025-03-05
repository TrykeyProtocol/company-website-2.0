"use client";

import React, { useState, useMemo, useEffect } from "react";
import { Search, ChevronLeft, ChevronRight, ChevronDown, MoreVertical } from "lucide-react";
import { Input } from "@/library/components/atoms/input";
import { Button } from "@/library/components/atoms/button-cn";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/library/components/atoms/dropdown-menu";
import { Tabs, TabsList, TabsTrigger } from "@/library/components/atoms/tabs";
import DeleteModal from "@/library/components/atoms/delete-modal";

// Types
export type VehicleStatus = "Moving" | "Idling" | "Inactive";

export interface Vehicle {
  id: string | number;
  regNo: string;
  distanceCovered: string;
  yield: string;
  status: VehicleStatus;
}

interface VehicleTableProps {
  vehicles: Vehicle[];
  itemsPerPage?: number;
  onViewVehicle?: (id: string | number) => void;
  onEditVehicle?: (id: string | number) => void;
  onDeleteVehicle?: (id: string | number) => void;
}

const VehicleTable: React.FC<VehicleTableProps> = ({
  vehicles,
  itemsPerPage = 15,
  onViewVehicle,
  onEditVehicle,
  onDeleteVehicle,
}) => {
  const [currentTab, setCurrentTab] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);
  const [vehicleToDelete, setVehicleToDelete] = useState<string | number | null>(null);

  // Filter vehicles based on search query and selected tab
  const filteredVehicles = useMemo(() => {
    let result = [...vehicles];

    // Apply status filter if not "all"
    if (currentTab !== "all") {
      const status = currentTab.charAt(0).toUpperCase() + currentTab.slice(1) as VehicleStatus;
      result = result.filter(vehicle => vehicle.status === status);
    }

    // Apply search filter
    if (searchQuery.trim() !== "") {
      const query = searchQuery.toLowerCase();
      result = result.filter(vehicle => 
        vehicle.regNo.toLowerCase().includes(query) ||
        vehicle.yield.toLowerCase().includes(query) ||
        vehicle.distanceCovered.toLowerCase().includes(query)
      );
    }

    return result;
  }, [vehicles, currentTab, searchQuery]);

  // Calculate pagination
  const totalPages = Math.ceil(filteredVehicles.length / itemsPerPage);
  const currentVehicles = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredVehicles.slice(startIndex, endIndex);
  }, [filteredVehicles, currentPage, itemsPerPage]);

  // Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [currentTab, searchQuery]);

  // Pagination handlers
  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Delete handlers
  const handleDeleteClick = (id: string | number) => {
    setVehicleToDelete(id);
    setIsDeleteModalOpen(true);
  };

  const handleDeleteConfirm = () => {
    if (vehicleToDelete !== null && onDeleteVehicle) {
      onDeleteVehicle(vehicleToDelete);
    }
    setIsDeleteModalOpen(false);
    setVehicleToDelete(null);
  };

  const handleDeleteCancel = () => {
    setIsDeleteModalOpen(false);
    setVehicleToDelete(null);
  };

  // Render status badge with appropriate color
  const renderStatusBadge = (status: VehicleStatus) => {
    const colorMap = {
      Moving: "bg-green-100 text-green-600",
      Idling: "bg-yellow-100 text-yellow-600",
      Inactive: "bg-gray-200 text-gray-500",
    };

    return (
      <div className={`inline-flex items-center rounded-full px-3 py-1 text-xs ${colorMap[status]}`}>
        <div className={`mr-1 h-2 w-2 rounded-full ${status === "Moving" ? "bg-green-500" : status === "Idling" ? "bg-yellow-500" : "bg-gray-400"}`}></div>
        {status}
      </div>
    );
  };

  return (
    <div className="w-full space-y-4">
      {/* Search bar */}
      <div className="relative py-1.5">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
        <Input
          placeholder="Search vehicles"
          className="pl-10 rounded-lg border-gray-200 h-10"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Status tabs */}
      <Tabs value={currentTab} onValueChange={setCurrentTab} className="w-full">
        <TabsList className="w-full grid grid-cols-4 bg-transparent">
          <TabsTrigger
            value="all"
            className={`rounded-none border-b-2 pb-2 shadow-none text-gray-400 font-medium text-sm ${
              currentTab === "all" && "border-black font-semibold text-gray-800"
            }`}
          >
            All
          </TabsTrigger>
          <TabsTrigger
            value="moving"
            className={`rounded-none border-b-2 pb-2 shadow-none text-gray-400 font-medium text-sm ${
              currentTab === "moving" && "border-black font-semibold text-gray-800"
            }`}
          >
            Moving
          </TabsTrigger>
          <TabsTrigger
            value="idling"
            className={`rounded-none border-b-2 pb-2 shadow-none text-gray-400 font-medium text-sm ${
              currentTab === "idling" && "border-black font-semibold text-gray-800"
            }`}
          >
            Idling
          </TabsTrigger>
          <TabsTrigger
            value="inactive"
            className={`rounded-none border-b-2 pb-2 shadow-none text-gray-400 font-medium text-sm ${
              currentTab === "inactive" && "border-black font-semibold text-gray-800"
            }`}
          >
            Inactive
          </TabsTrigger>
        </TabsList>
      </Tabs>

      {/* Table header */}
      <div className="grid grid-cols-4 gap-4 text-xs py-3 px-4 rounded-t-md border-b">
        <div className="flex items-center font-semibold">
          Reg No
          {/* <ChevronDown size={16} className="ml-1" /> */}
        </div>
        <div className="font-semibold">Distance covered</div>
        <div className="font-semibold">Yield</div>
        <div className="font-semibold">Status</div>
      </div>

      {/* Table rows */}
      <div className="divide-y border-b text-xs">
        {currentVehicles.length > 0 ? (
          currentVehicles.map((vehicle) => (
            <div key={vehicle.id} className="grid grid-cols-4 gap-4 py-4 px-4 items-center">
              <div>{vehicle.regNo}</div>
              <div>{vehicle.distanceCovered}</div>
              <div>{vehicle.yield}</div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                {renderStatusBadge(vehicle.status)}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm" className="h-7 w-7 p-0 min-w-0">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="bg-white">
                    <DropdownMenuItem onClick={() => onViewVehicle?.(vehicle.id)}>
                      View Details
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => onEditVehicle?.(vehicle.id)}>
                      Edit
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      className="text-red-600"
                      onClick={() => handleDeleteClick(vehicle.id)}
                    >
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          ))
        ) : (
          <div className="py-8 text-center text-gray-500">
            No vehicles found matching your criteria
          </div>
        )}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center gap-4 py-4">
        <Button
          variant="outline"
          size="icon"
          onClick={goToPreviousPage}
          disabled={currentPage === 1}
          className={currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <span>
          {currentPage}/{totalPages || 1}
        </span>
        <Button
          variant="outline"
          size="icon"
          onClick={goToNextPage}
          disabled={currentPage >= totalPages}
          className={currentPage >= totalPages ? "opacity-50 cursor-not-allowed" : ""}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      {/* Delete Confirmation Modal */}
      <DeleteModal
        isOpen={isDeleteModalOpen}
        onClose={handleDeleteCancel}
        onConfirm={handleDeleteConfirm}
        title="Delete Vehicle"
        description="Are you sure you want to delete this vehicle? This action cannot be undone."
      />
    </div>
  );
};

export default VehicleTable;