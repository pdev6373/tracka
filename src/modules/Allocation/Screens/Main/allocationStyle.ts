import { StyleSheet } from "react-native";

import { scale } from "react-native-size-matters";
import { primaryColors } from "../../../../styles/Colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    backgroundColor: primaryColors.backgroundColor,
  },
  content: {
    paddingHorizontal: scale(16),
  },
  filter: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: primaryColors.white,
    padding: scale(16),
    height: scale(68),
    marginBottom: scale(16),
    width: '100%',
  },
  spacer: {
    height: scale(16),
  },
});

export default styles;
