"use client";

import React, { useState } from "react";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import AssetListItem from "@/library/components/atoms/view-all-item";
import DeleteModal from "@/library/components/atoms/delete-modal";

// Example assets data that would normally come from an API or props
const mockAssets = [
  {
    id: 1,
    name: "Wuye Fleet",
    yieldGenerated: "N300000.00",
    expectedYield: "N0.00",
    vehicles: 20,
    image: "/api/placeholder/150/150"
  },
  {
    id: 2,
    name: "Wuye Fleet",
    yieldGenerated: "N300000.00",
    expectedYield: "N0.00",
    vehicles: 20,
    image: "/api/placeholder/150/150"
  },
  {
    id: 3,
    name: "Wuye Fleet",
    yieldGenerated: "N300000.00",
    expectedYield: "N0.00",
    vehicles: 20,
    image: "/api/placeholder/150/150"
  },
  {
    id: 4,
    name: "Wuye Fleet",
    yieldGenerated: "N300000.00",
    expectedYield: "N0.00",
    vehicles: 20,
    image: "/api/placeholder/150/150"
  },
  {
    id: 5,
    name: "Wuye Fleet",
    yieldGenerated: "N300000.00",
    expectedYield: "N0.00",
    vehicles: 20,
    image: "/api/placeholder/150/150"
  },
  {
    id: 6,
    name: "Wuye Fleet",
    yieldGenerated: "N300000.00",
    expectedYield: "N0.00",
    vehicles: 20,
    image: "/api/placeholder/150/150"
  }
];

// Define Asset type
interface Asset {
  id: number | string;
  name: string;
  yieldGenerated: string;
  expectedYield: string;
  vehicles: number;
  image: string;
}

export default function Page() {
  const [assetsList, setAssetsList] = useState<Asset[]>(mockAssets);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [assetToDelete, setAssetToDelete] = useState<number | string | null>(null);
  
  const handleEditAsset = (id: number | string) => {
    console.log(`Edit asset with ID: ${id}`);
    // Implement your edit navigation or logic here
  };
  
  const handleRemoveClick = (id: number | string) => {
    // Store the ID of the asset to delete and open the confirmation modal
    setAssetToDelete(id);
    setIsDeleteModalOpen(true);
  };
  
  const handleDeleteConfirm = () => {
    if (assetToDelete !== null) {
      console.log(`Deleting asset with ID: ${assetToDelete}`);
      // Remove the asset from the list
      setAssetsList(assetsList.filter(asset => asset.id !== assetToDelete));
      
      // Close the modal and reset the asset to delete
      setIsDeleteModalOpen(false);
      setAssetToDelete(null);
    }
  };
  
  const handleDeleteCancel = () => {
    // Close the modal and reset the asset to delete
    setIsDeleteModalOpen(false);
    setAssetToDelete(null);
  };
  
  const handleViewAsset = (id: number | string) => {
    console.log(`View asset with ID: ${id}`);
    // Implement your navigation logic here
    // e.g., router.push(`/assets/${id}`);
  };

  return (
    <div className="container mx-auto max-w-2xl px-4 py-6">
      {/* Header with back button */}
      <div className="mb-6 flex items-center">
        <Link href="/dashboard" className="mr-3">
          <ChevronLeft size={24} />
        </Link>
        <h1 className="font-semibold">All Assets</h1>
      </div>
      
      {/* List of assets */}
      <div className="space-y-4">
        {assetsList.map((asset) => (
          <AssetListItem 
            key={asset.id} 
            asset={asset} 
            onEdit={handleEditAsset} 
            onRemove={handleRemoveClick}
            onView={handleViewAsset}
          />
        ))}
      </div>
      
      {/* Delete confirmation modal */}
      <DeleteModal 
        isOpen={isDeleteModalOpen}
        onClose={handleDeleteCancel}
        onConfirm={handleDeleteConfirm}
        title="Are you sure?"
        description="This action is irreversible. Are you sure you want to delete this vehicle? Please confirm to proceed or cancel to go back."
      />
    </div>
  );
}