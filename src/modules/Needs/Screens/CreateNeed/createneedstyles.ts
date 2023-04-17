import { StyleSheet } from 'react-native';
import { primaryColors } from '../../../../styles/Colors';
import { scale } from "react-native-size-matters";

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: primaryColors.white,
      },
      scrollView: {
        flex: 1,
      },
      wrapper: {
        backgroundColor: primaryColors.white,
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "flex-start",
        padding: scale(16),
        height: scale(68),
      },
      heading: {
        fontSize: scale(16),
        color: primaryColors.dark,
        marginRight: "auto",
        marginLeft: "auto",
        fontFamily: 'Roboto',
      },
      form: {
          paddingHorizontal: scale(16),
          flex: 1,
          marginTop: scale(0.8),
          paddingBottom: scale(48),
      },
      lead: {
          fontSize: scale(12),
          fontFamily: 'Roboto',
          marginBottom: scale(16),
          color: primaryColors.dark
      },
      input: {
          marginBottom: scale(16)
      },
      info: {
          fontFamily: 'Roboto',
          fontSize: scale(12),
          marginBottom: scale(16)
      },
      btnWrapper: {
          height: scale(40)
      }
})

export default styles;

