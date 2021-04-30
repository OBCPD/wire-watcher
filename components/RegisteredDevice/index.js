import React from "react";
import { Text, View } from "react-native";

import styles from "./styles";

export default function RegisteredDevice(props) {
  return (
    <View>
      <Text>Device: {props.name}</Text>
      <Text>Power: {props.power}</Text>
      <Text>Voltage: {props.voltage}</Text>
    </View>
  );
}
