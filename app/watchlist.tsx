import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useWalletStore } from "../src/stores/wallet-store";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";

interface watchListItem {
  address: string;
  balance: number | null;
  loading: boolean;
}

export default function watchlistScreen() {
  const router = useRouter();
  const favorites = useWalletStore((store) => store.favorites);
  const isDevnet = useWalletStore((store) => store.isDevnet);

  const [items, isItems] = useState<watchListItem[]>([]);

  return (
    <SafeAreaView style={s.safe} edges={["top"]}>
      <View style={s.container}>
        <TouchableOpacity style={s.backButton} onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#FFFFFF" />
        </TouchableOpacity>

        <Text style={s.title}>Watchlist</Text>
        <Text style={s.subtitle}>
          {favorites.length} wallet{favorites.length !== 1 ? "s" : ""} ·{" "}
          {isDevnet ? "Devnet" : "Mainnet"}{" "}
        </Text>

        {favorites.length === 0 ? (
          <View style={s.emptyContainer}>
            <Ionicons name="heart-outline" size={24} color="#fff" />
            <Text style={s.emptyTitle}>No Wallets Saved</Text>
            <Text style={s.emptyText}>
              Search for a wallet and tap the heart to save it here.
            </Text>
          </View>
        ) : (
          <FlatList
            data={items}
            keyExtractor={(item) => item.address}
            contentContainerStyle={{ paddingBottom: 100 }}
            renderItem={({ item }) => (
              <TouchableOpacity style={s.card}>
                {" "}
                {item.address}{" "}
              </TouchableOpacity>
            )}
          />
        )}
      </View>
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#0D0D12",
  },
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 16,
  },
  backButton: {
    marginBottom: 16,
  },
  title: {
    color: "#FFFFFF",
    fontSize: 32,
    fontWeight: "700",
    marginBottom: 8,
  },
  subtitle: {
    color: "#6B7280",
    fontSize: 15,
    marginBottom: 24,
  },

  textcolor: {
    color: "#FFF",
  },
  favoriteList: {
    color: "#FFF",
  },

  emptyContainer: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 100,
  },
  emptyTitle: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "600",
    marginTop: 16,
  },
  emptyText: {
    color: "#687280",
    fontSize: 14,
    textAlign: "center",
    marginTop: 8,
    paddingHorizontal: 40,
  },
  card: {
    backgroundColor: "#16161D",
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#2A2A35",
    padding: 16,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    flex: 1,
  },
  iconBox: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: "#1E1E28",
    alignItems: "center",
    justifyContent: "center",
  },
  cardAddress: {
    color: "#9945FF",
    fontSize: 14,
    fontFamily: "monospace",
  },
  cardRight: {
    alignItems: "flex-end",
  },
  cardBalance: {
    color: "#14F195",
    fontSize: 16,
    fontWeight: "600",
  },
  cardError: {
    color: "#EF4444",
    fontSize: 14,
  },
});
