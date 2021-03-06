import React, { useState, useContext, useEffect } from "react";
import { Text, View, TouchableOpacity, FlatList } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import styles from "./styles.js";

import { StoreContext } from "../../store-context";

export default function Home(props) {
  const { rooms, registerDevice } = useContext(StoreContext);
  const [status, setStatus] = useState();

  useEffect(() => {
    registerDevice({
      name: "cooker",
      room: "kitchen",
      power: 3000,
      voltage: 220,
      heat: [22, 31, 42, 36, 45, 52],
    });
    registerDevice({
      name: "phone charger",
      room: "bedroom",
      power: 3000,
      voltage: 220,
      heat: [22, 31, 42, 65, 45, 52],
    });
    registerDevice({
      name: "television",
      room: "bedroom",
      power: 3000,
      voltage: 220,
      heat: [22, 31, 42, 36, 45, 52],
    });
    registerDevice({
      name: "hairdryer",
      room: "bathroom",
      power: 3000,
      voltage: 220,
      heat: [65, 95, 52, 45, 45, 80],
    });

    setStatus(
      rooms.map((room) => {
        const deviceStatus = room.devices.map((device) => {
          const maxHeat = device.heat.reduce((state, n) => {
            return Math.max(state, n);
          }, 0);
          console.log(maxHeat);
          let status = 0;
          if (maxHeat >= 95) {
            status = 2;
          } else if (maxHeat >= 65) {
            status = 1;
          } else {
            status = 0;
          }
          return { name: device.name, status: status };
        });

        const rStatus = deviceStatus.reduce(
          (state, n) => Math.max(n.status, state),
          deviceStatus[0].status
        );

        return {
          name: room.name,
          roomStatus: rStatus,
          deviceStatus: deviceStatus,
        };
      })
    );
  }, [rooms]);

  function navigateToDevices(room) {
    props.navigation.navigate("Room", { room, status });
  }

  function icon(room) {
    const foundStatusIndex = status.findIndex(
      (status) => status.name === room.name
    );
    console.log(status[foundStatusIndex].roomStatus);
    if (status[foundStatusIndex].roomStatus === 0)
      return (
        <MaterialCommunityIcons
          style={styles.buttonIcon}
          name={"clipboard-check-multiple"}
          size={24}
        />
      );
    else if (status[foundStatusIndex].roomStatus === 1)
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
      <Text style={styles.title}>Rooms</Text>
      <Text style={styles.text}>
        Here you will be able to watch your home's sockets information.
      </Text>
      {/* <Text>{JSON.stringify(rooms)}</Text>
      <Text> </Text>
      <Text>{JSON.stringify(status)}</Text> */}
      <FlatList
        style={styles.roomList}
        data={rooms}
        keyExtractor={() => String(Math.random())}
        showsVerticalScrollIndicator={false}
        renderItem={({ item: room }) => (
          <TouchableOpacity
            style={styles.roomButton}
            onPress={() => navigateToDevices(room)}
          >
            {icon(room)}
            <View>
              <Text style={styles.roomTitle}>{room.name}</Text>
              <Text style={styles.text}>Click here to see more...</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
