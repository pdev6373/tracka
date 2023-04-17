import { StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";
import { primaryColors } from "../../../../styles/Colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: primaryColors.backgroundColor,
  },
  title: {
      paddingVertical: scale(10),
      fontWeight: "bold",
      fontSize: scale(16)
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
  },
});

export default styles;
