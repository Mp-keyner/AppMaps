import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./src/View/HomeScreen";

export default function Navigation() {
  return (
    <NavigationContainer>
      <HomeScreen />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  HomeScreen: {
    // flex: 1,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
});
