import { StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";
import { primaryColors } from "../../../styles/Colors";

export const CELL_SIZE = 70;
export const CELL_BORDER_RADIUS = 8;
export const DEFAULT_CELL_BG_COLOR = "#fff";
export const NOT_EMPTY_CELL_BG_COLOR = "#3557b7";
export const ACTIVE_CELL_BG_COLOR = "#f7fafe";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: primaryColors.backgroundColor,
    paddingHorizontal: scale(16),
  },
  header: {
    height: scale(56),
  },
  backBtn: {
    width: scale(30),
  },
  codeSection: {
    flex: 1,
    alignItems: "center",
  },
  codeSectionHeading: {
    fontSize: scale(20),
    fontWeight: "500",
    color: primaryColors.dark,
  },
  codeSectionLead: {},
  codeFieldRoot: {
    height: CELL_SIZE,
    marginTop: 30,
    paddingHorizontal: 20,
    justifyContent: "center",
  },
  cell: {
    marginHorizontal: 8,
    height: CELL_SIZE,
    width: CELL_SIZE,
    lineHeight: CELL_SIZE - 5,
    ...Platform.select({ web: { lineHeight: 65 } }),
    fontSize: 30,
    textAlign: "center",
    borderRadius: CELL_BORDER_RADIUS,
    color: primaryColors.blue,
    backgroundColor: primaryColors.white,
  },
  countDown: {
    flexDirection: "row",
    alignItems: "center",
    height: scale(30),
    justifyContent: 'center',
    marginBottom: scale(16),
  },
  countDownText: {
    fontSize: scale(12),
    fontFamily: "Roboto",
    color: primaryColors.neutral_2,
  },
  digit: {
    backgroundColor: "transparent",
    width: scale(20),
    height: scale(20),
    color: primaryColors.neutral_2,
  },
  btnWrapper: {
    height: scale(48),
    marginBottom: scale(32),
  },
});

export default styles;
