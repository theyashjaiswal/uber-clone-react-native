import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import tw from "tailwind-react-native-classnames";

const EatsScreen = () => {
  return (
    <SafeAreaView>
      <View>
        <Text
          style={tw`bg-black text-white mt-40 text-lg font-semibold text-center`}
        >
          Coming Soon 🛠
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default EatsScreen;

const styles = StyleSheet.create({});
