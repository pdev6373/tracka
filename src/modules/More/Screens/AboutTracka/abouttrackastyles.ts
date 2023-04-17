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
  wrapper: {
    paddingHorizontal: scale(16),
    paddingBottom: scale(24),
  },
  heading: {
    fontSize: scale(14),
    fontFamily: "Roboto",
    color: primaryColors.dark,
    marginBottom: scale(4),
    lineHeight: scale(24),
    fontWeight: "500",
  },
  content: {
    fontSize: scale(14),
    lineHeight: scale(20),
    color: primaryColors.neutralTextColor,
    marginBottom: scale(10),
  },
  link: {
    fontSize: scale(14),
    lineHeight: scale(20),
    marginBottom: scale(10),
    fontFamily: "Roboto",
    color: primaryColors.neutral_2,
  },
  footer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: scale(42),
  },
  outro: {
    textAlign: "center",
    color: primaryColors.neutralTextColor,
    fontWeight: "bold",
    fontSize: scale(12),
    fontFamily: "Roboto",
    lineHeight: scale(16),
    marginBottom: scale(32),
  },
  leadOutro: {
    marginBottom: scale(16),
    fontSize: scale(12),
    lineHeight: scale(16),
    color: primaryColors.neutralTextColor,
  },
});

export default styles;
