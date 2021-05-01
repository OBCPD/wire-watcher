import React, { useState, useRef } from "react";
import { Text, View, TouchableOpacity, Animated } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import styles from "./styles";

export default function Suggestions() {
  const [firstClicked, setFirstClicked] = useState(false);

  const btnHeight = useRef(new Animated.Value(200)).current;

  Animated.timing(btnHeight, {
    toValue: firstClicked ? 500 : 1,
    duration: 1000,
    useNativeDriver: false
  }).start();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Suggestions</Text>
      <Text style={styles.info}>
        Learn about what to do to prevent home fires and eletric problems and
        what to do if a fire happen.
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          setFirstClicked(!firstClicked);
        }}
      >
        <View style={styles.buttonTitleContainer}>
          <Text>Preventing home fire</Text>
          <Ionicons name="ios-search" size={16} color="black" />
        </View>
        <Animated.View style={{ height: btnHeight }}>
          <Text style={styles.text1}>
            Pay attention when cooking, the most common cause of home fires is
            cooking accidents. One can't be too careful.
          </Text>
          <Text style={styles.text1}>
            Pay attention to your heater's temperature, if it is too high, the
            heater can overcharge and cause a fire.
          </Text>
          <Text style={styles.text1}>
            Remember to take care how many devices you plug-in in your socket.
            An excessive number of devices can overcharge it and cause a home
            fire.
          </Text>
        </Animated.View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <View style={styles.buttonTitleContainer}>
          <Text>What to do if a home fire starts?</Text>
          <Ionicons name="ios-search" size={16} color="black" />
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <View style={styles.buttonTitleContainer}>
          <Text>Avoiding overcharge </Text>
          <Ionicons name="ios-search" size={16} color="black" />
        </View>
      </TouchableOpacity>
    </View>
  );
}
