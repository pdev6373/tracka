import { StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";
import { primaryColors } from "../../styles/Colors";

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: scale(16),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: primaryColors.white,
    paddingBottom: scale(16),
  },
  backBtn: {
    height: "100%",
    justifyContent: "center",
  },
  btn: {
    height: scale(32),
  },
  btnContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  btnText: {
    fontFamily: "Roboto",
    fontSize: scale(12),
    lineHeight: scale(16),
    marginLeft: scale(4),
    color: primaryColors.lightBlue,
  },
});

export default styles;
