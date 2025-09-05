import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { useUser } from '@clerk/clerk-expo';
import { Ionicons } from '@expo/vector-icons';
import { useLocationStore } from '@/store';
import { images, icons } from '@/constants';
import Button from '@/components/button';

const Home = () => {
  const { user } = useUser();
  const router = useRouter();
  const { userAddress, destinationAddress } = useLocationStore();
  const [recentRides, setRecentRides] = useState([
    {
      id: 1,
      from: 'Home',
      to: 'Work',
      date: 'Today',
      price: 25.50,
    },
    {
      id: 2,
      from: 'Grocery Store',
      to: 'Home',
      date: 'Yesterday',
      price: 18.75,
    },
  ]);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="flex-1 px-4">
        {/* Header */}
        <View className="flex-row items-center justify-between py-4">
          <View>
            <Text className="text-2xl font-JakartaBold text-gray-900">
              Good morning,
            </Text>
            <Text className="text-xl font-JakartaMedium text-gray-600">
              {user?.firstName || 'User'}
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => router.push('/profile')}
            className="w-12 h-12 rounded-full bg-gray-100 items-center justify-center"
          >
            <Ionicons name="person" size={24} color="#6B7280" />
          </TouchableOpacity>
        </View>

        {/* Quick Ride */}
        <View className="bg-primary rounded-2xl p-6 mb-6">
          <Text className="text-white text-xl font-JakartaBold mb-4">
            Where to?
          </Text>
          
          <TouchableOpacity
            onPress={() => router.push('/map')}
            className="bg-white rounded-xl p-4 mb-3"
          >
            <View className="flex-row items-center">
              <Image source={icons.from} className="w-6 h-6 mr-3" />
              <Text className="flex-1 font-JakartaMedium text-gray-900">
                {userAddress || 'Pickup location'}
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => router.push('/map')}
            className="bg-white rounded-xl p-4"
          >
            <View className="flex-row items-center">
              <Image source={icons.to} className="w-6 h-6 mr-3" />
              <Text className="flex-1 font-JakartaMedium text-gray-900">
                {destinationAddress || 'Where to?'}
              </Text>
            </View>
          </TouchableOpacity>

          <Button
            title="Book Now"
            onPress={() => router.push('/map')}
            variant="secondary"
            className="mt-4"
          />
        </View>

        {/* Quick Actions */}
        <View className="mb-6">
          <Text className="text-lg font-JakartaBold text-gray-900 mb-4">
            Quick Actions
          </Text>
          <View className="flex-row justify-between">
            <TouchableOpacity className="bg-gray-100 rounded-xl p-4 flex-1 mr-3 items-center">
              <Ionicons name="time" size={24} color="#0CC25F" />
              <Text className="font-JakartaMedium text-gray-900 mt-2">
                Schedule
              </Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-gray-100 rounded-xl p-4 flex-1 ml-3 items-center">
              <Ionicons name="car" size={24} color="#0CC25F" />
              <Text className="font-JakartaMedium text-gray-900 mt-2">
                Ride History
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Recent Rides */}
        <View className="mb-6">
          <Text className="text-lg font-JakartaBold text-gray-900 mb-4">
            Recent Rides
          </Text>
          {recentRides.map((ride) => (
            <TouchableOpacity
              key={ride.id}
              className="bg-gray-50 rounded-xl p-4 mb-3"
            >
              <View className="flex-row items-center justify-between">
                <View className="flex-1">
                  <Text className="font-JakartaMedium text-gray-900">
                    {ride.from} → {ride.to}
                  </Text>
                  <Text className="text-gray-600 text-sm">{ride.date}</Text>
                </View>
                <Text className="font-JakartaBold text-primary">
                  ${ride.price}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* Promo Card */}
        <View className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-6 mb-6">
          <Text className="text-white text-xl font-JakartaBold mb-2">
            Get 20% off your next ride!
          </Text>
          <Text className="text-white opacity-90 mb-4">
            Use code: WELCOME20
          </Text>
          <Button
            title="Apply Code"
            onPress={() => {}}
            variant="outline"
            className="bg-white"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;













