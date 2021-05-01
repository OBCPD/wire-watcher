import React from "react";
import { Text, View } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons'

import styles from './styles'

export default function Device(props) {
  const device = props.navigation.getParam("device");
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{device.name}</Text>

    </View>
  );
}
