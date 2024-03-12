import {GluestackUIProvider} from '@gluestack-ui/themed';
import {config} from '@gluestack-ui/config'; // Optional if you want to use default theme
import React, {useState} from 'react';
// import {MenuUtama} from './modules/_global';
// import {HomeScreen} from './modules/home';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {HomeScreen} from './modules/home';
// import {ProfileScreen} from './modules/profile';
import {MenuAuth, MenuRoot} from './modules/_global';

function App() {
  // const Stack = createNativeStackNavigator();
  // const Tab = createBottomTabNavigator();
  const [isLogin, setLogin] = useState(false);

  return (
    <GluestackUIProvider config={config}>
      {/* <MenuUtama /> */}
      {!isLogin && <MenuAuth />}
      {isLogin && <MenuRoot />}

      {/* <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name="Profile" component={ProfileScreen} />
        </Stack.Navigator>
      </NavigationContainer> */}
      {/* <NavigationContainer>
        <Tab.Navigator id="RootNavigator">
          <Tab.Screen name="Dating" component={Dating} />
          <Tab.Screen name="Live" component={Live} />
          <Tab.Screen name="Chat" component={Chat} />
          <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
      </NavigationContainer> */}
    </GluestackUIProvider>
  );
}

export default App;
