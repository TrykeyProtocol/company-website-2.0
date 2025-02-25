"use client"
import React, { useState } from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/library/components/atoms/drawer";
import { ListFilter } from "lucide-react";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { Calendar } from "@/library/components/atoms/calender";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/library/components/atoms/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/library/components/atoms/select";
import { Button } from "@/library/components/atoms/button-cn";

const FilterDrawer = () => {
  const [fromDate, setFromDate] = useState<Date | undefined>(new Date());
  const [toDate, setToDate] = useState<Date | undefined>(new Date());

  return (
    <Drawer>
      <DrawerTrigger>
        <ListFilter className="text-gray-500" />
      </DrawerTrigger>
      <DrawerContent className=" h-content rounded-t-lg mx-auto bg-white">
        <div className="px-6 pt-6 pb-12">
          <DrawerHeader className="p-0 flex items-center justify-between">
            <DrawerTitle className="text-sm font-normal">Asset</DrawerTitle>
            <Button variant="ghost" className="text-black font-normal font-sm">
              Reset
            </Button>
          </DrawerHeader>

          <div className="mt-2">
            <h3 className="text-sm font-normal mb-2">Fleet</h3>
            <Select>
              <SelectTrigger className="w-full border border-gray-200 rounded-lg h-14">
                <SelectValue placeholder="Choose fleet" className=" text-gray-300" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                <SelectItem value="fleet1">Fleet 1</SelectItem>
                <SelectItem value="fleet2">Fleet 2</SelectItem>
                <SelectItem value="fleet3">Fleet 3</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="mt-6">
            <h3 className="text-xs font-normal text-gray-400">Filter by:</h3>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <h3 className="text-sm font-normal">Payment Status</h3>
            <Button variant="ghost" className="text-black font-normal text-sm">
              Reset
            </Button>
          </div>

          <div className="mt-2">
            <h3 className="text-sm font-normal mb-2">Status</h3>
            <Select>
              <SelectTrigger className="w-full border border-gray-200 rounded-lg h-14">
                <SelectValue placeholder="Choose payment status" />
              </SelectTrigger>
              <SelectContent className=" bg-white">
                <SelectItem value="paid">Paid</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="failed">Failed</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <h3 className="text-sm font-normal">Date Range</h3>
            <Button variant="ghost" className="text-black font-normal text-sm">
              Reset
            </Button>
          </div>

          <div className="mt-2">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-xs text-gray-400 mb-2">From</p>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full justify-between h-14 font-normal"
                    >
                      {fromDate ? format(fromDate, "MM-dd-yyyy") : "Pick a date"}
                      <CalendarIcon className="h-5 w-5 opacity-50" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={fromDate}
                      onSelect={setFromDate}
                      initialFocus
                      className=" bg-white"
                    />
                  </PopoverContent>
                </Popover>
              </div>
              <div>
                <p className="text-xs text-gray-400 mb-2">To</p>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full justify-between h-14 font-normal"
                    >
                      {toDate ? format(toDate, "MM-dd-yyyy") : "Pick a date"}
                      <CalendarIcon className="h-5 w-5 opacity-50" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={toDate}
                      onSelect={setToDate}
                      initialFocus
                      className=" bg-white"
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>
          </div>
        </div>

        <DrawerFooter className="border-t p-0">
          <div className="grid grid-cols-2 gap-4 px-4 py-5">
            <DrawerClose asChild>
              <Button
                variant="outline"
                className="w-full h-14 rounded-lg font-semibold"
              >
                Cancel
              </Button>
            </DrawerClose>
            <DrawerClose asChild>
              <Button className="w-full h-14 rounded-lg font-semibold bg-black text-white">
                Apply
              </Button>
            </DrawerClose>
          </div>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default FilterDrawer;