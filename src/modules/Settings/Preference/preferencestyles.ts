import { StyleSheet} from "react-native"
import { primaryColors } from "../../../styles/Colors"
import {scale} from "react-native-size-matters"

const Styles = StyleSheet.create({
    container: {
        backgroundColor: primaryColors.neutral_light,
        flex: 1,
        paddingHorizontal: scale(10),
        paddingVertical: scale(10),
        
    },
    input: {
        marginBottom: scale(16)
    },
    btnWrapper: {
        marginTop: scale(16),
        marginBottom: scale(32),
        height: scale(48),
      },
    text: {
        color: primaryColors.neutral_2,
        paddingVertical: scale(20),
        
    },
    form: {
        backgroundColor: primaryColors.white,
        paddingHorizontal: scale(5)
    },
    select: {
        paddingVertical: scale(10)
    },
    deleteAccountButtonHolder: {
        paddingVertical: scale(20),
        paddingHorizontal: scale(20)
    },
    deleteButton: {
        borderWidth: 1,
        borderColor: primaryColors.red_light,
        borderStyle: "solid",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        padding: scale(15),
        borderRadius: scale(5)


    },
    addmore: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        paddingVertical: scale(20),
    }
}) 

export default Styles