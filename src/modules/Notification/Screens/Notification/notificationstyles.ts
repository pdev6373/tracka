import { StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";
import { primaryColors } from "../../../../styles/Colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: primaryColors.white,
  },
  scrollView: {
    backgroundColor: primaryColors.white, 
    paddingHorizontal: scale(20),
    paddingVertical: scale(10)
  },
  wrapper: {
    paddingHorizontal: scale(16),
    paddingBottom: scale(24),
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    backgroundColor: primaryColors.white,
  },
  lead: {
    fontFamily: "Roboto",
    fontWeight: "500",
    fontSize: scale(20),
    lineHeight: scale(24),
    marginTop: scale(24),
    marginBottom: scale(8),
    color: primaryColors.neutralTextColor,
  },
  desc: {
    color: primaryColors.neutralTextColor,
    fontSize: scale(12),
    lineHeight: scale(16),
    textAlign: "center",
  },
});

export default styles;
