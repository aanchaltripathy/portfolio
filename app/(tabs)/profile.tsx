import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useUser } from '@clerk/clerk-expo';
import { Ionicons } from '@expo/vector-icons';
import InputField from '@/components/input-field';

const Profile = () => {
  const { user } = useUser();

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView
        className="px-5"
        contentContainerStyle={{ paddingBottom: 120 }}
      >
        <Text className="text-2xl font-JakartaBold my-5 text-gray-900">
          My Profile
        </Text>

        <View className="flex items-center justify-center my-5">
          <Image
            source={{
              uri: user?.externalAccounts[0]?.imageUrl ?? user?.imageUrl,
            }}
            style={{ width: 110, height: 110, borderRadius: 110 / 2 }}
            className="rounded-full h-[110px] w-[110px] border-[3px] border-white shadow-sm shadow-neutral-300"
          />
        </View>

        <View className="flex flex-col items-start justify-center bg-white rounded-lg shadow-sm shadow-neutral-300 px-5 py-3 border border-gray-200">
          <View className="flex flex-col items-start justify-start w-full">
            <InputField
              label="First Name"
              placeholder={user?.firstName || 'Not Found'}
              containerStyle="w-full"
              inputStyle="p-3.5"
              editable={false}
            />

            <InputField
              label="Last Name"
              placeholder={user?.lastName || 'Not Found'}
              containerStyle="w-full"
              inputStyle="p-3.5"
              editable={false}
            />

            <InputField
              label="Email"
              placeholder={
                user?.primaryEmailAddress?.emailAddress || 'Not Found'
              }
              containerStyle="w-full"
              inputStyle="p-3.5"
              editable={false}
            />

            <InputField
              label="Phone"
              placeholder={user?.primaryPhoneNumber?.phoneNumber || 'Not Found'}
              containerStyle="w-full"
              inputStyle="p-3.5"
              editable={false}
            />
          </View>
        </View>

        {/* Settings Section */}
        <View className="mt-6">
          <Text className="text-lg font-JakartaBold text-gray-900 mb-4">
            Settings
          </Text>
          
          <View className="bg-white rounded-lg border border-gray-200">
            <TouchableOpacity className="flex-row items-center justify-between p-4 border-b border-gray-100">
              <View className="flex-row items-center">
                <Ionicons name="notifications" size={20} color="#6B7280" />
                <Text className="ml-3 font-JakartaMedium text-gray-900">
                  Notifications
                </Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#6B7280" />
            </TouchableOpacity>

            <TouchableOpacity className="flex-row items-center justify-between p-4 border-b border-gray-100">
              <View className="flex-row items-center">
                <Ionicons name="shield-checkmark" size={20} color="#6B7280" />
                <Text className="ml-3 font-JakartaMedium text-gray-900">
                  Privacy & Security
                </Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#6B7280" />
            </TouchableOpacity>

            <TouchableOpacity className="flex-row items-center justify-between p-4 border-b border-gray-100">
              <View className="flex-row items-center">
                <Ionicons name="card" size={20} color="#6B7280" />
                <Text className="ml-3 font-JakartaMedium text-gray-900">
                  Payment Methods
                </Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#6B7280" />
            </TouchableOpacity>

            <TouchableOpacity className="flex-row items-center justify-between p-4">
              <View className="flex-row items-center">
                <Ionicons name="help-circle" size={20} color="#6B7280" />
                <Text className="ml-3 font-JakartaMedium text-gray-900">
                  Help & Support
                </Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#6B7280" />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;













