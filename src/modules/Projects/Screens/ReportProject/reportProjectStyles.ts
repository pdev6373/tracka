import { StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";
import { primaryColors } from "../../../../styles/Colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: primaryColors.white,
  },
  scroll: {
    flex: 1,
    backgroundColor: primaryColors.backgroundColor,
  },
  contentWrapper: {
    paddingHorizontal: scale(16),
    paddingVertical: scale(28),
  },
  addImageBtnWrapper: {
    height: scale(48),
  },
  addImageBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  addImageText: {
    color: primaryColors.white,
    marginLeft: scale(4),
  },
  lead: {
    fontSize: scale(12),
    lineHeight: scale(16),
    color: primaryColors.neutral_2,
    marginTop: scale(8),
  },
  submitBtnWrapper: {
    height: scale(88),
    paddingVertical: scale(20),
    paddingHorizontal: scale(16),
  },
  textAreaWrapper: {
    marginTop: scale(32),
  },
  thumbnailWrapper: {
    height: scale(80),
    width: scale(80),
    backgroundColor: primaryColors.neutral,
    borderRadius: scale(4),
    marginRight: scale(8),
  },
  thumbnail: {
    height: "100%",
    width: "100%",
  },
  imageSection: {
    flexDirection: "row",
    marginTop: scale(8),
    flexWrap: "wrap",
  },
});

export default styles;
