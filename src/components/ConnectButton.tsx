import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity, Text } from "react-native";

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
    <TouchableOpacity>
      <Ionicons />
      <Text>Connect Wallet </Text>
    </TouchableOpacity>
  );
}
