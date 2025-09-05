import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import * as Location from 'expo-location';
import { Ionicons } from '@expo/vector-icons';
import { useLocationStore, useDriverStore } from '@/store';
import { MarkerData } from '@/types/type';
import { getDistance, getEstimatedTime } from '@/lib/utils';
import Button from '@/components/button';

const Map = () => {
  const router = useRouter();
  const {
    userLatitude,
    userLongitude,
    userAddress,
    destinationLatitude,
    destinationLongitude,
    destinationAddress,
    setUserLocation,
    setDestinationLocation,
  } = useLocationStore();
  const { drivers, selectedDriver, setSelectedDriver, setDrivers } = useDriverStore();

  const [region, setRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getCurrentLocation();
    generateMockDrivers();
  }, []);

  const getCurrentLocation = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission denied', 'Location permission is required');
        return;
      }

      const location = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = location.coords;
      
      const address = await Location.reverseGeocodeAsync({
        latitude,
        longitude,
      });

      const addressString = address[0]
        ? `${address[0].street}, ${address[0].city}`
        : 'Current Location';

      setUserLocation({ latitude, longitude, address: addressString });
      setRegion({
        latitude,
        longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
    } catch (error) {
      console.error('Error getting location:', error);
    }
  };

  const generateMockDrivers = () => {
    const mockDrivers: MarkerData[] = [
      {
        id: 1,
        latitude: 37.78825 + 0.001,
        longitude: -122.4324 + 0.001,
        title: 'John Doe',
        description: 'Toyota Camry',
        price: 25.50,
        time: new Date().toISOString(),
        car_seats: 4,
        image: null,
      },
      {
        id: 2,
        latitude: 37.78825 - 0.001,
        longitude: -122.4324 - 0.001,
        title: 'Jane Smith',
        description: 'Honda Civic',
        price: 22.75,
        time: new Date().toISOString(),
        car_seats: 4,
        image: null,
      },
      {
        id: 3,
        latitude: 37.78825 + 0.002,
        longitude: -122.4324 - 0.002,
        title: 'Mike Johnson',
        description: 'Tesla Model 3',
        price: 35.00,
        time: new Date().toISOString(),
        car_seats: 4,
        image: null,
      },
    ];
    setDrivers(mockDrivers);
  };

  const handleMapPress = async (event: any) => {
    const { latitude, longitude } = event.nativeEvent.coordinate;
    
    try {
      const address = await Location.reverseGeocodeAsync({
        latitude,
        longitude,
      });

      const addressString = address[0]
        ? `${address[0].street}, ${address[0].city}`
        : 'Selected Location';

      if (!userLatitude || !userLongitude) {
        setUserLocation({ latitude, longitude, address: addressString });
      } else {
        setDestinationLocation({ latitude, longitude, address: addressString });
      }
    } catch (error) {
      console.error('Error getting address:', error);
    }
  };

  const handleDriverSelect = (driverId: number) => {
    setSelectedDriver(driverId);
  };

  const handleBookRide = () => {
    if (!selectedDriver) {
      Alert.alert('No Driver Selected', 'Please select a driver first');
      return;
    }
    
    if (!userLatitude || !destinationLatitude) {
      Alert.alert('Missing Location', 'Please select pickup and destination locations');
      return;
    }

    router.push('/book-ride');
  };

  const selectedDriverData = drivers.find(driver => driver.id === selectedDriver);

  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1">
        <MapView
          provider={PROVIDER_GOOGLE}
          style={{ flex: 1 }}
          region={region}
          onPress={handleMapPress}
          showsUserLocation
          showsMyLocationButton
        >
          {/* User Location Marker */}
          {userLatitude && userLongitude && (
            <Marker
              coordinate={{ latitude: userLatitude, longitude: userLongitude }}
              title="Pickup Location"
              description={userAddress}
              pinColor="green"
            />
          )}

          {/* Destination Marker */}
          {destinationLatitude && destinationLongitude && (
            <Marker
              coordinate={{ latitude: destinationLatitude, longitude: destinationLongitude }}
              title="Destination"
              description={destinationAddress}
              pinColor="red"
            />
          )}

          {/* Driver Markers */}
          {drivers.map((driver) => (
            <Marker
              key={driver.id}
              coordinate={{ latitude: driver.latitude, longitude: driver.longitude }}
              title={driver.title}
              description={driver.description}
              pinColor={selectedDriver === driver.id ? 'blue' : 'orange'}
              onPress={() => handleDriverSelect(driver.id)}
            />
          ))}
        </MapView>

        {/* Bottom Panel */}
        <View className="absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl p-6">
          <View className="flex-row items-center justify-between mb-4">
            <Text className="text-xl font-JakartaBold text-gray-900">
              Available Drivers
            </Text>
            <TouchableOpacity onPress={getCurrentLocation}>
              <Ionicons name="refresh" size={24} color="#0CC25F" />
            </TouchableOpacity>
          </View>

          <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mb-4">
            {drivers.map((driver) => (
              <TouchableOpacity
                key={driver.id}
                onPress={() => handleDriverSelect(driver.id)}
                className={`mr-4 p-4 rounded-xl border-2 ${
                  selectedDriver === driver.id
                    ? 'border-primary bg-primary/10'
                    : 'border-gray-200 bg-gray-50'
                }`}
              >
                <Text className="font-JakartaBold text-gray-900">{driver.title}</Text>
                <Text className="text-gray-600 text-sm">{driver.description}</Text>
                <Text className="font-JakartaBold text-primary mt-2">
                  ${driver.price}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>

          {selectedDriverData && (
            <View className="bg-gray-50 rounded-xl p-4 mb-4">
              <Text className="font-JakartaBold text-gray-900 mb-2">
                Selected Driver: {selectedDriverData.title}
              </Text>
              <Text className="text-gray-600">{selectedDriverData.description}</Text>
              <Text className="font-JakartaBold text-primary mt-2">
                Price: ${selectedDriverData.price}
              </Text>
            </View>
          )}

          <Button
            title="Book Ride"
            onPress={handleBookRide}
            disabled={!selectedDriver || !userLatitude || !destinationLatitude}
            className="w-full"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Map;













