import { StyleSheet } from "react-native";

import { scale } from "react-native-size-matters";
import { primaryColors, secondaryColors } from "../../../../styles/Colors";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    backgroundColor: primaryColors.backgroundColor,
  },
  content: {
    paddingHorizontal: scale(16),
  },
  filter: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: primaryColors.white,
    padding: scale(16),
    height: scale(68),
    marginBottom: scale(16),
  },
  spacer: {
    height: scale(16),
    padding: scale(10),
  },
  bottomPanel: {
    backgroundColor: primaryColors.white,
    flex: 1,
    width: "100%",
    height: scale(200),
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  bottomPanelBar: {
    width: scale(36),
    height: scale(5),
    borderRadius: scale(2.5),
    backgroundColor: secondaryColors.neutralSecondary,
    margin: scale(10),
  },
  bottomPanelTitle: {
    fontFamily: "Roboto",
    fontSize: scale(16),
    fontWeight: "400",
    color: primaryColors.neutralTextColor,
    marginVertical: scale(15),
  },
  bottomPanelBorder: {
    borderBottomColor: secondaryColors.neutralBorder,
    borderBottomWidth: scale(1),
    width: wp('100%') - scale(32),
    marginHorizontal: scale(16),
  },
  whiteBox: {
    backgroundColor: primaryColors.white,
    borderRadius: scale(10),
    padding: scale(7),
    marginVertical: scale(16),
  },
  stateBox: {
    backgroundColor: primaryColors.white,
    borderRadius: scale(12),
    height: scale(50),
    marginVertical: scale(6),
    borderWidth: scale(0),
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: scale(10),
  },
  stateBoxText: {
    color: primaryColors.dark,
  },
  stateBoxActive: {
    backgroundColor: primaryColors.backgroundColor,
  },
});

export default styles;
