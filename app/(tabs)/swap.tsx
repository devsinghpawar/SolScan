import { useState } from "react";
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
// import { CryptoIcon } from "@vnaidin/react-native-cryptocurrency-icons";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SwapScreen() {
  const [fromToken, setFromToken] = useState("ETH");
  const [toToken, setToToken] = useState("DAI");
  const [fromAmount, setFromAmount] = useState("");
  const [toAmount, setToAmount] = useState("");

  const [coinBalance, SetCoinBalance] = useState("0.0661");
  const [balanceAmount, setBalanceAmount] = useState("499.749");

  function handleTextChange(text: string) {
    let numericValue = text.replace(/[^0-9.]/g, "");

    const parts = numericValue.split(".");
    if (parts.length > 2) {
      numericValue = parts[0] + "." + parts.slice(1).join("");
    }

    // ---- NEW PRECISION LOGIC ---
    if (parts.length === 2 && parts[1].length > 8) {
      // Only keep the first 8 characters after the dot
      numericValue = parts[0] + "." + parts[1].substring(0, 8);
    }

    setFromAmount(numericValue);
  }

  const swapToken = () => {
    setFromToken(toToken);
    setToToken(fromToken);
    setFromAmount(toAmount);
    setToAmount(fromAmount);
  };

  const haldleSwap = () => {
    if (!fromAmount) return Alert.alert("Enter an amount");

    Alert.alert(
      "Swap",
      `Swapping ${fromAmount} ${fromToken} to ${toAmount} ${toToken}`,
    );
  };

  return (
    <ScrollView style={s.scrollViewContainer}>
      <SafeAreaView>
        <Text style={s.title}>Swap Tokens</Text>

        {/* <View style={s.swapContainer}> */}
        <View style={s.swapCryptoBox}>
          <View style={s.flexContainer}>
            <TouchableOpacity style={s.tokenSelector}>
              {/* <CryptoIcon symbol="eth" originSize={32} /> */}

              <Text style={s.swapCoinText}>{fromToken}</Text>

              <Ionicons name="chevron-down" size={18} color="#888" />
            </TouchableOpacity>

            <TextInput
              style={s.input}
              value={fromAmount}
              onChangeText={handleTextChange}
              keyboardType="numeric"
              placeholder="0.00"
              placeholderTextColor="#666"
              maxLength={10}
            />
          </View>

          <View style={s.flexContainer}>
            <Text style={s.balanceText}>
              Balance: {coinBalance} {fromToken}
            </Text>

            <Text style={s.balanceText}>${balanceAmount}</Text>
          </View>
        </View>

        <View style={s.arrowContainer}>
          <TouchableOpacity onPress={swapToken} style={s.swapArrow}>
            <Ionicons name="arrow-down" color="#fff" size={20} />
          </TouchableOpacity>
        </View>

        <View style={s.swapCryptoBox}>
          <View style={s.flexContainer}>
            <TouchableOpacity style={s.tokenSelector}>
              {/* <CryptoIcon symbol="dai" originSize={32} /> */}

              <Text style={s.swapCoinText}>{toToken}</Text>

              <Ionicons name="chevron-down" size={18} color="#888" />
            </TouchableOpacity>

            <Text style={s.input}>{toAmount}</Text>
          </View>

          <View style={s.flexContainer}>
            <Text style={s.balanceText}>
              Balance: {coinBalance} {fromToken}
            </Text>

            <Text style={s.balanceText}>${balanceAmount}</Text>
          </View>
        </View>
        {/* </View> */}

        <TouchableOpacity style={s.swapButtonContainer} onPress={haldleSwap}>
          <Text style={s.swapText}>Swap</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </ScrollView>
  );
}

const s = StyleSheet.create({
  scrollViewContainer: {
    margin: 20,
    flex: 1,
    // backgroundColor: "#0D0D12",
  },
  title: {
    color: "#FFFFFF",
    fontWeight: 500,
    fontSize: 20,
    padding: 10,
  },
  swapContainer: {
    // width: "100%",
    // position: "relative",
    // alignItems: "center",
  },

  swapCryptoBox: {
    backgroundColor: "#181818",
    // backgroundColor: "#14F195",
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderWidth: 1,
    borderColor: "#1E1E1E",
    borderRadius: 25,
    // margin: 30,
    marginBottom: 10,
  },
  flexContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 5,
    alignItems: "center",
  },

  tokenSelector: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#000000",
    paddingLeft: 8,
    paddingRight: 12,
    paddingVertical: 8,
    borderBlockColor: "#1E1E1E",
    borderRadius: 24,
    gap: 6,
  },
  swapCoinText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: 500,
    lineHeight: 21,
  },
  swapToCrypto: {},

  swapToCoin: {},

  CryptoValueText: {
    color: "#FFFFFF",
    fontSize: 28,
    fontWeight: 600,
  },
  inputContainer: {},

  input: {
    color: "#FFFFFF",
    fontSize: 28,
    fontWeight: 600,
    textAlign: "right",
  },

  balanceText: {
    color: "#A9AAB2",
    fontWeight: 500,
    fontSize: 14,
  },

  arrowContainer: {
    alignItems: "center",
    marginVertical: -22,
    zIndex: 10,
  },

  swapArrow: {
    backgroundColor: "#0D0D12",
    width: 44,
    height: 44,
    borderWidth: 3,
    borderColor: "#0D0D12",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },

  swapButtonContainer: {
    marginTop: 20,
    backgroundColor: "#14F195",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  swapButton: {},
  swapText: {
    fontSize: 20,
    fontWeight: 600,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
});
