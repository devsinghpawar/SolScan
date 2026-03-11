import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

export default function orders() {
  const router = useRouter();
  return (
    <SafeAreaView>
      <TouchableOpacity onPress={() => router.back()}>
        <Text>orders</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
