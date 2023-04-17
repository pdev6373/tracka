import { StyleSheet } from "react-native";
import { primaryColors, secondaryColors } from "../../../../styles/Colors";
import { borderRadius } from "../../../../styles/Borders";
import { scale } from "react-native-size-matters";

const styles = StyleSheet.create({
  container: {
    backgroundColor: primaryColors.white,
    borderRadius: borderRadius.regular,
    marginBottom: scale(16),
    padding: scale(16),
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: scale(6),
  },
  category: {
    fontFamily: "Roboto",
    fontWeight: "500",
    color: primaryColors.blue,
    textTransform: "capitalize",
  },

  title: {
    marginBottom: scale(6),
    fontFamily: "Roboto",
    fontWeight: "500",
    fontSize: scale(20),
    lineHeight: scale(24),
    color: primaryColors.blue,
  },
  stateListWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: scale(6),
    flexWrap: "wrap",
  },
  stateListItem: {
    flexDirection: "row",
    alignItems: "center",
  },
  stateListDot: {
    marginRight: scale(8),
    fontSize: scale(16),
    display: "flex",
    fontFamily: "Roboto",
    color: primaryColors.dark,
  },
  stateListText: {
    marginRight: scale(16),
    fontFamily: "Roboto",
    fontSize: scale(12),
    lineHeight: scale(16),
    color: primaryColors.dark,
  },
  description: {
    fontFamily: "Roboto",
    fontSize: scale(12),
    lineHeight: scale(16),
    color: secondaryColors.blue,
    marginBottom: scale(6),
  },
  statusWrapper: {
    width: scale(66),
  },
  bottomWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: scale(16),
  },
});

export default styles;
