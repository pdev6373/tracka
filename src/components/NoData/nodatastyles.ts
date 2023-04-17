import { StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";
import { primaryColors } from "../../styles/Colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: scale(50),
  },
  heading: {
    fontSize: scale(20),
    color: primaryColors.dark,
    marginTop: scale(16),
    marginBottom: scale(8),
    fontWeight: "500",
    fontFamily: "Roboto",
    textAlign: "center",
  },
  lead: {
    fontSize: scale(12),
    lineHeight: scale(16),
    color: primaryColors.lightBlue,
    fontFamily: "Roboto",
    textAlign: "center",
  },
});

export default styles;
