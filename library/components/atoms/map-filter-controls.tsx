"use client";

import React from "react";
import { Filter } from "lucide-react";
import { Button } from "@/library/components/atoms/button-cn";
import { Checkbox } from "@/library/components/atoms/checkbox";
import { FilterState } from "@/library/types/assets";

interface FilterControlsProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  filters: FilterState;
  toggleFilter: (status: keyof FilterState) => void;
}

const FilterControls: React.FC<FilterControlsProps> = ({
  isOpen,
  setIsOpen,
  filters,
  toggleFilter,
}) => {
  return (
    <div className="fixed top-4 right-4 z-50">
      <Button
        variant="outline"
        size="icon"
        className="bg-white rounded-full p-2 shadow-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Filter className="h-5 w-5" />
      </Button>

      {/* Filter Dropdown */}
      {isOpen && (
        <div className="fixed top-16 left-4 bg-white rounded-lg shadow-lg p-4 w-48 z-50">
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="moving"
                checked={filters.moving}
                onCheckedChange={() => toggleFilter("moving")}
              />
              <label htmlFor="moving" className="text-sm">
                Moving
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="idle"
                checked={filters.idle}
                onCheckedChange={() => toggleFilter("idle")}
              />
              <label htmlFor="idle" className="text-sm">
                Idle
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="inactive"
                checked={filters.inactive}
                onCheckedChange={() => toggleFilter("inactive")}
              />
              <label htmlFor="inactive" className="text-sm">
                Inactive
              </label>
            </div>
          </div>
          <div className="mt-4 flex justify-between">
            <Button
              variant="outline"
              onClick={() => setIsOpen(false)}
            >
              Cancel
            </Button>
            <Button onClick={() => setIsOpen(false)}>Apply</Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterControls;