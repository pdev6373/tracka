import { StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";
import { primaryColors } from "../../styles/Colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: primaryColors.white,
  },
  image: {
    height: scale(456),
  },
  content: {
      alignItems: 'center',
      justifyContent: 'center',
      flexGrow: 1,
  },
  heading: {
      fontWeight: '500',
      fontFamily: 'Roboto',
      fontSize: scale(20),
      color: primaryColors.dark,
      marginBottom: scale(8),
  },
  desc: {
    fontFamily: 'Roboto',
    fontSize: scale(12),
    color: primaryColors.neutralTextColor,
    textAlign: 'center'
  }
});

export default styles;
