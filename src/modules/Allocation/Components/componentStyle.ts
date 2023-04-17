import { StyleSheet } from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { scale } from "react-native-size-matters";
import { primaryColors } from "../../../styles/Colors";
import { getStatusBarHeight } from "react-native-status-bar-height";

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: primaryColors.white,
    padding: scale(24),
    borderRadius: scale(8),
  },
  icon: {
    width: scale(40),
    height: scale(40),
  },
  iconDateText: {
    fontFamily: "Roboto",
    fontWeight: '400',
    fontSize: scale(12),
    lineHeight: scale(16),
    color: primaryColors.neutral_2,
    textTransform: "capitalize",
  },
  iconDateText2: {
    color: primaryColors.neutral,
  },
  iconTitle: {
    fontFamily: "Roboto_Regular",
    fontSize: scale(14),
    lineHeight: scale(20),
    color: primaryColors.dark,
    textTransform: "capitalize",
  },
  amount: {
    fontFamily: "Roboto_Medium",
    fontSize: scale(20),
    lineHeight: scale(30),
    fontWeight: "500",
    color: primaryColors.darkBlue,
  },
  currency: {
    fontFamily: "Roboto_Medium",
    fontSize: scale(10),
    lineHeight: scale(16),
    fontStyle: "normal",
    fontWeight: "500",
    color: primaryColors.darkBlue700,
    paddingLeft: scale(1),
  },
  currencyContainer: {
    justifyContent: 'flex-end',
  },
  spacer: {
    height: scale(16),
    padding: scale(10),
  },
  header: {
    backgroundColor: primaryColors.white,
    paddingHorizontal: scale(24),
    borderRadius: scale(8),
  },
  headerTitle: {
    fontFamily: "Roboto",
    fontSize: scale(16),
    lineHeight: scale(24),
    fontWeight: "400",
    textTransform: "capitalize",
  },
  item: {
    paddingHorizontal: scale(16),
    paddingVertical: scale(12),
    height: scale(68),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  itemMonth: {
    fontFamily: "Roboto_Medium",
    fontSize: scale(14),
    lineHeight: scale(24),
    fontWeight: "500",
    color: primaryColors.neutralTextColor,
    textTransform: "capitalize",
    letterSpacing: scale(0.1),
  },
  itemYear: {
    fontFamily: "Roboto_Regular",
    fontSize: scale(10),
    lineHeight: scale(16),
    fontWeight: "400",
    color: primaryColors.neutral_2,
    letterSpacing: scale(0.4),
  },
  itemAmount: {
    fontFamily: "Roboto_Medium",
    fontSize: scale(20),
    lineHeight: scale(24),
    fontWeight: "500",
    color: primaryColors.darkBlue,
    letterSpacing: scale(0.15),
  },
});

export default styles;
