"use client";

import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./select";

interface FleetSelectorProps {
  value: string;
  onChange: (value: string) => void;
  options: string[];
}

const FleetSelector: React.FC<FleetSelectorProps> = ({
  value,
  onChange,
  options,
}) => {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="w-[180px] bg-white shadow-md">
        <SelectValue placeholder="Select a fleet" />
      </SelectTrigger>
      <SelectContent className="z-50 bg-white">
        <SelectGroup>
          {options.map((option) => (
            <SelectItem key={option} value={option}>
              {option}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default FleetSelector;