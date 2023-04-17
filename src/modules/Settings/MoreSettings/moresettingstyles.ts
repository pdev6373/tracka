import {StyleSheet} from "react-native"
import { scale } from "react-native-size-matters"
import { primaryColors } from "../../../styles/Colors"

const Styles = StyleSheet.create({
    container: {
        // paddingHorizontal: scale(16),
        // paddingVertical: scale(16),
        backgroundColor: primaryColors.neutral_light,
        flex: 1,

    },
    text: {
        color: primaryColors.darkBlue900,
        paddingVertical: scale(20),
        paddingHorizontal: scale(16),

        
    },
})

export default Styles