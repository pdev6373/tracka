import { StyleSheet } from "react-native";
import { primaryColors } from "../../../../styles/Colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: primaryColors.white,
  },
  wrapper: {
    height: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default styles;
