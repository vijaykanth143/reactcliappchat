import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeNavigator from './Homenavigator';

const DrawerNavigator = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeNavigator}></Drawer.Screen>
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
