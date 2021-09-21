import { StyleSheet } from "react-native";
import theme from "../theme/theme";

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.colors.cardBackground,
    borderRadius: 20,
    margin: 5,
    paddingVertical: 15,
    paddingHorizontal: 15,
    minHeight: '30%',
    borderColor: theme.colors.headerBackground,
    borderWidth: 1
  }
});

export default styles;