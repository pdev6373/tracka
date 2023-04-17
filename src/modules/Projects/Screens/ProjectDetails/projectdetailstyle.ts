import { StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";
import { primaryColors, secondaryColors } from "../../../../styles/Colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: primaryColors.backgroundColor,
  },
  wrapper: {
    paddingHorizontal: scale(16),
    paddingBottom: scale(24),
  },
  contentWrapper: {
    paddingTop: scale(28),
    backgroundColor: primaryColors.backgroundColor,
  },
  imageWrapper: {
    height: scale(200),
    backgroundColor: primaryColors.blue,
    position: "relative",
  },
  image: { height: "100%" },
  statusCard: {
    position: "absolute",
    bottom: scale(16),
    left: scale(16),
  },
  textContentWrapper: {
    paddingHorizontal: scale(16),
    paddingTop: scale(28),
  },
  heading: {
    fontSize: scale(16),
    lineHeight: scale(24),
    color: primaryColors.dark,
  },
  reportSection: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: scale(8),
    paddingBottom: scale(28),
  },
  report: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: scale(16),
  },
  reportText: {
    marginLeft: scale(4),
    fontSize: scale(12),
    lineHeight: scale(16),
    color: primaryColors.neutral_2,
  },
  textSection: {
    fontFamily: "Roboto",
    fontSize: scale(14),
    lineHeight: scale(20),
    color: primaryColors.neutralTextColor,
    marginBottom: scale(16),
  },
  actionWrapper: {
    marginBottom: scale(24),
  },
  action: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: scale(10),
  },
  actionText: {
    fontSize: scale(12),
    lineHeight: scale(16),
    fontFamily: "Roboto",
    marginLeft: scale(6),
    color: primaryColors.blue,
  },
  reportActionSection: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: primaryColors.white,
    paddingHorizontal: scale(16),
    paddingVertical: scale(20),
  },
  reportBtn: {
    height: scale(48),
    flex: 1,
  },
  locationBtn: {
    paddingHorizontal: scale(12),
    paddingVertical: scale(12),
    backgroundColor: secondaryColors.distantHorizon,
    flexShrink: 0,
    marginRight: scale(10),
    alignItems: "center",
    justifyContent: "center",
  },
});

export default styles;
