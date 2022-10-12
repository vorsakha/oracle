import React, { PropsWithChildren } from 'react';
import { useTheme } from 'styled-components';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon, Text } from '../common';

import BookmarksIcon from '../../assets/images/bookmarks-outline.svg';
import BitcoinIcon from '../../assets/images/logo-bitcoin.svg';
import SearchIcon from '../../assets/images/search-outline.svg';
import { routes } from '../../constants';

const Tab = createBottomTabNavigator();

function Navigation({ children }: PropsWithChildren) {
  const { colors, fonts } = useTheme();

  const tabBarIcon = (focused: boolean, route: { name: string }) => {
    if (route.name === routes.FAVORITES) {
      return <Icon as={BookmarksIcon} active={focused} />;
    }

    return route.name === routes.HOME ? (
      <Icon as={BitcoinIcon} active={focused} />
    ) : (
      <Icon as={SearchIcon} active={focused} />
    );
  };
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
      fontFamily: fonts.primaryBold,
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
    headerShown: false,
    tabBarTestID: `${route.name}-tab`,
  });

  return (
    <Tab.Navigator
      screenOptions={screenOptions}
      initialRouteName="Home"
      sceneContainerStyle={{ backgroundColor: colors.backgroundPrimary }}
    >
      {children}
    </Tab.Navigator>
  );
}

export default Navigation;
