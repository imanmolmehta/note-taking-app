import { StyleSheet } from "react-native";
import theme from "../theme/theme";

const styles = StyleSheet.create({

    listContainer: {
        paddingVertical: 10,
        flex: 1
    },

    item: {
        paddingHorizontal: 10,
        justifyContent: 'space-between'
    },

    itemHeader: {
        marginBottom: 8,
    },

    headerText: {
        color: theme.colors.font,
        fontSize: theme.fonts.medium,
        fontWeight: '600'
    },
    
    bodyText: {
        color: theme.colors.font,
        fontSize: theme.fonts.small
    },

    itemBody: {
        padding: 0
    },

    itemTime: {
        paddingTop: 20,
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '100%'
    },

    timeText: {
        fontSize: theme.fonts.small,
        color: theme.colors.muted
    }
});

export default styles;