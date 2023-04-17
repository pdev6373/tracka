import { StyleSheet } from "react-native";
import { secondaryColors } from "../Colors";

import { scale } from "react-native-size-matters";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const styles = StyleSheet.create({
  dropdown1BtnTxtStyle: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: scale(12),
    lineHeight: scale(16),
    letterSpacing: scale(0.4),
    textAlign: "left",
  },
  dropdown1RowTxtStyle: {
    color: secondaryColors.selectText,
    textAlign: "left",
  },
  dropdown3RowChildStyle: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 18,
  },
});

export default styles;
const selectStyle = {
  height: scale(40),
  width: scale(wp("40%")),
  backgroundColor: secondaryColors.distantHorizon,
  padding: 8,
  fontSize: 14,
  color: "neutral.500",
  borderRadius: 8,
  marginBottom: 6,
  mt: 1,
  borderColor: "primary.50",
  bg: "primary.50",
};
export const styleObject = {
  selectStyle: {
    ...selectStyle,
    paddingLeft: 20,
    marginRight: scale(5),
  },
  selectStyle2: {
    ...selectStyle,
    paddingRight: scale(20),
    marginLeft: scale(0),
  },
};
