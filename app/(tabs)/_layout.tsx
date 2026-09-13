// app/(tabs)/_layout.tsx
// tab layout - defines bottom tab navigation
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function TabLayout() {
  const insets = useSafeAreaInsets();
  return (
    <Tabs
      screenOptions={{
        // hide the header - we'll add our own in each screen
        headerShown: false,
        // tab bar styling
        tabBarStyle: {
          backgroundColor: "#16161D",
          borderTopColor: "#2A2A35",
          borderTopWidth: 1,
          paddingBottom: 8,
          paddingTop: 12,
          height: 30 + insets.bottom,
          // paddingBottom: insets.bottom,
        },
        tabBarLabelStyle: {
          marginTop: -10,
        },
        // active/inactive colors
        tabBarActiveTintColor: "#14F195",
        tabBarInactiveTintColor: "#6B7280",
      }}
    >
      {/* each Tab.Screen corresponds to a file in (tabs) folder */}
      <Tabs.Screen
        name="index"
        options={{
          title: "Wallet",
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="wallet"
              size={size}
              color={color}
              style={{ marginTop: -20 }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="swap"
        options={{
          title: "Swap",
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="swap-horizontal"
              size={size}
              color={color}
              style={{ marginTop: -20 }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "settings",
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="settings"
              size={size}
              color={color}
              style={{ marginTop: -20 }}
            />
          ),
        }}
      />
    </Tabs>
  );
}
