import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 12,
  },
  button: {
    padding: 10,
    borderColor: "#0016a8",
    borderWidth: 2,
    borderRadius: 10,
  },
  buttonTitleContainer: {
    flexDirection: "row",
  },
});
