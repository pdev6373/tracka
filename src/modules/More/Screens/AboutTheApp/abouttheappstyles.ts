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
});

export default styles;
