import React, { useState, useContext } from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { LineChart, YAxis, Grid } from "react-native-svg-charts";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import styles from "./styles";
import { StoreContext } from "../../store-context";

export default function Device(props) {
  const { newHeat } = useContext(StoreContext);
  const device = props.navigation.getParam("device");
  const room = props.navigation.getParam("room");

  const [heatArray, setHeatArray] = useState(device.heat);
  const [heat, setHeat] = useState("0");
  const inputHeatHandler = (value) => {
    setHeat(value);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{device.name}</Text>
      <Text style={styles.grapicTitle}>Temperature History</Text>
      <View style={{ height: 200, flexDirection: "row" }}>
        <YAxis
          data={heatArray}
          contentInset={{ top: 20, bottom: 20 }}
          svg={{
            fill: "grey",
            fontSize: 10,
          }}
          numberOfTicks={10}
          formatLabel={(value) => `${value}ºC`}
        />
        <LineChart
          style={{ flex: 1, marginLeft: 16 }}
          data={heatArray}
          svg={{ stroke: "#0016a8" }}
          contentInset={{ top: 20, bottom: 20 }}
        >
          <Grid />
        </LineChart>
      </View>
      <Text style={styles.formLabel}>(Debug/Test)</Text>
      <Text style={styles.formLabel}>
        Heat input simulating the entering of the sensors:
      </Text>
      <TextInput
        keyboardType="numeric"
        style={styles.formInput}
        placeholder="input here"
        onChangeText={(text) => inputHeatHandler(text)}
        value={heat}
      />
      <TouchableOpacity
        style={styles.formButton}
        onPress={() => {
          let aux = [...heatArray, parseInt(heat, 10)];
          setHeatArray(aux);
          newHeat(aux, device, room.name);
          console.log(heatArray);
        }}
      >
        <MaterialCommunityIcons name="arrow-collapse-up" size={20} />
        <Text style={styles.formButtonText}> Submit</Text>
      </TouchableOpacity>
    </View>
  );
}
