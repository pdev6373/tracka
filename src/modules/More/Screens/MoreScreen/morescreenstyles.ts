import { StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";
import { primaryColors } from "../../../../styles/Colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: primaryColors.white,
  },
  profileWrapper: {
    paddingRight: scale(16),
    paddingLeft: scale(16),
    paddingBottom: scale(16),
  },
  profile: {
    backgroundColor: primaryColors.backgroundColor,
    borderRadius: scale(6),
    paddingVertical: scale(32),
    paddingHorizontal: scale(16),
    justifyContent: "space-between",
  },
  profileNameWrapper: {
    marginTop: scale(38),
  },
  profileName: {
    color: primaryColors.dark,
    fontSize: scale(20),
    fontFamily: "Roboto",
    lineHeight: scale(24),
    fontWeight: "500",
  },
  profileEmail: {
    color: primaryColors.dark,
    fontSize: scale(14),
    fontFamily: "Roboto",
    lineHeight: scale(20),
  },
  modalBtnHolder: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  deleteButton: {
      borderWidth: 1,
      borderColor: primaryColors.red_light,
      borderStyle: "solid",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      marginHorizontal: scale(10),
      padding: scale(15),
      borderRadius: scale(5)
  },
  modal: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 100,
    paddingHorizontal: 20
  },
  text: {
    color: '#000',
    marginTop: 10,
  },
  modalButton: {
    marginHorizontal: 10,
  },
  deleteBtnHolder: {
    height: scale(20),
    flex: 2,
    paddingVertical: scale(5),
    paddingHorizontal: scale(20)
  },
  yesButton: {
      borderWidth: 1,
      color: primaryColors.red_light,
      borderColor: primaryColors.red_light,
      borderStyle: "solid",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      marginHorizontal: 10,
      paddingVertical: scale(15),
      paddingHorizontal: scale(55),
      borderRadius: scale(5)
  },
  noButton: {
      borderWidth: 1,
      color: primaryColors.green,
      borderColor: primaryColors.green,
      borderStyle: "solid",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      marginHorizontal: 10,
      paddingVertical: scale(15),
      paddingHorizontal: scale(55),
      borderRadius: scale(5)
  },
});

export default styles;
