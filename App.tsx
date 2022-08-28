import React from 'react';
import Config from 'react-native-config';
import { PairsProvider } from './src/context/pairs';
import { CustomThemeProvider } from './src/context/theme';
import { Routes } from './src/routes';
import StorybookUIRoot from './storybook';

function App() {
  return (
    <CustomThemeProvider>
      <PairsProvider>
        <Routes />
      </PairsProvider>
    </CustomThemeProvider>
  );
}

export default Config.LOAD_STORYBOOK === 'true' ? StorybookUIRoot : App;
