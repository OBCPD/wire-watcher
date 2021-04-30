import React from "react";
import { Text, View, Button } from "react-native";

// import styles from './styles'

import store from "../../store"

export default function Home() {
  return (
    <View>
      <Text>Home</Text>
      <Button title='Store' />
      <Text>{JSON.stringify(store)}</Text>
    </View>
  );
}
