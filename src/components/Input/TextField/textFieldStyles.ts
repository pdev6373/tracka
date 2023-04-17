import { StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";
import colors, { primaryColors } from "../../../styles/Colors";
import { TextFieldVariant } from "./types";

type StyleProps = {
  variant: TextFieldVariant;
  isPrefix: boolean;
  isSuffix: boolean;
  disabled: boolean;
  isFocused: boolean;
};

const getBorderRadius = (variant: TextFieldVariant) => {
  switch (variant) {
    case TextFieldVariant.Primary:
      return 6;
    case TextFieldVariant.Secondary:
      return 16;
    default:
      0;
  }
};

const getInputHeight = (variant: TextFieldVariant) => {
  switch (variant) {
    case TextFieldVariant.Primary:
      return 54;
    case TextFieldVariant.Secondary:
      return 16;
    default:
      return 0;
  }
};

const styles = ({ variant, disabled, isFocused }: StyleProps) =>
  StyleSheet.create({
    label: {
      color:
        disabled || !isFocused
          ? primaryColors.neutral
          : primaryColors.lightBlue,
      fontSize: scale(12),
      fontFamily: "Roboto",
      marginBottom: scale(10),
    },

    container: {
      width: "100%",
      borderColor:
        disabled || !isFocused ? colors.neutral : colors.neutralTextColor,
      borderWidth: 1,
      borderRadius: getBorderRadius(variant),
      flexDirection: "row",
      alignItems: "center",
      height: scale(getInputHeight(variant)),
    },
    textField: {
      flexGrow: 1,
      fontFamily: "Roboto_Regular",
      color: disabled ? colors.neutral : colors.dark,
      overflow: "scroll",
      height: "100%",
      paddingHorizontal: scale(16),
    },
    prefix: {
      height: "100%",
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0,
      minWidth: 30,
    },
    suffix: {
      height: "100%",
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0,
      minWidth: 30,
      zIndex: 1000,
      paddingRight: scale(16),
      // position: "absolute",
      // right: 0
    },
    errorWrapper: {
      marginTop: scale(5),
    },
  });

export default styles;
