import { StyleSheet } from 'react-native';
import theme from '../theme/theme';

const styles = StyleSheet.create({
  imageBackground: {
    width: '100%',
    height: 300,
    flex: 1
  },

  profilePicture: {
    paddingVertical: 80,
    height: '80%',
    alignItems: 'center',
    flexDirection: 'column'
  },

  profileText: {
    paddingVertical: 20,
    color: theme.colors.font,
    fontSize: theme.fonts.medium,
    fontWeight: 'bold',
    fontFamily: 'Roboto'
  },
});

export default styles;