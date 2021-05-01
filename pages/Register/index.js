import React, { useContext } from "react";
import { Text, View, FlatList, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import styles from "./styles"

import RegisteredDevice from "../../components/RegisteredDevice/index";
import { StoreContext } from '../../store-context'

export default function Register(props) {
  const {rooms} = useContext(StoreContext)
  const renderDevices = (data) => {
    return (
      <View>
        <RegisteredDevice
          name={data.item.name}
          power={data.item.power}
          voltage={data.item.voltage}
        />
      </View>
    );
  };

  const renderRooms = (data) => {
    return (
      <View>
        <Text style={styles.deviceListTitle}>{data.item.name}</Text>
        <FlatList
          data={data.item.devices}
          keyExtractor={() => String(Math.random())}
          renderItem={renderDevices}
        ></FlatList>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text>
        Here you will be able to register what electronic devices are commonly
        used in each socket to simulate if a fire due to overcharge may happen.
      </Text>

      <View style={styles.deviceListContainer}>
        <Text style={styles.registerListTitle}>Registered Devices</Text>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => {
              props.navigation.navigate({
                routeName: "AddDevice",
              });
          }}
        >
          <Ionicons
            name="add-circle-outline"
            size={36}
            color="#0016a8"
            style={styles.addButtonIcon}
          />
        </TouchableOpacity>
      </View>
      <FlatList data={rooms} keyExtractor={() => String(Math.random())} renderItem={renderRooms}></FlatList>
    </View>
  );
}
