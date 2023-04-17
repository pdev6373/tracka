import { StyleSheet } from "react-native";
import { primaryColors, secondaryColors } from "../../styles/Colors";
import { scale } from "react-native-size-matters";

const styles = StyleSheet.create({
  container: {
    backgroundColor: primaryColors.white,
    paddingVertical: scale(16),
    paddingHorizontal: scale(14),
    borderRadius: scale(8),
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  chartItem: {
    width: scale(16.8),
    backgroundColor: primaryColors.blue_2,
    borderBottomColor: primaryColors.blue_2,
    borderBottomWidth: scale(1.2),
    borderTopLeftRadius: scale(12),
    borderTopRightRadius: scale(12),
    borderWidth: 0,
  },
  chartItemContainer: {
    height: scale(135),
    backgroundColor: primaryColors.backgroundColor,
    marginHorizontal: scale(4),
    marginBottom: scale(5),
    alignItems: "center",
    justifyContent: "flex-end",
    borderWidth: 0,
    overflow: "hidden",
  },
  chartItemText: {
    color: secondaryColors.blue,
    fontFamily: "Roboto_Regular",
    fontSize: scale(12),
    lineHeight: scale(16),
    textTransform: "capitalize",
  },
});

export default styles;
