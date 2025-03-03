"use client";

import React, { useState, useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Polyline,
  ZoomControl,
  useMap,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { ArrowLeft, Banknote, Bus, CarFront } from "lucide-react";
import { Button } from "@/library/components/atoms/button-cn";
import { useRouter } from "next/navigation";

// Fix Leaflet icon issues in Next.js
const FixLeafletIcons = () => {
  useEffect(() => {
    // Fix for leaflet icons not displaying in production build
    const DefaultIcon = L.Icon.Default;
    const iconProto = DefaultIcon.prototype as any;
    if (iconProto._getIconUrl) {
      delete iconProto._getIconUrl;
    }

    L.Icon.Default.mergeOptions({
      iconRetinaUrl: "/leaflet/marker-icon-2x.png",
      iconUrl: "/leaflet/marker-icon.png",
      shadowUrl: "/leaflet/marker-shadow.png",
    });
  }, []);

  return null;
};

// Set the map view to show the route
const MapViewController = ({ route }: { route: any }) => {
  const map = useMap();

  useEffect(() => {
    if (route && route.length > 0) {
      const bounds = L.latLngBounds(
        route.map((point: any[]) => [point[0], point[1]])
      );
      map.fitBounds(bounds, { padding: [50, 50] });
    }
  }, [map, route]);

  return null;
};

// Custom marker component
interface CustomMarkerProps {
  position: [number, number];
  color: string;
}

const CustomMarker: React.FC<CustomMarkerProps> = ({ position, color }) => {
  // Create a custom marker icon
  const markerIcon = new L.DivIcon({
    className: "custom-div-icon",
    html: `<div style="background-color: ${color}; width: 40px; height: 40px; border-radius: 50%; border: 3px solid white; box-shadow: 0 2px 4px rgba(0,0,0,0.3); display: flex; justify-content: center; align-items: center;">
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.5796 6.71035C13.3441 6.71035 13.1182 6.80392 12.9516 6.97048C12.785 7.13704 12.6915 7.36295 12.6915 7.5985C12.6915 7.83406 12.785 8.05997 12.9516 8.22653C13.1182 8.39309 13.3441 8.48666 13.5796 8.48666H16.5401C16.7757 8.48666 17.0016 8.39309 17.1682 8.22653C17.3347 8.05997 17.4283 7.83406 17.4283 7.5985C17.4283 7.36295 17.3347 7.13704 17.1682 6.97048C17.0016 6.80392 16.7757 6.71035 16.5401 6.71035H13.5796ZM5.58619 7.5985C5.58619 6.42073 6.05406 5.2912 6.88687 4.45839C7.71968 3.62558 8.84921 3.15771 10.027 3.15771H20.0928C21.2705 3.15771 22.4001 3.62558 23.2329 4.45839C24.0657 5.2912 24.5336 6.42073 24.5336 7.5985V12.0393H25.9866C26.2221 12.0393 26.448 12.1329 26.6146 12.2994C26.7812 12.466 26.8747 12.6919 26.8747 12.9275C26.8747 13.163 26.7812 13.3889 26.6146 13.5555C26.448 13.722 26.2221 13.8156 25.9866 13.8156H24.5336V24.1775C24.5336 24.7271 24.3152 25.2542 23.9266 25.6428C23.5379 26.0315 23.0108 26.2498 22.4612 26.2498H20.6849C20.1353 26.2498 19.6081 26.0315 19.2195 25.6428C18.8308 25.2542 18.6125 24.7271 18.6125 24.1775V22.6972H11.5072V24.1775C11.5072 24.7271 11.2889 25.2542 10.9003 25.6428C10.5116 26.0315 9.98451 26.2498 9.43488 26.2498H7.65856C7.10894 26.2498 6.58182 26.0315 6.19318 25.6428C5.80453 25.2542 5.58619 24.7271 5.58619 24.1775V13.8156H4.10593C3.87038 13.8156 3.64447 13.722 3.47791 13.5555C3.31135 13.3889 3.21777 13.163 3.21777 12.9275C3.21777 12.6919 3.31135 12.466 3.47791 12.2994C3.64447 12.1329 3.87038 12.0393 4.10593 12.0393H5.58619V7.5985ZM20.3888 22.6972V24.1775C20.3888 24.3409 20.5215 24.4735 20.6849 24.4735H22.4612C22.5397 24.4735 22.615 24.4423 22.6705 24.3868C22.7261 24.3313 22.7572 24.256 22.7572 24.1775V22.6972H20.3888ZM7.36251 22.6972V24.1775C7.36251 24.3409 7.49514 24.4735 7.65856 24.4735H9.43488C9.5134 24.4735 9.5887 24.4423 9.64422 24.3868C9.69974 24.3313 9.73093 24.256 9.73093 24.1775V22.6972H7.36251ZM10.027 4.93403C9.32032 4.93403 8.6426 5.21475 8.14292 5.71444C7.64323 6.21412 7.36251 6.89184 7.36251 7.5985V14.9998H22.7572V7.5985C22.7572 6.89184 22.4765 6.21412 21.9768 5.71444C21.4772 5.21475 20.7994 4.93403 20.0928 4.93403H10.027ZM11.5072 18.5525C11.5072 18.2384 11.3825 17.9372 11.1604 17.7151C10.9383 17.493 10.6371 17.3682 10.323 17.3682C10.009 17.3682 9.70776 17.493 9.48567 17.7151C9.26359 17.9372 9.13883 18.2384 9.13883 18.5525C9.13883 18.8665 9.26359 19.1677 9.48567 19.3898C9.70776 19.6119 10.009 19.7367 10.323 19.7367C10.6371 19.7367 10.9383 19.6119 11.1604 19.3898C11.3825 19.1677 11.5072 18.8665 11.5072 18.5525ZM19.7967 19.7367C20.1108 19.7367 20.412 19.6119 20.6341 19.3898C20.8562 19.1677 20.9809 18.8665 20.9809 18.5525C20.9809 18.2384 20.8562 17.9372 20.6341 17.7151C20.412 17.493 20.1108 17.3682 19.7967 17.3682C19.4826 17.3682 19.1814 17.493 18.9594 17.7151C18.7373 17.9372 18.6125 18.2384 18.6125 18.5525C18.6125 18.8665 18.7373 19.1677 18.9594 19.3898C19.1814 19.6119 19.4826 19.7367 19.7967 19.7367Z" fill="white"/>
            </svg>
          </div>`,
    iconSize: [25, 25],
    iconAnchor: [20, 20],
  });

  return <Marker position={position} icon={markerIcon} />;
};

// Define component props
interface VehicleDetailProps {
  id: string;
}

const VehicleDetailScreen: React.FC<VehicleDetailProps> = ({ id }) => {
  const router = useRouter();
  const [vehicleData, setVehicleData] = useState({
    id: id || "234-6573-ABJ",
    currentLocation: [9.0765, 7.3986] as [number, number],
    yieldGenerated: 300000.0,
    expectedYield: 0.0,
    // Sample route - could be fetched from an API
    route: [
      [9.0565, 7.2986],
      [9.0625, 7.3186],
      [9.0685, 7.3386],
      [9.0705, 7.3586],
      [9.0745, 7.3786],
      [9.0765, 7.3986],
    ] as [number, number][],
  });

  const handleGoBack = () => {
    router.back();
  };

  // Add global styles for the component
  useEffect(() => {
    const styleElement = document.createElement("style");
    styleElement.innerHTML = `
      .leaflet-container {
        z-index: 10;
        width: 100vw !important;
      }
      
    `;
    document.head.appendChild(styleElement);

    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

  return (
    <div className="h-screen w-screen relative overflow-hidden">
      {/* Map Component */}
      <div className="absolute inset-0 left-0 right-0">
        <MapContainer
          center={vehicleData.currentLocation}
          zoom={13}
          style={{ width: "100vw", height: "100%" }}
          zoomControl={false}
        >
          <FixLeafletIcons />
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <MapViewController route={vehicleData.route} />

          {/* Current vehicle position */}
          <CustomMarker
            position={vehicleData.currentLocation}
            color="#22c55e"
          />

          {/* Vehicle route */}
          <Polyline
            positions={vehicleData.route}
            color="#2563eb"
            weight={4}
            opacity={0.7}
          />
        </MapContainer>
      </div>

      {/* Back button */}
      <div className="absolute top-4 left-4 z-50 bg-white rounded-lg shadow-sm p-2.5">
        <ArrowLeft onClick={handleGoBack} className="cursor-pointer w-5 h-5" />
      </div>

      <div className="absolute top-20 left-0 right-0 bg-white rounded-xl shadow-md z-50 mx-4 p-4 flex flex-col gap-4">
        {/* Vehicle info card */}
        <div className="  flex justify-between items-center">
          <div className=" flex flex-col items-start gap-2.5">
            <h1 className=" font-medium">{vehicleData.id}</h1>
            <div className=" py-1 px-3 bg-green-100 flex gap-2 items-center rounded-full">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <p className=" text-green-600 text-xs font-medium">Moving</p>
            </div>
          </div>
          <Button className="bg-black text-white rounded-md py-2 px-4 text-sm">
            Set Location
          </Button>
        </div>

        {/* Yield info card */}
        <div className="bg-gray-200 rounded-xl p-4 grid grid-cols-2 gap-2">
          <div className="flex flex-col items-center">
            <span className="text-gray-700 text-xs">Yield Generated</span>
            <span className="text-sm font-bold">
              ₦{vehicleData.yieldGenerated.toLocaleString()}
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-gray-700 text-xs">Expected Yield</span>
            <span className="text-sm font-bold">
              ₦{vehicleData.expectedYield.toLocaleString()}
            </span>
          </div>
        </div>
      </div>

      {/* Footer buttons */}
      <div className="absolute bottom-6 left-0 right-0 px-4 z-50 flex justify-between">
        <Button className="bg-black text-white rounded-md py-2 px-1.5 flex items-center gap-2" onClick={() => router.push("/assets/1/payment-history")}>
          <Banknote />
          Payment History
        </Button>
        <Button className="bg-black text-white rounded-md py-2 px-1.5 flex items-center gap-2 " onClick={() => router.push("/assets/1/route-history")} >
          <CarFront /> Ride History
        </Button>
      </div>
    </div>
  );
};

export default VehicleDetailScreen;
