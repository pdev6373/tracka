import { StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";
import { primaryColors } from "../../../styles/Colors";

const styles = StyleSheet.create({
 component: {
 width:"100%",
//  paddingHorizontal: scale(20),
 paddingVertical: scale(5),
 paddingBottom: scale(15),
 backgroundColor: primaryColors.white,
 borderBottomWidth: scale(1),
 borderBottomColor: primaryColors.neutral_3,
 borderStyle: "solid",
 flexDirection: "row",
//  alignItems: "center",
 },
 content: {
fontFamily: "Roboto",
fontWeight: "700",
fontSize: 16,
lineHeight: 24,


 },
 indicator: 
    {
        width: scale(10),
        height: scale(10), 
        backgroundColor: primaryColors.red_light,
        borderRadius: scale(5),
        marginRight: scale(10),
        marginTop: scale(6)
        },
 

 buttons: {
  display: "flex",
  flexDirection: "row",
  paddingVertical: scale(10),
  zIndex: 10,
  elevation: 10
 },
 
 interest: {
     backgroundColor: primaryColors.white,
     color: primaryColors.neutral,
     padding: 10,
     marginRight: scale(10),
     zIndex: 10,
  elevation: 10

 },
 report: {
     padding: 10,
     zIndex: 10,
  elevation: 10

 },
 time: {
color:primaryColors.neutral_2,
paddingTop: scale(5)

 },

 headerWrapper: {paddingHorizontal: 10, 
    paddingVertical: 30, backgroundColor: "#fff", display: "flex", alignItems: "center", justifyContent: "center",
    },
    notificationText: {color: "#0D0F11", fontSize: 16}
  
});

export default styles;
