import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 12,
    paddingTop: 12,
  },

  info: {
    marginBottom: 12,
    fontSize: 16,
  },

  text1: {
    fontSize: 16,
  },
  
  button: {
    padding: 16,
    marginBottom: 12,
    backgroundColor: '#0016a83a',
    borderRadius: 4,
  },

  buttonTitleContainer: {
    display: 'flex',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    alignItems: 'center'
  },

  buttonTitle: {
    fontSize: 20,
  },
});
