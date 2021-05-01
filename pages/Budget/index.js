import React, { useState } from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import store from "../../store";

import styles from "./styles";

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
    <View style={styles.container}>
      <Text style={styles.title}>Send your system specifications to us</Text>
      <Text style={styles.info}>
        Calculate the total expenses of instaling our monitoring services in
        your home, submit the information and wait contact in your email.
      </Text>
      <Text style={styles.formLabel}>Please, type your name:</Text>
      <TextInput
        style={styles.formInput}
        placeholder="Name here"
        onChangeText={(text) => inputNameHandler(text)}
        value={name}
      />
      <Text style={styles.formLabel}>Please, type your email:</Text>
      <TextInput
        style={styles.formInput}
        placeholder="Email here"
        onChangeText={(text) => inputEmailHandler(text)}
        value={email}
      />
      <Text style={styles.formLabel}>
        Please, type the number of sockets you have in your home:
      </Text>
      <TextInput
        keyboardType="numeric"
        style={styles.formInput}
        placeholder="Only number here"
        onChangeText={(text) => inputSocketsHandler(text)}
        value={sockets}
      />
      <Text style={styles.formLabel}>
        Please, type the number of devices you want to register in our
        monitoring system:
      </Text>
      <TextInput
        keyboardType="numeric"
        style={styles.formInput}
        placeholder="Only number here"
        onChangeText={(text) => inputDevicesHandler(text)}
        value={devices}
      />

      <TouchableOpacity
        style={styles.formButton}
        onPress={() => {
          if (
            parseInt(sockets, 10) !== 0 &&
            parseInt(devices, 10) !== 0 &&
            name !== "" &&
            email !== ""
          ) {
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
        <MaterialCommunityIcons name="comment-question" size={20} />
        <Text style={styles.formButtonText}> Submit</Text>
      </TouchableOpacity>
      <Text style={{ textAlign: "center", marginTop: 10 }}>{span}</Text>
    </View>
  );
}
