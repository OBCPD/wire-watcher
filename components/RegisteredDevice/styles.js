import { StyleSheet, Dimensions } from "react-native"
const { width } = Dimensions.get('window')

export default StyleSheet.create({
  container: {
    flex: 1,
    width: (width/2) - 18,
    padding: 8,
    marginBottom: 12,
    borderRadius: 4,
    backgroundColor: '#0016a83a',
  },

  capitalize: {
    textTransform: 'capitalize',
  },
});
