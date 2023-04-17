import { StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";
import { primaryColors } from "../../../../styles/Colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flatList: {
    paddingTop: scale(24),
    paddingHorizontal: scale(16),
  },
  spacer: {
    height: scale(24),
  },
  addNeed: {
    backgroundColor: primaryColors.blue,
    width: scale(56),
    height: scale(56),
  },
});

export default styles;
