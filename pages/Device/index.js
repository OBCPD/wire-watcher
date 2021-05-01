import React from "react";
import { Text, View } from "react-native";
import { LineChart, YAxis, Grid } from 'react-native-svg-charts'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import styles from './styles'

export default function Device(props) {
  const device = props.navigation.getParam("device");
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{device.name}</Text>
      <Text style={styles.grapicTitle}>Temperature History</Text>
        <View style={{ height: 200, flexDirection: 'row' }}>
          <YAxis
            data={device.heat}
            contentInset={{ top: 20, bottom: 20 }}
            svg={{
                fill: 'grey',
                fontSize: 10,
            }}
            numberOfTicks={10}
            formatLabel={(value) => `${value}ºC`}
          />
          <LineChart
            style={{ flex: 1, marginLeft: 16 }}
            data={device.heat}
            svg={{ stroke: '#0016a8' }}
            contentInset={{ top: 20, bottom: 20 }}
          >
            <Grid />
          </LineChart>
        </View>
    </View>
  );
}
