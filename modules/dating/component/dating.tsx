import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {SettingUser} from '../../_global';
// import {NavigationContainer} from '@react-navigation/native';
import DatingView from './dating_view';

export default function Dating() {
  const Stack = createNativeStackNavigator();
  return (
    <>
      {/* <NavigationContainer> */}
      <Stack.Navigator>
        <Stack.Screen name="DatingView" component={DatingView} />
        <Stack.Screen name="SettingUser" component={SettingUser} />
      </Stack.Navigator>
      {/* </NavigationContainer> */}
    </>
  );
}
