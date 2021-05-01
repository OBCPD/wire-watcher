import React, { useState, useContext } from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons'

import styles from "./styles"
// import store from "../../store";

import { StoreContext } from '../../store-context'

export default function AddDevice() {
  const [room, setRoom] = useState("");
  const [name, setName] = useState("");
  const [power, setPower] = useState("");
  const [voltage, setVoltage] = useState("");

  const [span, setSpan] = useState("");

  const store = useContext(StoreContext)

  const inputRoomHandler = (value) => {
    setRoom(value);
  };
  const inputNameHandler = (value) => {
    setName(value);
  };
  const inputPowerHandler = (value) => {
    setPower(value);
  };
  const inputVoltageHandler = (value) => {
    setVoltage(value);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Fill with your device details</Text>
      <Text style={styles.formLabel}>Please type here the room name:</Text>
      <TextInput
        style={styles.formInput}
        placeholder="name here"
        onChangeText={(text) => inputRoomHandler(text.toLowerCase())}
        value={room}
      />
      <Text style={styles.formLabel}>Please type here the name of your device:</Text>
      <TextInput
        style={styles.formInput}
        placeholder="name here"
        onChangeText={(text) => inputNameHandler(text.toLowerCase())}
        value={name}
      />
      <Text style={styles.formLabel}>
        Please type here the power limit(Watts) of your device:
      </Text>
      <TextInput
        keyboardType="numeric"
        style={styles.formInput}
        placeholder="only number here"
        onChangeText={(text) => inputPowerHandler(text)}
        value={power}
      />
      <Text style={styles.formLabel}>
        Please type here the voltage limit of your device:
      </Text>
      <TextInput
        keyboardType="numeric"
        style={styles.formInput}
        placeholder="only number here"
        onChangeText={(text) => inputVoltageHandler(text)}
        value={voltage}
      />

      <TouchableOpacity
        style={styles.formButton}
        onPress={() => {
          if (room !== "" && name !== "" && parseInt(power, 10) !== 0 && parseInt(voltage, 10) !== 0) {
            const foundRoomIndex = store.rooms.findIndex(
              (room) => room.name === room
            );
            if (foundRoomIndex != -1) {
              store.rooms[foundRoomIndex].devices.push({
                name: name,
                power: parseInt(power, 10),
                voltage: parseInt(voltage, 10),
              });
            } else {
              store.rooms.push({
                name: room,
                devices: [{ name: name, power: parseInt(power, 10), voltage: parseInt(voltage, 10) }],
              });
            }
            setSpan("Succesfully submitted!");
          } else {
            setSpan("There are mandatory fields empty!");
          }
        }}
      >
        <MaterialCommunityIcons name='arrow-collapse-up' size={20} />
        <Text style={styles.formButtonText}> Submit</Text>
      </TouchableOpacity>
      <Text>{span}</Text>
    </View>
  );
}
