import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSignIn } from '@clerk/clerk-expo';
import { useRouter } from 'expo-router';
import InputField from '@/components/input-field';
import Button from '@/components/button';
import { images } from '@/constants';

const SignIn = () => {
  const { signIn, setActive, isLoaded } = useSignIn();
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const onSignInPress = async () => {
    if (!isLoaded) return;

    setLoading(true);
    try {
      const completeSignIn = await signIn.create({
        identifier: email,
        password,
      });

      await setActive({ session: completeSignIn.createdSessionId });
      router.push('/(tabs)');
    } catch (err: any) {
      console.error(JSON.stringify(err, null, 2));
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 px-6 py-8">
        <View className="flex-1 justify-center">
          <View className="items-center mb-8">
            <Image source={images.logo} className="w-32 h-32 mb-4" />
            <Text className="text-3xl font-JakartaBold text-gray-900 mb-2">
              Welcome Back
            </Text>
            <Text className="text-gray-600 text-center">
              Sign in to your account to continue
            </Text>
          </View>

          <View className="space-y-4">
            <InputField
              label="Email"
              placeholder="Enter your email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
            />

            <InputField
              label="Password"
              placeholder="Enter your password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />

            <Button
              title="Sign In"
              onPress={onSignInPress}
              loading={loading}
              disabled={!email || !password}
              className="mt-6"
            />
          </View>

          <View className="flex-row justify-center mt-8">
            <Text className="text-gray-600">Don't have an account? </Text>
            <TouchableOpacity onPress={() => router.push('/sign-up')}>
              <Text className="text-primary font-JakartaMedium">Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignIn;













