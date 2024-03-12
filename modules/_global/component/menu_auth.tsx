import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {
  LoginFoto,
  LoginNope,
  LoginPass,
  LoginPertama,
  LoginProfile,
  LoginVerif,
} from '../../auth';
import MenuUtama from './menu_utama';
import SettingUser from './setting_user';

export default function MenuAuth() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginPertama}
          options={{headerShown: false}}
        />
        <Stack.Screen name="LoginNope" component={LoginNope} />
        <Stack.Screen name="LoginKode" component={LoginVerif} />
        <Stack.Screen name="LoginPass" component={LoginPass} />
        <Stack.Screen name="LoginProfile" component={LoginProfile} />
        <Stack.Screen name="LoginFoto" component={LoginFoto} />
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
