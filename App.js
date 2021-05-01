import React from "react";
import { View } from "react-native";

import Navigator from "./navigation/navigator";
import { StoreContextProvider } from './store-context'

export default function App() {
  return (
    <StoreContextProvider>
      <View style={{ flex: 1 }}>
          <Navigator />
      </View>
    </StoreContextProvider>
  )
}
