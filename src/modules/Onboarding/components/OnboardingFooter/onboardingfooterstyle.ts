import { StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";
import { borderRadius } from "../../../../styles/Borders";
import { primaryColors } from "../../../../styles/Colors";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: scale(16),
    opacity: 0.9,
    backgroundColor:  primaryColors.white,
  },
  dotsWrapper: {
flexDirection: 'row',
  },
  dots: {
      width: scale(8),
      height: scale(8),
      borderRadius: scale(50),
      marginRight: scale(4),
      marginLeft: scale(4),
  }
});
export default styles;
