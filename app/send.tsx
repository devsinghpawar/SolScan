import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function SendScreen() {
  const router = useRouter();
  return (
    <KeyboardAvoidingView
      style={s.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={s.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color={"#fff"} />
        </TouchableOpacity>

        <Text style={s.title}> Send screen</Text>
        <View style={{ width: 24 }} />
      </View>
      <View></View>
    </KeyboardAvoidingView>
  );
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0D0D12",
    padding: 16,
    paddingTop: 60,
  },
  center: {
    flex: 1,
    backgroundColor: "#0D0D12",
    justifyContent: "center",
    alignItems: "center",
    padding: 40,
  },
  emptyTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "700",
    marginTop: 16,
  },
  emptyText: {
    color: "#6B7280",
    fontSize: 14,
    textAlign: "center",
    marginTop: 8,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 24,
  },
  title: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "700",
  },
  card: {
    backgroundColor: "#16161D",
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#2A2A35",
  },
  cardLabel: {
    color: "#6B7280",
    fontSize: 12,
    textTransform: "uppercase",
    marginBottom: 4,
  },
  cardAddress: {
    color: "#9945FF",
    fontSize: 14,
    fontFamily: "monospace",
  },
  inputGroup: {
    marginBottom: 16,
  },
  inputLabel: {
    color: "#6B7280",
    fontSize: 12,
    textTransform: "uppercase",
    marginBottom: 8,
  },
  input: {
    backgroundColor: "#16161D",
    color: "#fff",
    padding: 16,
    borderRadius: 12,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#2A2A35",
  },
  sendButton: {
    backgroundColor: "#14F195",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 8,
  },
  sendButtonDisabled: {
    opacity: 0.5,
  },
  sendButtonText: {
    color: "#0D0D12",
    fontSize: 18,
    fontWeight: "700",
  },
  feeText: {
    color: "#6B7280",
    fontSize: 12,
    textAlign: "center",
    marginTop: 12,
  },
  backButton: {
    backgroundColor: "#9945FF",
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 10,
    marginTop: 16,
  },
  backButtonText: {
    color: "#fff",
    fontWeight: "600",
  },
});
