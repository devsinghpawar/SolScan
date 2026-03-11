// import { useEffect, useState } from "react";
// import {
//   Keyboard,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
// } from "react-native";
// import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
// import { WalletScreen } from "./src/screen/WalletScreen";
// import { SwapScreen } from "./src/screen/SwapScreen";
// import { Ionicons } from "@expo/vector-icons";
// import { StatusBar } from "expo-status-bar";

// export default function App() {
//   const [activeTab, setActiveTab] = useState<"wallet" | "swap">("wallet");
//   const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);

//   useEffect(() => {
//     const showSubscription = Keyboard.addListener("keyboardDidShow", () =>
//       setIsKeyboardVisible(true),
//     );
//     const hideSubscription = Keyboard.addListener("keyboardDidHide", () =>
//       setIsKeyboardVisible(false),
//     );

//     return () => {
//       showSubscription.remove();
//       hideSubscription.remove();
//     };
//   }, []);

//   return (
//     <SafeAreaProvider>
//       <SafeAreaView style={s.safe}>
//         <StatusBar style="light" />

//         {/* Screen Switcher */}
//         {activeTab === "wallet" ? <WalletScreen /> : <SwapScreen />}

//         {/* Bottom Tab Bar */}
//         {!isKeyboardVisible && (
//           <View style={s.tabBar}>
//             <TouchableOpacity
//               onPress={() => setActiveTab("wallet")}
//               style={s.tab}
//             >
//               <Ionicons
//                 name={activeTab === "wallet" ? "wallet" : "wallet-outline"}
//                 size={24}
//                 color={activeTab === "wallet" ? "#14F195" : "#6B7280"}
//               />
//               <Text style={[s.tabLable, activeTab === "wallet" && s.tabActive]}>
//                 Wallet
//               </Text>
//             </TouchableOpacity>
//             <TouchableOpacity
//               onPress={() => setActiveTab("swap")}
//               style={s.tab}
//             >
//               <Ionicons
//                 name={
//                   activeTab === "swap"
//                     ? "swap-horizontal"
//                     : "swap-horizontal-outline"
//                 }
//                 size={24}
//                 color={activeTab === "swap" ? "#14F195" : "#6B7280"}
//               />
//               <Text style={[s.tabLable, activeTab === "swap" && s.tabActive]}>
//                 Swap
//               </Text>
//             </TouchableOpacity>
//           </View>
//         )}
//       </SafeAreaView>
//     </SafeAreaProvider>
//   );
// }

// const s = StyleSheet.create({
//   safe: {
//     flex: 1,
//     backgroundColor: "#0D0D12",
//   },
//   tabBar: {
//     flexDirection: "row",
//     backgroundColor: "#16161D",
//     borderTopWidth: 1,
//     borderTopColor: "#2A2A35",
//     paddingBottom: 8,
//     paddingTop: 12,
//   },
//   tab: {
//     flex: 1,
//     alignItems: "center",
//     gap: 4,
//   },
//   tabLable: { color: "#6B7280", fontSize: 12 },
//   tabActive: {
//     color: "#14F195",
//   },
// });
