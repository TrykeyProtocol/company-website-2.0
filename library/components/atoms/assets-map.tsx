"use client";

import React, { useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  ZoomControl,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { Vehicle, ViewState } from "@/library/types/assets";
import MapViewController from "./map-view-controller";
import CustomMarker from "./custom-marker";
import { getMarkerColor } from "@/library/utils/map-helpers";

// Global styles for map
const globalStyles = `
  /* Make sure the drawer appears above the map */
  .leaflet-container {
    z-index: 10;
    width: 100vw !important;
  }
  
  /* Ensure shadcn drawer appears above the map */
  [data-radix-popper-content-wrapper] {
    z-index: 1000 !important;
  }
`;

interface AssetMapProps {
  viewport: ViewState;
  setViewport: React.Dispatch<React.SetStateAction<ViewState>>;
  vehicles: Vehicle[];
  onVehicleClick: (vehicle: Vehicle) => void;
}

const AssetMap: React.FC<AssetMapProps> = ({
  viewport,
  setViewport,
  vehicles,
  onVehicleClick,
}) => {
  // Fix Leaflet icons
  useEffect(() => {
    // Only run on client-side
    if (typeof window === "undefined") return;

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

    // Add global styles
    const styleElement = document.createElement("style");
    styleElement.innerHTML = globalStyles;
    document.head.appendChild(styleElement);

    // Clean up when component unmounts
    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

  return (
    <div className="absolute inset-0 left-0 right-0">
      <MapContainer
        center={viewport.center}
        zoom={viewport.zoom}
        style={{ width: "100vw", height: "100%" }}
        zoomControl={false}
        className="z-0"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MapViewController setViewport={setViewport} />

        {/* Vehicle Markers */}
        {vehicles.map((vehicle) => (
          <CustomMarker
            key={vehicle.id}
            position={[
              vehicle.location.latitude,
              vehicle.location.longitude,
            ]}
            color={getMarkerColor(vehicle.status)}
            onClick={() => onVehicleClick(vehicle)}
          />
        ))}
      </MapContainer>
    </div>
  );
};

export default AssetMap;