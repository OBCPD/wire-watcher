import React, { useState } from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";

import store from "../../store";

// import styles from './styles'

export default function Budget() {
  const [sockets, setSockets] = useState("");
  const [devices, setDevices] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [span, setSpan] = useState("");

  const inputSocketsHandler = (value) => {
    setSockets(value);
  };
  const inputDevicesHandler = (value) => {
    setDevices(value);
  };
  const inputNameHandler = (value) => {
    setName(value);
  };
  const inputEmailHandler = (value) => {
    setEmail(value);
  };

  return (
    <View>
      <Text>Budget Calculator</Text>
      <Text>
        Calculate the total expenses of instaling our monitoring services in
        your home, submit the information and wait contact in your email.
      </Text>
      <Text>Please type here your name:</Text>
      <TextInput
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        placeholder="name here"
        onChangeText={(text) => inputNameHandler(text)}
        value={name}
      />
      <Text>Please type here your email:</Text>
      <TextInput
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        placeholder="email here"
        onChangeText={(text) => inputEmailHandler(text)}
        value={email}
      />
      <Text>Please type here the number of sockets you have in your home:</Text>
      <TextInput
        keyboardType="numeric"
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        placeholder="only number here"
        onChangeText={(text) => inputSocketsHandler(text)}
        value={sockets}
      />
      <Text>
        Please type here the number of devices you want to register in our
        monitoring system:
      </Text>
      <TextInput
        keyboardType="numeric"
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        placeholder="only number here"
        onChangeText={(text) => inputDevicesHandler(text)}
        value={devices}
      />

      <TouchableOpacity
        onPress={() => {
          if (parseInt(sockets, 10) !== 0 && parseInt(devices, 10) !== 0 && name !== "" && email !== "") {
            store.budgetRegisters.push({
              name: name,
              email: email,
              sockets: sockets,
              devices: devices,
            });
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
