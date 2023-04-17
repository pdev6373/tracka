import { StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";
import { primaryColors } from "../../styles/Colors";

const styles = StyleSheet.create({
  container: {
    backgroundColor: primaryColors.white,
    paddingVertical: scale(16),
    paddingHorizontal: scale(16),
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
  },
  searchSection: {
    flexGrow: 1,
  },
  filterSection: {
    flexShrink: 0,
    paddingLeft: 10,
    paddingRight: 10,
    paddingVertical: 4,
  },
});

export default styles;
