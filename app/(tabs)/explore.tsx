import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function explore() {
  return (
    <SafeAreaView style={styles.scrollViewContainer}>
      <View>
        <Text style={styles.textColor}>explore</Text>
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
