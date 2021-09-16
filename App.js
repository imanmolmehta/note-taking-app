import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header/Header';
import theme from './theme/theme';

export default function App() {
  return (
    <View style={styles.screen}>
      <Header />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
});
