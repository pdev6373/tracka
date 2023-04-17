import { StyleSheet } from "react-native";
import { primaryColors, secondaryColors } from "../../../styles/Colors";

import { scale } from "react-native-size-matters";

const styles = StyleSheet.create({
  dropdown1BtnStyle: {
    width: '100%',
    backgroundColor: "#FFF",
    padding: 8,
    paddingLeft: 20,
    height: scale(54),
    borderRadius: scale(6),
    borderColor: primaryColors.neutral,
    borderWidth: 1,
    paddingRight: scale(16),
    flex: 1,
  },
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
    textAlign: "center",
    padding: 10,
  },
  dropdown3RowChildStyle: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 18,
  },
  label: {
    color: primaryColors.neutral,
    fontSize: scale(12),
    fontFamily: "Roboto",
    marginBottom: scale(10),
  },
  dropdownsRow: {flexDirection: 'column', width: '100%',},
});

export default styles;
