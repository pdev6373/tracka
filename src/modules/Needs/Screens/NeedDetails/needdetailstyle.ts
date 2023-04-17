import { StyleSheet } from "react-native";
import { primaryColors } from "../../../../styles/Colors";
import { scale } from "react-native-size-matters";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingRight: scale(16),
    paddingLeft: scale(16),
    paddingTop: scale(20),
    height: "100%",
    backgroundColor: primaryColors.white,
    flexGrow: 1,
    overflow: "scroll",
  },
  scrollView: {
    flexDirection: "column",
    height: "100%",
    flex: 1,
    backgroundColor: primaryColors.white,
  },
  title: {
    color: primaryColors.dark,
    fontSize: scale(22),
    fontFamily: "Roboto",
    marginBottom: scale(18),
  },
  dateSection: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: scale(18),
  },
  description: {
    fontFamily: "Roboto",
    fontSize: scale(14),
    color: primaryColors.lightBlue,
    marginBottom: scale(18),
    lineHeight: scale(28),
  },
  infoSection: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: scale(18),
  },
  infoHeading: {
    color: primaryColors.dark,
    fontFamily: "Roboto",
    marginRight: scale(8),
    fontSize: scale(14),
  },
  info: {
    color: primaryColors.dark,
    fontFamily: "Roboto",
    fontSize: scale(14),
    textTransform: "capitalize",
  },
  btn: {
    marginTop: scale(62),
    marginBottom: scale(26),
    width: "100%",
  },
  voteBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  voteBtnText: {
    marginLeft: scale(15),
    fontFamily: "Roboto",
    fontSize: scale(16),
  },
  status: {
      width: scale(66),
  }
});

export default styles;
