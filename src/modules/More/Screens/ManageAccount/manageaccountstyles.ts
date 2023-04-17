import { StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";
import { primaryColors } from "../../../../styles/Colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: primaryColors.backgroundColor,
  },
  contentWrapper: {
    paddingHorizontal: scale(16),
    paddingVertical: scale(16),
  },
  input: {
    marginBottom: scale(16),
  },
  passwordBtnWrapper: {
    marginTop: scale(8),
    marginBottom: scale(48),
    height: scale(48),
  },
  passwordBtn: {
    textAlign: "left",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
});

export default styles;
