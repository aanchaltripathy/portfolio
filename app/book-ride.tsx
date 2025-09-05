import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { useLocationStore, useDriverStore } from '@/store';
import { formatTime } from '@/lib/utils';
import { icons } from '@/constants';
import Button from '@/components/button';

const BookRide = () => {
  const router = useRouter();
  const { userAddress, destinationAddress } = useLocationStore();
  const { selectedDriver, drivers } = useDriverStore();

  const driverDetails = drivers.find(driver => driver.id === selectedDriver);

  if (!driverDetails) {
    return (
      <SafeAreaView className="flex-1 bg-white">
        <View className="flex-1 justify-center items-center">
          <Text className="text-xl font-JakartaBold text-gray-900">
            No driver selected
          </Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="flex-1 px-4">
        <View className="py-4">
          <Text className="text-2xl font-JakartaBold text-gray-900 mb-6">
            Confirm Your Ride
          </Text>

          {/* Driver Info */}
          <View className="bg-gray-50 rounded-xl p-6 mb-6">
            <Text className="text-lg font-JakartaBold text-gray-900 mb-4">
              Driver Details
            </Text>
            
            <View className="flex-row items-center mb-4">
              <View className="w-12 h-12 bg-primary rounded-full items-center justify-center mr-4">
                <Text className="text-white font-JakartaBold text-lg">
                  {driverDetails.title.charAt(0)}
                </Text>
              </View>
              <View>
                <Text className="font-JakartaBold text-gray-900">
                  {driverDetails.title}
                </Text>
                <Text className="text-gray-600">{driverDetails.description}</Text>
              </View>
            </View>

            <View className="flex flex-col w-full items-start justify-center">
              <View className="flex flex-row items-center justify-between w-full border-b border-gray-200 py-3">
                <Text className="text-lg font-JakartaRegular text-gray-700">
                  Ride Price
                </Text>
                <Text className="text-lg font-JakartaRegular text-primary">
                  ${driverDetails.price}
                </Text>
              </View>

              <View className="flex flex-row items-center justify-between w-full border-b border-gray-200 py-3">
                <Text className="text-lg font-JakartaRegular text-gray-700">
                  Pickup Time
                </Text>
                <Text className="text-lg font-JakartaRegular">
                  {formatTime(driverDetails.time)}
                </Text>
              </View>

              <View className="flex flex-row items-center justify-between w-full py-3">
                <Text className="text-lg font-JakartaRegular text-gray-700">
                  Car Seats
                </Text>
                <Text className="text-lg font-JakartaRegular">
                  {driverDetails.car_seats}
                </Text>
              </View>
            </View>
          </View>

          {/* Trip Details */}
          <View className="bg-gray-50 rounded-xl p-6 mb-6">
            <Text className="text-lg font-JakartaBold text-gray-900 mb-4">
              Trip Details
            </Text>

            <View className="flex flex-col w-full items-start justify-center">
              <View className="flex flex-row items-center justify-start mt-3 border-t border-b border-gray-200 w-full py-3">
                <Image source={icons.from} className="w-6 h-6" />
                <Text className="text-lg font-JakartaRegular ml-2 text-gray-700">
                  {userAddress}
                </Text>
              </View>

              <View className="flex flex-row items-center justify-start border-b border-gray-200 w-full py-3">
                <Image source={icons.to} className="w-6 h-6" />
                <Text className="text-lg font-JakartaRegular ml-2 text-gray-700">
                  {destinationAddress}
                </Text>
              </View>
            </View>
          </View>

          {/* Payment Method */}
          <View className="bg-gray-50 rounded-xl p-6 mb-6">
            <Text className="text-lg font-JakartaBold text-gray-900 mb-4">
              Payment Method
            </Text>
            <View className="flex-row items-center">
              <View className="w-8 h-8 bg-primary rounded-full items-center justify-center mr-3">
                <Text className="text-white font-JakartaBold">$</Text>
              </View>
              <Text className="font-JakartaMedium text-gray-900">
                Cash Payment
              </Text>
            </View>
          </View>

          {/* Total */}
          <View className="bg-primary rounded-xl p-6 mb-6">
            <View className="flex-row items-center justify-between">
              <Text className="text-xl font-JakartaBold text-white">
                Total Amount
              </Text>
              <Text className="text-2xl font-JakartaBold text-white">
                ${driverDetails.price}
              </Text>
            </View>
          </View>

          {/* Action Buttons */}
          <View className="flex-row space-x-4 mb-6">
            <Button
              title="Cancel"
              onPress={() => router.back()}
              variant="outline"
              className="flex-1"
            />
            <Button
              title="Confirm Ride"
              onPress={() => {
                // Handle ride confirmation
                router.push('/(tabs)');
              }}
              className="flex-1"
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default BookRide;













