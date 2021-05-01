import React from "react";
import { Text, View, FlatList, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons'

import styles from './styles'

export default function Room(props) {
  const room = props.navigation.getParam("room");

  function navigateToDevice(device) {
    props.navigation.navigate('Device', { device })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{ room.name }</Text>
      <Text style={styles.text}>Devices installed on { room.name }.</Text>
      <FlatList
        style={styles.deviceList}
        data={room.devices}
        keyExtractor={() => String(Math.random())}
        showsVerticalScrollIndicator={false}
        renderItem={({ item: device }) => (
          <TouchableOpacity
            style={styles.deviceButton}
            onPress={() => navigateToDevice(device)}
          >
            <MaterialCommunityIcons style={styles.buttonIcon} name='clipboard-check-multiple' size={24} />
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
