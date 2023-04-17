import { StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";
import { primaryColors, secondaryColors } from "../../styles/Colors";

const styles = (pressIn: boolean, isActive?: boolean) =>
  StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      paddingVertical: scale(12),
      paddingLeft: scale(32),
      paddingRight: scale(16),
      backgroundColor:
        pressIn || isActive ? 'transparent' : "transparent",
    },
    linkTitle: {
      flex: 1,
      color:
        pressIn || isActive ? primaryColors.lightBlue : primaryColors.lightBlue,
      fontFamily: "Roboto",
      fontSize: scale(14),
      lineHeight: scale(24),
      marginLeft: scale(16),
    },
  });

export default styles;
