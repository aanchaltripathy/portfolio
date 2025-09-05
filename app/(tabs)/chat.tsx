import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '@/constants';

const Chat = () => {
  return (
    <SafeAreaView className="flex-1 bg-white p-5">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Text className="text-2xl font-JakartaBold mb-6">Chat</Text>
        <View className="flex-1 h-fit flex justify-center items-center">
          <Image
            source={images.message}
            className="w-full h-40"
            resizeMode="contain"
          />
          <Text className="text-3xl font-JakartaBold mt-3 text-gray-900">
            No Messages Yet
          </Text>
          <Text className="text-base mt-2 text-center px-7 text-gray-600">
            Start a conversation with your friends and family
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Chat;













