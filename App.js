import React from "react";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";

import Navigator from "./navigation/navigator";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      {/* <StatusBar barStyle='dark-content' translucent={true} /> */}
      <Navigator />
    </View>
  )
}
