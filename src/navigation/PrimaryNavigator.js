import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/Home';
import UserScreen from '../screens/User';
import {MODULES} from '../constants';

const Stack = createStackNavigator();

export default function PrimaryNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: true,
      }}>
      <Stack.Screen
        name={MODULES.home.name}
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={MODULES.user.name}
        component={UserScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
