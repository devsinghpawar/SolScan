import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Settings() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.scrollViewContainer}>
      <View>
        <Text style={styles.textColor}>Setting</Text>
        <TouchableOpacity onPress={() => router.push("/orders")}>
          <Text style={styles.textColor}>My order</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity>
          <Text>My order</Text>
        </TouchableOpacity> */}
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  scrollViewContainer: {
    padding: 20,
    flex: 1,
    backgroundColor: "#0D0D12",
  },
  textColor: {
    color: "#fff",
  },
});
