import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from 'styled-components';
import Home from '../screens/Home';
import Search from '../screens/Search';
import SignalScreen from '../screens/SignalScreen';
import { routes } from '.';

import BitcoinIcon from '../assets/bitcoin.svg';
import SearchIcon from '../assets/search.svg';
import { Icon, Text } from '../components/common';

const Tab = createBottomTabNavigator();

export function AppRoutes() {
  const { colors } = useTheme();

  const tabBarIcon = (focused: boolean, route: { name: string }) =>
    route.name === routes.HOME ? (
      <Icon as={BitcoinIcon} active={focused} />
    ) : (
      <Icon as={SearchIcon} active={focused} />
    );

  const tabBarLabel = (focused, route: { name: string }) => (
    <Text active={focused}>{route.name}</Text>
  );

  const screenOptions = ({ route }) => ({
    tabBarStyle: {
      backgroundColor: colors.backgroundSecondary,
      height: 100,
      margin: 24,
      padding: 0,
      borderRadius: 24,
    },
    tabBarItemStyle: {},
    tabBarLabel: ({ focused }) => tabBarLabel(focused, route),
    tabBarLabelStyle: {
      color: colors.textPrimary,
      fontSize: 14,
      margin: 0,
      padding: 0,
    },
    tabBarIcon: ({ focused }) => tabBarIcon(focused, route),
    tabBarActiveTintColor: 'tomato',
    tabBarInactiveTintColor: 'gray',
    headerShown: false,
  });

  return (
    <Tab.Navigator
      screenOptions={screenOptions}
      initialRouteName="Home"
      sceneContainerStyle={{ backgroundColor: colors.backgroundPrimary }}
    >
      <Tab.Screen name={routes.HOME} component={Home} />
      <Tab.Screen name={routes.SEARCH} component={Search} />
      <Tab.Screen
        name={routes.SIGNAL}
        component={SignalScreen}
        options={{
          tabBarButton: () => null,
        }}
      />
    </Tab.Navigator>
  );
}
