import React, { Component } from 'react';
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import { Avatar } from 'react-native-elements';
import styles from '../../styles/Header.styles';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
  }

  render() {
    return (
      <DrawerContentScrollView {...this.props}>
        <View style={{flex: 1}}>
          <ImageBackground
            source={require('../../assets/images/notes_header_bg.jpeg')}
            resizeMode='cover'
            blurRadius={10}
            style={styles.imageBackground}
          >
            <View style={styles.profilePicture}>
              <Avatar
                source={{
                  uri: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
                  height: 100,
                  width: 100
                }}
                size={100}
                rounded
              />
              <Text style={styles.profileText}>Anmol Mehta</Text>
            </View>
          </ImageBackground>
        </View>
        <View style={{
          paddingVertical: 10
        }}>
          <DrawerItemList
            {...this.props}
          />
        </View>
      </DrawerContentScrollView>
    );
  }
}

export default Header;
