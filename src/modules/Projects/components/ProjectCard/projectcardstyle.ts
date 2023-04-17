import { StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";
import { primaryColors } from "../../../../styles/Colors";

const styles = StyleSheet.create({
  container: {
    minHeight: scale(350),
    backgroundColor: primaryColors.white,
    borderRadius: scale(12),
    marginBottom: scale(24),
    shadowColor: "rgba(0, 0, 0, 0.06)",
  },
  header: {
    paddingHorizontal: scale(24),
    paddingBottom: scale(16),
    paddingTop: scale(24),
  },
  amountWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: scale(8),
  },
  amount: {
    fontSize: scale(24),
    lineHeight: scale(24),
    color: primaryColors.darkBlue,
    fontFamily: "Roboto",
    marginRight: scale(8),
  },
  amountUnit: {
    fontSize: scale(10),
    lineHeight: scale(16),
    color: primaryColors.darkBlue,
  },
  title: {
    fontSize: scale(14),
    lineHeight: scale(20),
    color: primaryColors.lightBlue,
  },
  imageWrapper: {
    height: scale(164),
    backgroundColor: primaryColors.blue,
    position: "relative",
  },
  image: { height: "100%" },
  statusCard: {
    position: "absolute",
    bottom: scale(16),
    left: scale(16),
  },
  bottomSection: {
    paddingHorizontal: scale(16),
    paddingTop: scale(16),
    paddingBottom: scale(8),
  },
  reported: {
    fontWeight: "500",
    fontSize: scale(14),
    color: primaryColors.lightBlue,
    lineHeight: scale(24),
  },
  tabList: {
    flexDirection: "row",
    marginBottom: scale(8),
    width: "100%"
  },
  reportView: {
    marginBottom: scale(8),
  },
});

export default styles;
