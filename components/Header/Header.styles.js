import { StyleSheet } from 'react-native';
import theme from '../../theme/theme';

const styles = StyleSheet.create({
  header: {
    backgroundColor: theme.colors.headerBackground,
    width: '100%',
    height: '12%',
    flexDirection: 'row',
    paddingTop: 25,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  headerText: {
    color: '#fff',
    fontSize: 22,
    fontFamily: theme.fonts.fontFamily,
    color: theme.colors.fontColor
  },

  headerIcon: {
    color: theme.colors.fontColor
  }
});

export default styles;