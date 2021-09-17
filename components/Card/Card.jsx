import React, { Component } from 'react';
import { View } from 'react-native';
import styles from './Card.styles';

class Card extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {

  }

  render() {
    return (
      <View {...this.props} style={{ ...styles.card, ...this.props.style}}>
        {this.props.children}
      </View>
    );
  }
}

export default Card;
