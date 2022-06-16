import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

const Login = () => {
  return (
    <View>
      <Text>Hii</Text>
    </View>
  );
};
const SignUp = () => {
  return (
    <View>
      <Text>Hii from SignUp</Text>
    </View>
  );
};

const AuthNavigator = () => {
  const AuthStack = createStackNavigator();
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="Login" component={Login}></AuthStack.Screen>
      <AuthStack.Screen
        name="Signup"
        component={SignUp}></AuthStack.Screen>
     
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
