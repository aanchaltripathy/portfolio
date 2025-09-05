export interface MarkerData {
  id: number;
  latitude: number;
  longitude: number;
  title: string;
  description: string;
  price: number;
  time: string;
  car_seats: number;
  image: any;
}

export interface LocationStore {
  userLatitude: number | null;
  userLongitude: number | null;
  userAddress: string | null;
  destinationLatitude: number | null;
  destinationLongitude: number | null;
  destinationAddress: string | null;
  setUserLocation: (location: {
    latitude: number;
    longitude: number;
    address: string;
  }) => void;
  setDestinationLocation: (location: {
    latitude: number;
    longitude: number;
    address: string;
  }) => void;
}

export interface DriverStore {
  drivers: MarkerData[];
  selectedDriver: number | null;
  setSelectedDriver: (driverId: number) => void;
  setDrivers: (drivers: MarkerData[]) => void;
  clearSelectedDriver: () => void;
}

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  imageUrl?: string;
}

