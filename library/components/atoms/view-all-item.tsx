"use client";

import React, { useState } from "react";
import { Edit, FilePenLine, MoreVertical, Trash } from "lucide-react";
import { Button } from "../atoms/button-cn";
import { Card } from "../atoms/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "../atoms/select";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { useRouter } from "next/navigation";

// Define TypeScript interfaces
export interface Asset {
  id: number | string;
  name: string;
  yieldGenerated: string;
  expectedYield: string;
  vehicles: number;
  image: string;
}

interface AssetListItemProps {
  asset: Asset;
  onEdit: (id: number | string) => void;
  onRemove: (id: number | string) => void;
  onView: (id: number | string) => void;
}

const AssetListItem: React.FC<AssetListItemProps> = ({
  asset,
  onEdit,
  onRemove,
  onView,
}) => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  return (
    <Card className="mb-4 overflow-hidden rounded-lg border bg-cover"      style={{
      backgroundImage: "url('/images/dashboard/hotel/hotel.png')", 
    }}>
      <div className="flex p-3">
        {/* <div className=" shrink-0">
          <Image
            src="/images/dashboard/hotel/hotel.png"
            alt={asset.name}
            className="h-full w-full object-cover rounded-2xl"
            width={111}
            height={40}
          />
        </div> */}

        <div className="flex flex-1 flex-col p-4">
          <div className="mb-2 flex items-center justify-between">
            <div className="flex items-center">
              <div className="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-white">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 6H14L17 9H21C21.5523 9 22 9.44772 22 10V16C22 16.5523 21.5523 17 21 17H20"
                    stroke="#EE774A"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M2 17H3C3.55228 17 4 16.5523 4 16V10C4 9.44772 4.55228 9 5 9H7L10 6"
                    stroke="#EE774A"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <circle
                    cx="7"
                    cy="17"
                    r="2"
                    stroke="#EE774A"
                    strokeWidth="2"
                  />
                  <circle
                    cx="17"
                    cy="17"
                    r="2"
                    stroke="#EE774A"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold">{asset.name}</h3>
            </div>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <MoreVertical className="h-5 w-5 text-white" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className=" bg-white border p-3 rounded-lg w-36 space-y-4 cursor-pointer">
                <DropdownMenuItem onClick={() => onRemove(asset.id)} className=" flex items-center text-gray-500">
                  <Trash className="mr-2 h-4 w-4" />
                  <span className=" text-xs">Remove</span>
                </DropdownMenuItem>
                <DropdownMenuItem 
                // onClick={() => onEdit(asset.id)} 
                onClick={() => router.push("/assets/manage-fleet/edit-asset")}

                className=" flex items-center text-gray-500">
                  <Edit className="mr-2 h-4 w-4" />
                  <span className=" text-xs">Edit Asset</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div className=" flex items-center justify-center gap-4 my-4 bg-white  py-2 px-6 rounded-3xl">
            <div className="flex items-center flex-col">
              <p className="text-[10px] whitespace-nowrap">Yield Generated</p>
              <p className="text-[10px] font-bold whitespace-nowrap text-lightMode-brand-accent">
                ₦300000.00
              </p>
            </div>
            <div className="flex items-center flex-col">
              <p className="text-[10px] whitespace-nowrap">Expected Yield</p>
              <p className="text-[10px] font-bold whitespace-nowrap text-lightMode-brand-accent">
                ₦3000.00
              </p>
            </div>
            <div className="flex items-center flex-col">
              <p className="text-[10px] whitespace-nowrap">
                Number of Vehicles
              </p>
              <p className="text-[10px] font-bold whitespace-nowrap text-lightMode-brand-accent">
                20
              </p>
            </div>
          </div>

          <div className="flex justify-end">
            <Button
              // onClick={() => onView(asset.id)}
              onClick={() => router.push("/assets")}
              className="rounded-md bg-white px-4 py-2 text-xs font-medium text-gray-800 hover:bg-white/90"
            >
              View Asset
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default AssetListItem;
