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
  lead: {
    fontSize: scale(12),
    color: primaryColors.dark,
  },
  formWrapper: {
    marginTop: scale(16),
  },
  input: {
    marginBottom: scale(16),
  },
  btnWrapper: {
    height: scale(48),
  },
});

export default styles;
