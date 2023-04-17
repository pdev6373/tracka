import { StyleSheet} from "react-native"
import { scale } from "react-native-size-matters"
import { primaryColors } from "../../../../styles/Colors"

const Styles = StyleSheet.create({
    text: {
        color: primaryColors.neutral_2,
        paddingVertical: scale(20),
        
    },
    text2: {
        paddingVertical: scale(20),
        paddingHorizontal: scale(10),
        color: primaryColors.neutral,

    },
    form: {
        backgroundColor: primaryColors.white,
        paddingHorizontal: scale(5)
    },
    select: {
        paddingVertical: scale(10)
    },
    BtnWrapper: {
        height: scale(48),
        marginTop: scale(10)
      },
      BtnLabel: {
        color: primaryColors.white
      },
    
})

export default Styles