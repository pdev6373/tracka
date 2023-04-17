import { StyleSheet } from "react-native";
import { primaryColors } from "../../styles/Colors";

const mainBottomNavigationStyle = StyleSheet.create({
  tabBarLabelStyle: {
    fontFamily: "Roboto_Regular",
    fontSize: 12,
  },
  tabBarStyle: {
    display: "flex",
    alignContent: "center",
    backgroundColor: primaryColors.white,
    height: 56,
    paddingBottom: 10,
    paddingTop: 10,
  },
});

export default mainBottomNavigationStyle;
