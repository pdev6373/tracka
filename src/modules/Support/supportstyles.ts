import { StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";
import { primaryColors } from "../../styles/Colors";

const Styles = StyleSheet.create({
    container: {
        flex: 1,
    backgroundColor: primaryColors.white,
    },
    text: {
        paddingHorizontal: scale(32),
        paddingVertical: scale(16)
    }

})

export default Styles