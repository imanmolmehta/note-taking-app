import { StyleSheet } from "react-native";
import theme from "../../theme/theme";

const styles = StyleSheet.create({

    item: {
        paddingHorizontal: 10,
        justifyContent: 'space-between'
    },

    itemHeader: {
        paddingBottom: 20,
    },

    titleText: {
        color: theme.colors.fontColor,
        fontSize: theme.fonts.medium
    },
    
    bodyText: {
        color: theme.colors.fontColor,
        fontSize: theme.fonts.small
    },

    itemBody: {}
});

export default styles;