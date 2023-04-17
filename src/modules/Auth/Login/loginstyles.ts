import { StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";
import { primaryColors } from "../../../styles/Colors";

const styles = StyleSheet.create({
  container: {
    backgroundColor: primaryColors.backgroundColor,
  },
  wrapper: {
    backgroundColor: primaryColors.backgroundColor,
    padding: scale(16),
    flex: 1,
    height: " 100%",
  },
  scrollView: {
    height: '100%'
  },
  heading: {
    fontSize: scale(24),
    color: primaryColors.dark,
    fontFamily: "Roboto",
    textAlign: "center",
    marginBottom: scale(20),
  },
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
  dividerWrapper: {
    marginTop: scale(16),
    marginBottom: scale(20),
    flexDirection: "row",
    alignItems: "center",
  },
  divider: {
    width: "45%",
  },
  dividerText: {
    marginHorizontal: scale(8),
    fontSize: scale(10),
    color: primaryColors.neutral_2,
    fontWeight: "500",
  },
  input: {
      marginBottom: scale(20)
  },
  formBtn: {
      height: scale(48),
  },
  loginBtnWrapper: {
    marginTop: scale(24),
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    height: scale(50),
  },
  loginBtnText: {
    fontSize: scale(12),
    color: primaryColors.neutral_2,
    fontFamily: 'Roboto',
  },
  loginBtn: {
    marginLeft: scale(2)
  },
  loginBtnLabel: {
    color: primaryColors.blue
  },

});

export default styles;
