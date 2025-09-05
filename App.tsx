import { useEffect } from 'react';
import { LogBox } from 'react-native';
import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-expo';
import { Slot } from 'expo-router';
import * as SecureStore from 'expo-secure-store';

const tokenCache = {
  async getToken(key: string) {
    try {
      return SecureStore.getItemAsync(key);
    } catch (err) {
      return null;
    }
  },
  async saveToken(key: string, value: string) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      return;
    }
  },
};

export default function App() {
  useEffect(() => {
    LogBox.ignoreLogs(['Warning: ...']); // Ignore specific warnings
  }, []);

  return (
    <ClerkProvider
      tokenCache={tokenCache}
      publishableKey={process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!}
    >
      <SignedIn>
        <Slot />
      </SignedIn>
      <SignedOut>
        <Slot />
      </SignedOut>
    </ClerkProvider>
  );
}













