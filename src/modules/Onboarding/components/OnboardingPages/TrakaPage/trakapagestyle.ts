import { StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";
import { primaryColors } from "../../../../../styles/Colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: primaryColors.white,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: scale(24),
  },
  image: {
    height: scale(70),
    width: scale(230),
    resizeMode: "contain",
  },
  smallImages: {
    height: scale(40),
    width: scale(80),
    resizeMode: "contain",
  },
  animationWrapper: {
    position: "relative",
    width: "100%",
  },
  icons: {
      display: 'flex', 
      flexDirection: "row", 
      alignItems: "center", 
      justifyContent: "space-around", 
      width: "100%"
    },
  animation: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    marginTop: scale(42),
  },
  lead: {
    textAlign: "center",
    fontSize: scale(12),
    fontFamily: "Roboto",
    color: primaryColors.neutralTextColor,
    lineHeight: scale(16),
    marginBottom: scale(16),
  },
});

export default styles;
