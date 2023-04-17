import { StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";
import { primaryColors } from "../../../styles/Colors";

const styles = StyleSheet.create({
  socialAuthLead: {
    textAlign: "center",
    color: primaryColors.neutral_2,
    fontSize: scale(12),
    fontFamily: "Roboto",
    marginBottom: scale(28),
  },
  socialAuthWrapper: {
    width: "100%",
    justifyContent: "center",
    height: scale(50),
  },
  authBtn: {
    width: "50%",
    backgroundColor: "red",
    borderRadius: scale(6),
  },
  authBtnContentWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  google: {
    backgroundColor: primaryColors.white,
    borderColor: primaryColors.neutral_3,
  },
  facebook: {
    backgroundColor: primaryColors.facebook,
    borderColor: primaryColors.facebook,
  },
  googleText: {
    color: primaryColors.dark,
  },
  facebookText: {
    color: primaryColors.white,
  },
  btnText: {
    marginLeft: scale(8),
    fontSize: scale(14),
  },
});

export default styles;
