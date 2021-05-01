import React, { useState } from "react";
import { Text, View, TouchableOpacity, FlatList } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons'

import styles from './styles.js'

import store from "../../store"

export default function Home(props) {
  const [status, setStatus] = useState(store.rooms.map((room) => {
    const deviceStatus = room.devices.map((device) => {
      const status = device.heat.reduce((state, n) => {
        if (n >= 95) {
          return 2
        }
        else if (n >= 55) {
          return 1
        }
        return 0
      }, 0)
      return {name: device.name, status: status}
    })

    console.log(deviceStatus[0].status)

    const rStatus = deviceStatus.reduce((state, n) => Math.max(n.status, state), deviceStatus[0].status)

    return {
      name: room.name,
      roomStatus: rStatus,
      deviceStatus: deviceStatus,
    }
  }))

  function navigateToDevices(room) {
    props.navigation.navigate('Room', { room })
  }

  // console.log(status)

  return (
    <View style={styles.container}>
      <Text>Here you will be able to watch your home's sockets information.</Text>
      <Text>{ JSON.stringify(status) }</Text>
      <FlatList
        style={styles.roomList}
        data={store.rooms}
        keyExtractor={(name) => String(name)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item: room }) => (
          <TouchableOpacity
            style={styles.roomButton}
            onPress={() => navigateToDevices(room)}
          >
            <MaterialCommunityIcons style={styles.buttonIcon} name='clipboard-check-multiple' size={24} />
            <View>
              <Text style={styles.roomTitle}>{room.name}</Text>
              <Text>
                  Click here to see more...
              </Text>
            </View>
            
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
