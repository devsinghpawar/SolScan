import { Stack } from "expo-router";
import { StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="token/[mint].tsx" />
        <Stack.Screen name="orders" />
      </Stack>
    </SafeAreaProvider>
  );
}

const s = StyleSheet.create({
  container: {
    backgroundColor: "#000000",
  },
});
