import React from 'react';
import { View } from 'react-native';
import Navigation from './components/Navigation/Navigation';
import styles from './styles/global-styles'

export default function App() {
  return (
    <View style={styles.screen}>
      <Navigation />
    </View>
  );
}