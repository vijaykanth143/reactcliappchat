import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {View, Text} from 'react-native';
import AuthNavigator from './Authnavigator';
import DrawerNavigator from './Drawnavigator';
const AppNavContainer = () => {
  return (
    <NavigationContainer>
      {/* <AuthNavigator /> */}
      <DrawerNavigator />
    </NavigationContainer>
  );
};

export default AppNavContainer;
