import { StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";
import { primaryColors } from "../../../styles/Colors";

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
    flexShrink: 0,
    alignItems: "center",
  },
  codeSectionHeading: {
    fontSize: scale(20),
    fontWeight: "500",
    color: primaryColors.dark,
    marginBottom: scale(8),
    marginTop: scale(24),
  },
  codeSectionLead: {
    textAlign: "center",
    fontSize: scale(12),
    color: primaryColors.neutralTextColor,
    marginBottom: scale(24),
  },
  btnWrapper: {
    width: "100%",
    height: scale(48),
    marginBottom: scale(32),
    marginTop: scale(20),
  },
});

export default styles;
