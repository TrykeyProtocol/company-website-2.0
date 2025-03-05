"use client";

import React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/library/components/atoms/alert-dialog";
import { Trash } from "lucide-react";

interface DeleteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title?: string;
  description?: string;
}

const DeleteModal: React.FC<DeleteModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  title = "Are you sure?",
  description = "This action cannot be undone. This will permanently delete this asset and remove its data from our servers."
}) => {
  return (
    <AlertDialog open={isOpen} onOpenChange={onClose}>
      <AlertDialogContent className=" w-2/3 bg-white rounded-lg">
      <div className="flex justify-center items-center">

      <div className=" p-3 bg-red-100 rounded-full"><Trash size={20} className=" text-red-500" /></div>
      </div>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription className=" text-gray-400 text-xs">
            {description}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div className=" flex items-center gap-8">
          <AlertDialogCancel className=" mt-0 w-full">Cancel</AlertDialogCancel>
          <AlertDialogAction 
            onClick={onConfirm}
            className="bg-red-500 hover:bg-red-600 text-white w-full"
          >
            Confirm
          </AlertDialogAction>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteModal;