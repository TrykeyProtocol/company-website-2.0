"use client";

import React, { useState } from "react";
import { Button } from "@/library/components/atoms/button-cn";
import { useRouter } from "next/navigation";
import { Check } from "lucide-react";
import DashboardLayout from "@/library/components/templates/dashboard-layout-wrapper";

// Define step types
type Step = "assetDetails" | "uploadImage" | "bankDetails";

const AddAssetPage: React.FC = () => {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState<Step>("assetDetails");
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [formData, setFormData] = useState({
    assetCategory: "",
    assetName: "",
    assetDetails: "",
    assetImage: null as File | null,
    imagePreview: null as string | null,
    subAssetFile: null as File | null,
    bankName: "",
    accountNumber: "",
    accountName: "",
  });

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, fileType: "assetImage" | "subAssetFile") => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      
      if (fileType === "assetImage") {
        // Create a preview URL for images
        const reader = new FileReader();
        reader.onload = () => {
          setFormData((prev) => ({
            ...prev,
            assetImage: file,
            imagePreview: reader.result as string,
          }));
        };
        reader.readAsDataURL(file);
      } else {
        setFormData((prev) => ({
          ...prev,
          subAssetFile: file,
        }));
      }
    }
  };

  const nextStep = () => {
    if (currentStep === "assetDetails") {
      setCurrentStep("uploadImage");
    } else if (currentStep === "uploadImage") {
      setCurrentStep("bankDetails");
    } else if (currentStep === "bankDetails") {
      // Submit the form data
      console.log("Form data submitted:", formData);
      // Show success modal
      setShowSuccessModal(true);
    }
  };

  const prevStep = () => {
    if (currentStep === "uploadImage") {
      setCurrentStep("assetDetails");
    } else if (currentStep === "bankDetails") {
      setCurrentStep("uploadImage");
    }
  };

  const goToAssetsPage = () => {
    router.push("/assets");
  };

  // Determine which circles are active for the progress indicator
  const isStepComplete = (step: string) => {
    if (step === "assetDetails" && (currentStep === "uploadImage" || currentStep === "bankDetails")) return true;
    if (step === "uploadImage" && currentStep === "bankDetails") return true;
    return false;
  };

  const isStepActive = (step: string) => {
    return currentStep === step;
  };

  return (
    <DashboardLayout headerTitle="Add Asset">
      <div className="flex flex-col">
        {/* Progress Indicator */}
        <div className="mb-6">
          <div className="flex items-center justify-between relative">
            {/* Connecting line */}
            <div className="absolute h-1 bg-gray-200 left-0 right-0 top-1/2 transform -translate-y-1/2 z-0"></div>
            
            {/* Step circles */}
            <div className={`relative w-8 h-8 rounded-full flex items-center justify-center z-10 
              ${isStepComplete("assetDetails") ? 'bg-black text-white' : 
                isStepActive("assetDetails") ? 'bg-white border-2 border-black' : 'bg-white border border-gray-300'}`}>
              {isStepComplete("assetDetails") ? <Check size={16} /> : 1}
            </div>
            <div className={`relative w-8 h-8 rounded-full flex items-center justify-center z-10 
              ${isStepComplete("uploadImage") ? 'bg-black text-white' : 
                isStepActive("uploadImage") ? 'bg-white border-2 border-black' : 'bg-white border border-gray-300'}`}>
              {isStepComplete("uploadImage") ? <Check size={16} /> : 2}
            </div>
            <div className={`relative w-8 h-8 rounded-full flex items-center justify-center z-10 
              ${isStepActive("bankDetails") ? 'bg-white border-2 border-black' : 'bg-white border border-gray-300'}`}>
              3
            </div>
          </div>
          
          {/* Step labels */}
          <div className="flex items-center justify-between mt-2 text-xs text-gray-600">
            <div className="text-center">Asset Details</div>
            <div className="text-center">Upload Image</div>
            <div className="text-center">Bank Details</div>
          </div>
        </div>

        {/* Form content */}
        <div className="pb-20">
          {currentStep === "assetDetails" && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Asset Category</label>
                <input
                  type="text"
                  name="assetCategory"
                  value={formData.assetCategory}
                  onChange={handleTextChange}
                  placeholder="Enter asset name"
                  className="w-full p-3 border rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Asset Name</label>
                <input
                  type="text"
                  name="assetName"
                  value={formData.assetName}
                  onChange={handleTextChange}
                  placeholder="Enter asset name"
                  className="w-full p-3 border rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Asset Details</label>
                <textarea
                  name="assetDetails"
                  value={formData.assetDetails}
                  onChange={handleTextChange}
                  placeholder="Enter asset details"
                  className="w-full p-3 border rounded-lg h-24"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Sub-Assets</label>
                <div className="border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center">
                  <div className="mb-4 text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path>
                      <polyline points="17 21 17 13 7 13 7 21"></polyline>
                      <polyline points="7 3 7 8 15 8"></polyline>
                    </svg>
                  </div>
                  <p className="text-sm text-center mb-2">Upload a .csv or xlsx file for subassets</p>
                  <div>
                    <label htmlFor="subasset-upload" className="cursor-pointer bg-white px-4 py-2 border rounded-lg text-sm">
                      Browse files
                    </label>
                    <input
                      id="subasset-upload"
                      type="file"
                      accept=".csv,.xlsx"
                      className="hidden"
                      onChange={(e) => handleFileChange(e, "subAssetFile")}
                    />
                  </div>
                  {formData.subAssetFile && (
                    <p className="mt-2 text-sm text-green-600">
                      {formData.subAssetFile.name}
                    </p>
                  )}
                </div>
              </div>
              <div className="flex justify-center">
                <button
                  onClick={nextStep}
                  className="px-6 py-2 bg-black text-white rounded-lg w-full max-w-xs"
                >
                  Next
                </button>
              </div>
            </div>
          )}

          {currentStep === "uploadImage" && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Upload Image</label>
                <div className="border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center min-h-[200px]">
                  {formData.imagePreview ? (
                    <div className="mb-4">
                      <img src={formData.imagePreview} alt="Asset preview" className="max-h-40 object-contain" />
                    </div>
                  ) : (
                    <div className="mb-4 text-gray-400">
                      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 16L8.586 11.414C8.96106 11.0391 9.46967 10.8284 10 10.8284C10.5303 10.8284 11.0389 11.0391 11.414 11.414L16 16M14 14L15.586 12.414C15.9611 12.0391 16.4697 11.8284 17 11.8284C17.5303 11.8284 18.0389 12.0391 18.414 12.414L20 14M14 8H14.01M6 20H18C18.5304 20 19.0391 19.7893 19.4142 19.4142C19.7893 19.0391 20 18.5304 20 18V6C20 5.46957 19.7893 4.96086 19.4142 4.58579C19.0391 4.21071 18.5304 4 18 4H6C5.46957 4 4.96086 4.21071 4.58579 4.58579C4.21071 4.96086 4 5.46957 4 6V18C4 18.5304 4.21071 19.0391 4.58579 19.4142C4.96086 19.7893 5.46957 20 6 20Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  )}
                  <p className="text-sm text-center mb-2">Upload a .jpg or .png file...not less than 2mb</p>
                  <div>
                    <label htmlFor="image-upload" className="cursor-pointer bg-white px-4 py-2 border rounded-lg text-sm">
                      Browse files
                    </label>
                    <input
                      id="image-upload"
                      type="file"
                      accept=".jpg,.jpeg,.png"
                      className="hidden"
                      onChange={(e) => handleFileChange(e, "assetImage")}
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-between space-x-4">
                <button
                  onClick={prevStep}
                  className="px-6 py-2 bg-white border border-gray-300 text-black rounded-lg w-full"
                >
                  Back
                </button>
                <button
                  onClick={nextStep}
                  className="px-6 py-2 bg-black text-white rounded-lg w-full"
                >
                  Next
                </button>
              </div>
            </div>
          )}

          {currentStep === "bankDetails" && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Bank Name</label>
                <input
                  type="text"
                  name="bankName"
                  value={formData.bankName}
                  onChange={handleTextChange}
                  placeholder="Wema Bank"
                  className="w-full p-3 border rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Account Number</label>
                <input
                  type="text"
                  name="accountNumber"
                  value={formData.accountNumber}
                  onChange={handleTextChange}
                  placeholder="001234567"
                  className="w-full p-3 border rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Account Name</label>
                <input
                  type="text"
                  name="accountName"
                  value={formData.accountName}
                  onChange={handleTextChange}
                  placeholder="John Doe"
                  className="w-full p-3 border rounded-lg"
                />
              </div>
              <div className="flex justify-between space-x-4">
                <button
                  onClick={prevStep}
                  className="px-6 py-2 bg-white border border-gray-300 text-black rounded-lg w-full"
                >
                  Back
                </button>
                <button
                  onClick={nextStep}
                  className="px-6 py-2 bg-black text-white rounded-lg w-full"
                >
                  Next
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Success modal */}
        {showSuccessModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 max-w-sm w-full mx-4">
              <div className="flex flex-col items-center text-center">
                <div className="bg-green-100 p-3 rounded-full mb-4">
                  <Check size={28} className="text-green-600" />
                </div>
                <h2 className="text-xl font-bold mb-2">Asset Added</h2>
                <p className="text-gray-600 mb-6 text-sm">
                  Your asset has been added! You can view it on the Asset page.
                </p>
                <button 
                  onClick={goToAssetsPage}
                  className="bg-black text-white py-2 px-6 rounded-lg w-full"
                >
                  Go to Assets
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default AddAssetPage;