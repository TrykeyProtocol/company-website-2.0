"use client";

import React from "react";
import { useMapEvents } from "react-leaflet";
import { ViewState } from "@/library/types/assets";

interface MapViewControllerProps {
  setViewport: React.Dispatch<React.SetStateAction<ViewState>>;
}

const MapViewController: React.FC<MapViewControllerProps> = ({
  setViewport,
}) => {
  const map = useMapEvents({
    moveend: () => {
      const center = map.getCenter();
      setViewport({
        center: [center.lat, center.lng],
        zoom: map.getZoom(),
      });
    },
  });
  
  return null;
};

export default MapViewController;