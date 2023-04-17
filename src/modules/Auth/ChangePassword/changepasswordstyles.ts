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
  detailSection: {
    flex: 1,
    flexShrink: 0,
    alignItems: "center",
  },
  detailSectionHeading: {
    fontSize: scale(20),
    fontWeight: "500",
    color: primaryColors.dark,
    marginBottom: scale(8),
  },
  detailSectionLead: {
    textAlign: "center",
    fontSize: scale(12),
    color: primaryColors.neutralTextColor,
    marginBottom: scale(10),
  },
  subLead: {
    textAlign: "center",
    fontSize: scale(12),
    color: primaryColors.red,
    marginBottom: scale(16),
  },
  inputWrapper: {
    marginBottom: scale(16),
  },
  btnWrapper: {
    width: "100%",
    height: scale(48),
    marginVertical: scale(26),
  },
});

export default styles;
