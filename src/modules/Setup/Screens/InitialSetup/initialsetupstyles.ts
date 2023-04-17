import { StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";
import { primaryColors } from "../../../../styles/Colors";

const styles = StyleSheet.create({
  contentWrapper: {
    paddingHorizontal: scale(16),
  },
  lead: {
    fontSize: scale(12),
    fontFamily: "Roboto",
    lineHeight: scale(16),
    color: primaryColors.neutralTextColor,
    marginBottom: scale(32),
  },
  input: {
    marginBottom: scale(21),
  },
  btnWrapper: {
    marginTop: scale(16),
    marginBottom: scale(32),
    height: scale(48),
  },
});

export default styles;
