import 'react-native-gesture-handler';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import theme from '../../theme/theme'
import Header from '../Header';
import { Icon } from 'react-native-elements';
import NotesStack from '../../Stacks/NotesStack';

const Drawer = createDrawerNavigator();

const Theme = {
  ...DarkTheme,
  ...theme
}

const Navigation = (props) => {
  return (
    <NavigationContainer theme={Theme}>
      <Drawer.Navigator
        initialRouteName="Notes"
        screenOptions={{
          headerStyle: {
            backgroundColor: theme.colors.headerBackground,
          },
          headerTintColor: theme.colors.font,
          drawerType: 'front',
          drawerItemStyle: {
            marginHorizontal: 0,
            borderRadius: 0
          },
          drawerActiveTintColor: theme.colors.muted,
          drawerStyle: {
            backgroundColor: theme.colors.cardBackground
          }
        }}
        drawerContent={props => <Header {...props} />}
      >
        <Drawer.Screen
          name="Notes"
          component={NotesStack}
          options={{
            drawerIcon: ({focused, color, size}) => (
              <Icon name="book" type="feather" color={color} size={size} />
            ),  
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
