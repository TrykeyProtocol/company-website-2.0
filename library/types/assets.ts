// Vehicle type definition
export interface Vehicle {
  id: string;
  location: { latitude: number; longitude: number };
  status: "moving" | "idle" | "inactive";
  fleet: string;
  passengers: number;
  speed: number;
  driving: { hours: number; minutes: number };
  distance: number;
  mileage: number;
  vehicleType: string;
}

// Map view state
export interface ViewState {
  center: [number, number];
  zoom: number;
}

// Filter state
export interface FilterState {
  moving: boolean;
  idle: boolean;
  inactive: boolean;
}