import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Search from '../screens/Search';
import SignalScreen from '../screens/SignalScreen';
import { routes } from '.';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        animation: 'none',
      }}
      initialRouteName="Home"
    >
      <Screen name={routes.HOME} component={Home} />
      <Screen name={routes.SEARCH} component={Search} />
      <Screen name={routes.SIGNAL} component={SignalScreen} />
    </Navigator>
  );
}
