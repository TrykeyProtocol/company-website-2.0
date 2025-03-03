// Helper function to get marker color based on vehicle status
export const getMarkerColor = (status: "moving" | "idle" | "inactive"): string => {
  switch (status) {
    case "moving":
      return "#22c55e"; // green
    case "inactive":
      return "#eab308"; // yellow
    case "idle":
      return "#94a3b8"; // gray
    default:
      return "#94a3b8"; // gray
  }
};

// Helper function to format driving time
export const formatDriving = (hours: number, minutes: number): string => {
  return `${hours}h ${minutes}m`;
};