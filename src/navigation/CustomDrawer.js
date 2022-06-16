import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const CustomDrawer = (props, {navigation}) => {
  const [showScreen, setScreenShow] = useState(false);

  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <TouchableOpacity>
          <Text
            style={{fontSize: 30, margin: 10, color: '#333'}}
            onPress={() => setScreenShow(!showScreen)}>
            Chat Screens
          </Text>
        </TouchableOpacity>

        {showScreen ? <DrawerItemList {...props} /> : null}
      </DrawerContentScrollView>
    </View>
  );
};

export default CustomDrawer;
