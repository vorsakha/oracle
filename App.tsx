import React from 'react';
import Config from 'react-native-config';
import { CustomThemeProvider } from './src/context/theme';
import { Routes } from './src/routes';
import StorybookUIRoot from './storybook';

function App() {
  return (
    <CustomThemeProvider>
      <Routes />
    </CustomThemeProvider>
  );
}

export default Config.LOAD_STORYBOOK === 'true' ? StorybookUIRoot : App;
