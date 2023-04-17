import { StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";
import { primaryColors } from "../../styles/Colors";

const styles = StyleSheet.create({
  errorText: {
    color: primaryColors.red,
    fontSize: scale(12),
  },
});

export default styles;
