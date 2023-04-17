import { StyleSheet } from "react-native";
import { secondaryColors } from "../../styles/Colors";
import { scale } from "react-native-size-matters";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    marginRight: scale(8),
  },
  name: {
    color: secondaryColors.blue,
    fontFamily: "Roboto",
    fontSize: scale(12),
    lineHeight: scale(16),
    textTransform: "capitalize",
  },
});

export default styles;
