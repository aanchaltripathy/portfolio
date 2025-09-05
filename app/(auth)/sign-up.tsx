import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSignUp } from '@clerk/clerk-expo';
import { useRouter } from 'expo-router';
import InputField from '@/components/input-field';
import Button from '@/components/button';
import { images } from '@/constants';

const SignUp = () => {
  const { signUp, setActive, isLoaded } = useSignUp();
  const router = useRouter();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const onSignUpPress = async () => {
    if (!isLoaded) return;

    setLoading(true);
    try {
      const completeSignUp = await signUp.create({
        firstName,
        lastName,
        emailAddress: email,
        password,
      });

      await setActive({ session: completeSignUp.createdSessionId });
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
              Create Account
            </Text>
            <Text className="text-gray-600 text-center">
              Sign up to get started with Uber Clone
            </Text>
          </View>

          <View className="space-y-4">
            <View className="flex-row space-x-4">
              <InputField
                label="First Name"
                placeholder="John"
                value={firstName}
                onChangeText={setFirstName}
                containerStyle="flex-1"
              />
              <InputField
                label="Last Name"
                placeholder="Doe"
                value={lastName}
                onChangeText={setLastName}
                containerStyle="flex-1"
              />
            </View>

            <InputField
              label="Email"
              placeholder="Enter your email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
            />

            <InputField
              label="Password"
              placeholder="Create a password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />

            <Button
              title="Sign Up"
              onPress={onSignUpPress}
              loading={loading}
              disabled={!firstName || !lastName || !email || !password}
              className="mt-6"
            />
          </View>

          <View className="flex-row justify-center mt-8">
            <Text className="text-gray-600">Already have an account? </Text>
            <TouchableOpacity onPress={() => router.push('/sign-in')}>
              <Text className="text-primary font-JakartaMedium">Sign In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;













