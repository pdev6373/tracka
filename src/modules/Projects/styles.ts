import { StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";

const styles = StyleSheet.create({
  spacer: {
    // height: scale(180),
    padding: scale(10),
    marginTop: scale(20)
  },
  flatList: {
    paddingBottom: scale(32),
    paddingHorizontal: scale(16),
    paddingTop: scale(24),
  },
});

export default styles;
