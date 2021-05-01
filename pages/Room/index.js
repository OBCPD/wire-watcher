import React from "react";
import { Text, View, FlatList, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import styles from "./styles";

export default function Room(props) {
  const room = props.navigation.getParam("room");
  const status = props.navigation.getParam("status");

  function navigateToDevice(device) {
    props.navigation.navigate("Device", { device, room });
  }
  function icon(device) {
    const foundStatusIndex = status.findIndex(
      (status) => status.name === room.name
    );
    const foundDeviceIndex = status[foundStatusIndex].deviceStatus.findIndex(
      (status) => status.name === device.name
    );
    console.log(status[foundStatusIndex].deviceStatus[foundDeviceIndex].status);
    if (status[foundStatusIndex].deviceStatus[foundDeviceIndex].status === 0)
      return (
        <MaterialCommunityIcons
          style={styles.buttonIcon}
          name={"clipboard-check-multiple"}
          size={24}
        />
      );
    else if (
      status[foundStatusIndex].deviceStatus[foundDeviceIndex].status === 1
    )
      return (
        <MaterialCommunityIcons
          style={styles.buttonIcon}
          name={"clipboard-alert"}
          size={24}
        />
      );
    else
      return (
        <MaterialCommunityIcons
          style={styles.buttonIcon}
          name={"alert"}
          size={24}
        />
      );
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{room.name}</Text>
      <Text style={styles.text}>Devices installed on {room.name}.</Text>
      <FlatList
        style={styles.deviceList}
        data={room.devices}
        keyExtractor={() => String(Math.random())}
        showsVerticalScrollIndicator={false}
        renderItem={({ item: device }) => (
          <TouchableOpacity
            style={styles.deviceButton}
            onPress={() => navigateToDevice(device, room)}
          >
            {icon(device)}
            <View>
              <Text style={styles.deviceTitle}>{device.name}</Text>
              <Text style={styles.text}>Click here to see more...</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
