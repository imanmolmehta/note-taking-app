import React from 'react';
import { Text, View } from 'react-native';
import Header from './components/Header/Header';
import NotesList from './components/NotesList/NotesList';
import styles from './global-styles';

export default function App() {
  return (
    <View style={styles.screen}>
      <Header />
      <NotesList />
    </View>
  );
}