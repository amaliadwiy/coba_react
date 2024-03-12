/* eslint-disable react/no-unstable-nested-components */
// import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
// import {Dating} from '../../dating';
import {Live} from '../../live';
import {Chat} from '../../chat';
import {ProfileScreen} from '../../profile';
import DatingView from '../../dating/component/dating_view';
import {
  AtSignIcon,
  FavouriteIcon,
  Icon,
  MessageCircleIcon,
  PlayIcon,
} from '@gluestack-ui/themed';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import SettingUser from './setting_user';

export default function MenuUtama() {
  const Tab = createBottomTabNavigator();
  //   const Stack = createNativeStackNavigator();
  return (
    <>
      {/* <NavigationContainer> */}
      <Tab.Navigator id="RootNavigator">
        <Tab.Screen
          name="DatingView"
          component={DatingView}
          options={{
            tabBarIcon: ({color}) => <Icon as={FavouriteIcon} color={color} />,
          }}
        />
        <Tab.Screen
          name="Live"
          component={Live}
          options={{
            tabBarIcon: ({color}) => <Icon as={PlayIcon} color={color} />,
          }}
        />
        <Tab.Screen
          name="Chat"
          component={Chat}
          options={{
            tabBarIcon: ({color}) => (
              <Icon as={MessageCircleIcon} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({color}) => <Icon as={AtSignIcon} color={color} />,
          }}
        />
      </Tab.Navigator>
      {/* </NavigationContainer> */}
      {/* <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Dating" component={Dating} />
          <Stack.Screen name="Setting User" component={SettingUser} />
        </Stack.Navigator>
      </NavigationContainer> */}
    </>
  );
}
