import React from "react";
import { Text, View } from "react-native";

import styles from "./styles";

export default function RegisteredDevice(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.capitalize, styles.text}>Device: {props.name}</Text>
      <Text style={styles.text}>Power: {props.power}</Text>
      <Text style={styles.text}>Voltage: {props.voltage}</Text>
    </View>
  );
}
