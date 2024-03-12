import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import SettingUser from './setting_user';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MenuUtama from './menu_utama';

export default function MenuRoot() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="MenuUtama"
          component={MenuUtama}
          options={{headerShown: false}}
        />
        <Stack.Screen name="SettingUser" component={SettingUser} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
