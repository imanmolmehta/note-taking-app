import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './Header.styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
  }

  render() {
    return (
      <View style={styles.header}>
        <Text style={styles.headerText}>Home</Text>
        <FontAwesome name="search" size={20} style={styles.headerIcon} />
      </View>
    );
  }
}

export default Header;
