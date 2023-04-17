import { StyleSheet } from "react-native";
import { primaryColors } from "../../styles/Colors";
import { scale } from "react-native-size-matters";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginRight: scale(16),
  },

  voteText: {
    color: primaryColors.blue,
    fontFamily: "Roboto",
    fontSize: scale(12),
    lineHeight: scale(16),
  },
});

export default styles;
