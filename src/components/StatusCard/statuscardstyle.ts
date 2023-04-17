import { StyleSheet } from "react-native";
import { StatusTypeEnum } from "./StatusCard";
import { primaryColors } from "../../styles/Colors";
import { scale } from "react-native-size-matters";

const computeStyleBackground = (type: StatusTypeEnum | string) => {
  switch (type) {
    case StatusTypeEnum.Red:
      return {
        backgroundColor: primaryColors.lightRed,
      };
    default:
      return {
        backgroundColor: primaryColors.white,
      };
  }
};

const computeTextColor = (type: StatusTypeEnum | string) => {
  switch (type) {
    case StatusTypeEnum.Red:
      return {
        color: primaryColors.red,
      };
    default:
      return {
        color: primaryColors.neutral,
      };
  }
};

const styles = (type: StatusTypeEnum | string) =>
  StyleSheet.create({
    container: {
      width: "100%",
      paddingVertical: scale(4),
      paddingHorizontal: scale(10),
      alignItems: "center",
      borderRadius: scale(16),
      overflow: "hidden",
      ...computeStyleBackground(type),
    },
    text: {
      fontFamily: "Roboto",
      fontSize: scale(12),
      lineHeight: scale(16),
      ...computeTextColor(type),
    },
  });

export default styles;
