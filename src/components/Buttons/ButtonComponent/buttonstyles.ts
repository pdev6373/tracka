import { StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";
import { primaryColors } from "../../../styles/Colors";

const renderVariantStyle = (variant: string, disabled: boolean) => {
  switch (variant) {
    case "secondary":
      return {
        backgroundColor: "transparent",
        borderColor: primaryColors.neutral_2,
      };
    case "success":
      return {
        backgroundColor: "transparent",
        borderColor: primaryColors.green,
      };
    case "error":
      return {
        backgroundColor: "transparent",
        borderColor: primaryColors.red,
      };
    case "tertiary":
      return {
        borderColor: "transparent",
        paddingRight: 0,
        paddingLeft: 0,
      };
    case "primary":
      return {
        backgroundColor: !disabled
          ? primaryColors.blue
          : primaryColors.neutral_3,
        color: primaryColors.white,

        borderRadius: scale(4),
        borderColor: "transparent",
      };
    default:
      return {};
  }
};

const renderVariantLabelStyle = (variant: string) => {
  switch (variant) {
    case "secondary":
      return {};
    case "tertiary":
      return {
        fontSize: scale(14),
        color: primaryColors.blue,
      };
    case "primary":
      return {
        color: primaryColors.white,
        fontSize: scale(14),
        fontFamily: "Roboto",
      };
    default:
      return {};
  }
};


const styleFunc = (variant: string, disabled: boolean) =>
  StyleSheet.create({
    container: {
      borderRadius: 100,
      paddingVertical: 8,
      paddingRight: 18,
      paddingLeft: 18,
      borderWidth: 1,
      borderStyle: "solid",
      height: "100%",
      alignItems: "center",
      justifyContent: "center",
      ...renderVariantStyle(variant, disabled),
    },
    label: {
      color: primaryColors.blue,
      fontFamily: "Roboto",
      ...renderVariantLabelStyle(variant),
    },
  });

export default styleFunc;
