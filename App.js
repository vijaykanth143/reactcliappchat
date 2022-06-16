import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import AppNavContainer from './src/navigation';
const App = () => {
  const presshandler = () => {
    alert('u tapped the buitton');
  };
  return <AppNavContainer></AppNavContainer>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});
export default App;
