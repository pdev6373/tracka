import { StyleSheet } from "react-native";
import { primaryColors } from "../../../styles/Colors";
import { scale } from "react-native-size-matters";

const styles = StyleSheet.create({
  label: {
    color: primaryColors.lightBlue,
    fontSize: scale(12),
    fontFamily: "Roboto",
    marginBottom: scale(10),
  },
  textArea: {
    borderColor: primaryColors.neutral,
  },
  errorWrapper: {
    marginTop: scale(5),
  },
});

export default styles;
