import React from 'react';
import {View, Text} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import GroupChat from '../Screens/GroupChat';
import PersonalChat from '../Screens/PersonalChat';
import CustomDrawer from './CustomDrawer';
import {GiftedChat} from 'react-native-gifted-chat';
const DrawerNavigator = () => {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        drawerActiveBackgroundColor: '#aa18ea',
        drawerActiveTintColor: 'white',
        drawerInactiveTintColor: '#333',
      }}>
      <Drawer.Screen
        name="groupchat"
        component={GroupChat}
        options={{
          title: 'Group Chat',
          headerTitleAlign: 'center',
        }}></Drawer.Screen>
      <Drawer.Screen
        name="personalchat"
        component={PersonalChat}
        options={{
          title: 'Personal Chat',
          headerTitleAlign: 'center',
        }}></Drawer.Screen>
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
