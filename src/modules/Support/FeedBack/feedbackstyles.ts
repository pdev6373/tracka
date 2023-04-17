import {StyleSheet} from "react-native"
import { scale } from "react-native-size-matters"
import { primaryColors } from "../../../styles/Colors"

const Styles = StyleSheet.create({
    container: {
        paddingVertical: scale(5),
        backgroundColor: primaryColors.neutral_light,
        flex: 1,

    },
    text: {
        color: primaryColors.darkBlue900,
        paddingVertical: scale(20),
        paddingHorizontal: scale(16),
    },
    successView: { 
        flex: 1,
        paddingTop: scale(120)
    },
    iconView: { 
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: scale(10)
    },
    succesText: {
        textAlign: "center",
        fontSize: 20,
        fontWeight: "500",
        color: primaryColors.darkBlue,
        paddingVertical: scale(10)

    },
    succesText2: {
        paddingHorizontal: scale(10),
        textAlign: "center",
        color: primaryColors.darkBlue700
    }
})

export default Styles