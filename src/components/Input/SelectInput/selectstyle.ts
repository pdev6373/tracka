import { StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";
import { primaryColors, secondaryColors } from "../../../styles/Colors";

const renderVariantStyle = (variant: string, isSelected: boolean) => {
  switch (variant) {
    case "secondary":
      return {
        height: scale(54),
        borderRadius: scale(6),
        borderColor: isSelected
          ? primaryColors.lightBlue
          : primaryColors.neutral,
        borderWidth: 1,
        paddingRight: scale(16),
      };
    case "search":
      return {
        backgroundColor: secondaryColors.distantHorizon,
        borderRadius: scale(6),
        color: isSelected ? primaryColors.lightBlue : primaryColors.neutral,
      };
    default:
      return {};
  }
};

const renderSizeStyle = (size: string) => {
  switch (size) {
    case "small":
      return {
        height: scale(34),
      };
    default:
      return {};
  }
};

const styles = (variant: string, isSelected: boolean, size: string) =>
  StyleSheet.create({
    label: {
      color: isSelected ? primaryColors.lightBlue : primaryColors.neutral,
      fontSize: scale(12),
      fontFamily: "Roboto",
      marginBottom: scale(10),
    },
    select: {
      ...renderVariantStyle(variant, isSelected),
      ...renderSizeStyle(size),
    },
    dropdownIcon: {
      position: "absolute",
      right: scale(16),
    },
    errorWrapper: {
      marginTop: scale(5),
    },
  });

export default styles;
