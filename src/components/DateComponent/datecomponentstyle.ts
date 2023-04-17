import { StyleSheet } from "react-native";
import { primaryColors } from "../../styles/Colors";
import { scale } from "react-native-size-matters";

const styles = StyleSheet.create({
  date: {
    fontFamily: "Roboto",
    fontSize: scale(12),
    color: primaryColors.lightBlue,
  },
});

export default styles;
