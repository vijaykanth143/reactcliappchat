import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {View, Text, TurboModuleRegistry} from 'react-native';
import AuthNavigator from './Authnavigator';
import DrawerNavigator from './Drawnavigator';
const AppNavContainer = () => {
  const isLoggedIn = true;
  return (
    <NavigationContainer>
      {isLoggedIn ? <DrawerNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default AppNavContainer;
