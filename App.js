import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";

export default function App() {
  return (
    <Provider>
      <View style={styles.container}>
        <Text
          style={{
            color: "black",
            fontWeight: "bold",
            fontSize: 53,
          }}
        >
          {" "}
          Let's GO! 🧨 REACT NATIVE👨🏻‍💻{" "}
        </Text>
        <StatusBar style="auto" />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  baseText: {
    fontWeight: "bold",
  },
  innerText: {
    color: "red",
  },
});
