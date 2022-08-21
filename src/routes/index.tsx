import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppRoutes } from './app.routes';

declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Home: undefined;
    }
  }
}

export function Routes() {
  return (
    <NavigationContainer>
      <AppRoutes />
    </NavigationContainer>
  );
}
