import React, { useState } from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";

import style from "./styles";
import store from "../../store";

export default function AddDevice() {
  const [room, setRoom] = useState("");
  const [name, setName] = useState("");
  const [power, setPower] = useState(0);
  const [voltage, setVoltage] = useState(0);

  const [span, setSpan] = useState("");

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
    <View>
      <Text className="title">Add Devices</Text>
      <Text className="label">Please type here the room name:</Text>
      <TextInput
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        placeholder="name here"
        onChangeText={(text) => inputRoomHandler(text)}
        value={room}
      />
      <Text className="label">Please type here the name of your device:</Text>
      <TextInput
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        placeholder="name here"
        onChangeText={(text) => inputNameHandler(text)}
        value={name}
      />
      <Text className="label">
        Please type here the power limit(Watts) of your device:
      </Text>
      <TextInput
        keyboardType="numeric"
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        placeholder="only number here"
        onChangeText={(text) => inputPowerHandler(text)}
        value={power}
      />
      <Text className="label">
        Please type here the voltage limit of your device:
      </Text>
      <TextInput
        keyboardType="numeric"
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        placeholder="only number here"
        onChangeText={(text) => inputVoltageHandler(text)}
        value={voltage}
      />

      <TouchableOpacity
        onPress={() => {
          if (room != "" && name != "" && power != 0 && voltage != 0) {
            const foundRoomIndex = store.rooms.findIndex(
              (room) => room.name === room
            );
            if (foundRoomIndex != -1) {
              store.rooms[foundRoomIndex].devices.push({
                name: name,
                power: power,
                voltage: voltage,
              });
            } else {
              store.rooms.push({
                name: room,
                devices: [{ name: name, power: power, voltage: voltage }],
              });
            }
            setSpan("Succesfully submitted!");
          } else {
            setSpan("There are mandatory fields empty!");
          }
        }}
      >
        <Text>Submit</Text>
      </TouchableOpacity>
      <Text>{span}</Text>
    </View>
  );
}
