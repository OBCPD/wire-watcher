import React from "react";
import { Text, View, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import styles from "./styles";

import store from "../../store";
import RegisteredDevice from "../../components/RegisteredDevice/index";

export default function Register(props) {
  const renderDevices = (data) => {
    console.log("test");
    return (
      <View>
        <RegisteredDevice
          device={data.item.device}
          number={data.item.number}
          power={data.item.power}
          voltage={data.item.voltage}
        />
      </View>
    );
  };

  const renderRooms = (data) => {
    return (
      <View>
        <Text>Room: {data.item.name}</Text>
        <FlatList
          data={data.item.devices}
          keyExtractor={(device) => device.name}
          renderItem={renderDevices}
        ></FlatList>
      </View>
    );
  };

  return (
    <View>
      <Text>
        Here you will be able to register what electronic devices are commonly
        used in each socket to simulate if a fire due to overcharge may happen.
      </Text>
      <View>
        <Text>Click here to add devices</Text>
        <Ionicons
          name="add-circle-outline"
          size={25}
          color="black"
          onPress={() => {
            props.navigation.navigate({
              routeName: "AddDevice",
            });
          }}
        />
      </View>
      <FlatList data={store.rooms} keyExtractor={(room) => String(room.name)} renderItem={renderRooms}></FlatList>
    </View>
  );
}
