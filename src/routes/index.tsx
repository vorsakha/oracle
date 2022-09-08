import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppRoutes } from './app.routes';

export enum routes {
  HOME = 'Home',
  SEARCH = 'Search',
  SIGNAL = 'Signal',
}

declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Home: undefined;
      Search: undefined;
      Signal: {
        pair?: string;
      };
    }
  }
}

export type ParamList = {
  Signal: {
    pair: string;
  };
};

export function Routes() {
  return (
    <NavigationContainer>
      <AppRoutes />
    </NavigationContainer>
  );
}
