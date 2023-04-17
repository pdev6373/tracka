import { StyleSheet } from "react-native";
import { primaryColors } from "../../styles/Colors";
import { scale } from "react-native-size-matters";

const styles = StyleSheet.create({
  filter: {
    backgroundColor: "transparent",
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "flex-start",
    padding: scale(16),
    height: scale(68),
  },
  heading: {
    fontSize: scale(16),
    color: primaryColors.dark,
    marginRight: "auto",
    marginLeft: "auto",
    fontFamily: "Roboto",
  },
  save: {
    color: primaryColors.blue
  }
});

export default styles;
