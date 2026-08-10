import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

interface Props {
  connected: boolean;
  connecting: boolean;
  publicKey: string | null;
  onConnect: () => void;
  onDisconnect: () => void;
}

export function ConnectButton({
  connected,
  connecting,
  publicKey,
  onConnect,
  onDisconnect,
}: Props) {
  return (
    <TouchableOpacity style={[s.button, s.disconnected]} onPress={onConnect}>
      <Ionicons name="wallet-outline" size={18} color={"#fff"} />
      <Text style={s.buttonText}>Connect Wallet </Text>
    </TouchableOpacity>
  );
}
const s = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
    gap: 8,
  },
  disconnected: {
    backgroundColor: "#9945FF",
  },
  buttonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
  },
});
