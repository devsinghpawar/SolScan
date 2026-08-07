import { StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useWalletStore } from "../stores/wallet-store";

interface Props {
  address: string;
}

export default function FavoriteButton({ address }: Props) {
  const addFavorite = useWalletStore((store) => store.addFavorite);
  const removeFavorite = useWalletStore((s) => s.removeFavorite);
  const favorites = useWalletStore((s) => s.favorites);
  const favorited = favorites.includes(address);

  return (
    <TouchableOpacity
      style={s.button}
      onPress={() => {
        console.log("Address:", address);
        if (favorited) {
          removeFavorite(address);
        } else {
          addFavorite(address);
        }
      }}
    >
      <Ionicons
        name={favorited ? "heart" : "heart-outline"}
        size={24}
        color={favorited ? "#FF4545" : "#666"}
      />
    </TouchableOpacity>
  );
}

const s = StyleSheet.create({
  button: {
    padding: 8,
  },
});
