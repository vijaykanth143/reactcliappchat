import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

const Contacts = () => {
  return (
    <View>
      <Text>Hii</Text>
    </View>
  );
};
const ContactDetail = () => {
  return (
    <View>
      <Text>Hii from ContactDetail</Text>
    </View>
  );
};
const CreateContact = () => {
  return (
    <View>
      <Text>Hii from CreateContact</Text>
    </View>
  );
};
const Settings = () => {
  return (
    <View>
      <Text>Hii from Settings</Text>
    </View>
  );
};
const HomeNavigator = () => {
  const HomeStack = createStackNavigator();
  return (
    <HomeStack.Navigator initialRouteName="Contact">
      <HomeStack.Screen name="Contact" component={Contacts}></HomeStack.Screen>
      <HomeStack.Screen
        name="Contact Detail"
        component={ContactDetail}></HomeStack.Screen>
      <HomeStack.Screen
        name="Create Contact"
        component={CreateContact}></HomeStack.Screen>
      <HomeStack.Screen name="Settings" component={Settings}></HomeStack.Screen>
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
