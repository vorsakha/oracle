import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Search from '../screens/Search';
import SignalScreen from '../screens/SignalScreen';
import { routes } from '.';

import Favorites from '../screens/Favorites';
import { Navigation } from '../components';

const Tab = createBottomTabNavigator();

export function AppRoutes() {
  return (
    <Navigation>
      <Tab.Screen name={routes.HOME} component={Home} />
      <Tab.Screen name={routes.SEARCH} component={Search} />
      <Tab.Screen name={routes.FAVORITES} component={Favorites} />
      <Tab.Screen
        name={routes.SIGNAL}
        component={SignalScreen}
        options={{
          tabBarButton: () => null,
        }}
      />
    </Navigation>
  );
}
