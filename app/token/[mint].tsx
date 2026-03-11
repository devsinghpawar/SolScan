import { useLocalSearchParams, useRouter } from "expo-router";
import { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function TokenDetailScreen() {
  // Read the dynamic parameter from the URL
  // If URL is /token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v
  // then mint = "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v"
  const { mint } = useLocalSearchParams<{ mint: string }>();
  const router = useRouter();

  const [tokenInfo, setTokenInfo] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch token metadata
    // For now, we'll use a simple approach
    // Later you can integrate Jupiter or Helius API for richer data
    fetchTokenInfo();
  }, [mint]);

  const fetchTokenInfo = async () => {
    try {
      // Using Solana RPC to get token supply info
      const res = await fetch("https://api.mainnet-beta.solana.com", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          jsonrpc: "2.0",
          id: 1,
          method: "getTokenSupply",
          params: [mint],
        }),
      });
      const json = await res.json();

      setTokenInfo({
        mint: mint,
        supply: json.result?.value?.uiAmount || 0,
        decimals: json.result?.value?.decimals || 0,
      });
    } catch (error) {
      console.error("Failed to fetch token info:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#14F195" />
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={24} color="#fff" />
        <Text style={styles.backText}>Back</Text>
      </TouchableOpacity>

      {/* Token Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Token Details</Text>
      </View>

      {/* Mint Address */}
      <View style={styles.card}>
        <Text style={styles.cardLabel}>Mint Address</Text>
        <Text style={styles.mintAddress}>{mint}</Text>
      </View>

      {/* Token Info */}
      {tokenInfo && (
        <View style={styles.card}>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Total Supply</Text>
            <Text style={styles.infoValue}>
              {tokenInfo.supply?.toLocaleString() || "Unknown"}
            </Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Decimals</Text>
            <Text style={styles.infoValue}>{tokenInfo.decimals}</Text>
          </View>
        </View>
      )}

      {/* View on Solscan */}
      <TouchableOpacity
        style={styles.linkButton}
        onPress={() => {
          // We'll add Linking.openURL later
          // For now this is a placeholder
        }}
      >
        <Text style={styles.linkButtonText}>View on Solscan ↗</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0a0a1a",
    paddingTop: 60,
    paddingHorizontal: 16,
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0a0a1a",
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  backText: {
    color: "#fff",
    fontSize: 16,
    marginLeft: 8,
  },
  header: {
    marginBottom: 20,
  },
  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  card: {
    backgroundColor: "#1a1a2e",
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  cardLabel: {
    color: "#888",
    fontSize: 12,
    textTransform: "uppercase",
    letterSpacing: 1,
    marginBottom: 8,
  },
  mintAddress: {
    color: "#9945FF",
    fontSize: 13,
    fontFamily: "monospace",
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 8,
  },
  infoLabel: {
    color: "#888",
    fontSize: 14,
  },
  infoValue: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
  },
  divider: {
    height: 1,
    backgroundColor: "#2a2a3e",
  },
  linkButton: {
    backgroundColor: "#9945FF20",
    padding: 14,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 8,
  },
  linkButtonText: {
    color: "#9945FF",
    fontSize: 14,
    fontWeight: "600",
  },
});

/////////////////////////////////////////////////////////////////////////////////

// import {
//   ActivityIndicator,
//   Linking,
//   ScrollView,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
// } from "react-native";
// import React, { useEffect, useState } from "react";
// import { SafeAreaView } from "react-native-safe-area-context";
// import { Ionicons } from "@expo/vector-icons";
// import { useLocalSearchParams, useRouter } from "expo-router";

// export default function TokenDetailScreen() {
//   const { mint } = useLocalSearchParams<{ mint: string }>();
//   const router = useRouter();

//   const [tokenInfo, setTokenInfo] = useState<any>(null);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     fetchTokeninfo();
//   }, [mint]);

//   const fetchTokeninfo = async () => {
//     try {
//       const res = await fetch("https://api.mainnet-beta.solana.com", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           jsonrpc: "2.0",
//           id: 1,
//           method: "getTokenSupply",
//           params: [mint],
//         }),
//       });

//       console.log("line35", res);
//       const json = await res.json();
//       console.log("line37", json);

//       setTokenInfo({
//         mint: mint,
//         supply: json.result?.value?.uiAmount || 0,
//         decimals: json.result?.value?.decimals || 0,
//       });
//     } catch (error) {
//       console.error("Failed to fetch token info:", error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   if (isLoading) {
//     return (
//       <View>
//         <ActivityIndicator size="large" color="#14F195" />
//       </View>
//     );
//   }

//   return (
//     <ScrollView style={s.screen}>
//       <SafeAreaView>
//         <TouchableOpacity style={s.backButton} onPress={() => router.back()}>
//           <Ionicons name="arrow-back" size={24} color={"#bfbfbf"} />
//           <Text style={s.backText}>Back</Text>
//         </TouchableOpacity>

//         <Text style={s.title}>Token Details</Text>

//         <View style={s.addressContainer}>
//           <Text style={s.addressTitle}>MINT ADDRESS</Text>
//           <Text style={s.addressText}>{mint}</Text>
//         </View>

//         {tokenInfo && (
//           <View style={s.addressContainer}>
//             <View style={s.viewContainer}>
//               <Text style={s.addressTitle}>Total Supply</Text>
//               <Text style={s.number}>
//                 {tokenInfo.supply?.toLocaleString() || "Unknown"}
//               </Text>
//             </View>
//             <View style={s.horizontalLine}></View>
//             <View style={s.viewContainer}>
//               <Text style={s.addressTitle}>Decimals</Text>
//               <Text style={s.number}>{tokenInfo.decimals}</Text>
//             </View>
//           </View>
//         )}
//         <TouchableOpacity
//           style={s.solscanButton}
//           onPress={() => Linking.openURL(``)}
//         >
//           <Text style={s.solscanText}>View on Solscan ↗</Text>
//           {/* <Ionicons
//             name="arrow-up-right-box-outline"
//             size={18}
//             color="#5b3f94"
//           /> */}
//         </TouchableOpacity>
//       </SafeAreaView>
//     </ScrollView>
//   );
// }

// const s = StyleSheet.create({
//   screen: {
//     flex: 1,
//     backgroundColor: "#0f0923",
//     // color: "#fff",
//     paddingHorizontal: 18,
//     paddingVertical: 10,
//   },
//   backButton: {
//     flexDirection: "row",
//     alignItems: "center",
//     gap: 10,
//   },
//   backText: {
//     color: "#bfbfbf",
//     fontSize: 18,
//     fontWeight: 500,
//   },
//   title: {
//     color: "#dddddd",
//     fontSize: 24,
//     fontWeight: 700,
//   },
//   addressContainer: {
//     backgroundColor: "#1a1b28",
//     paddingVertical: 15,
//     paddingHorizontal: 18,
//     marginVertical: 10,
//     borderRadius: 12,
//   },
//   addressTitle: {
//     color: "#656671",
//     paddingBottom: 5,
//     fontSize: 18,
//     fontWeight: 500,
//   },
//   addressText: {
//     color: "#9945FF",
//     paddingTop: 5,
//     fontSize: 18,
//     fontWeight: 500,
//   },
//   viewContainer: {
//     flex: 1,
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//   },
//   number: {
//     color: "#d3d3d3",
//   },
//   horizontalLine: {
//     flex: 1,
//     borderWidth: 2,
//     borderRadius: 12,
//     borderColor: "#262736",
//   },
//   solscanButton: {
//     backgroundColor: "#251a3a",
//     paddingVertical: 10,
//     alignItems: "center",
//     borderRadius: 12,
//     flexDirection: "row",
//     justifyContent: "center",
//   },
//   solscanText: {
//     color: "#5b3f94",
//     fontSize: 18,
//     fontWeight: 600,
//   },
// });
