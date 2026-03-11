import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Settings() {
  const router = useRouter();

  return (
    <SafeAreaView>
      <View>
        <Text>Setting</Text>
        <TouchableOpacity onPress={() => router.push("/orders")}>
          <Text>My order</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity>
          <Text>My order</Text>
        </TouchableOpacity> */}
      </View>
    </SafeAreaView>
  );
}
