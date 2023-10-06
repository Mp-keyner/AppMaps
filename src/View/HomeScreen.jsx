import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.HomeScreen}>
      <Text>Edit App.js to change this screen and turn it into your app.</Text>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  HomeScreen: {
    // flex: 1,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
});
