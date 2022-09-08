import React from 'react';
import Config from 'react-native-config';
import { MainSignalProvider } from './src/context/mainSignal';
import { PairsProvider } from './src/context/pairs';
import { SignalProvider } from './src/context/signal';
import { CustomThemeProvider } from './src/context/theme';
import { Routes } from './src/routes';
import StorybookUIRoot from './storybook';

function App() {
  return (
    <CustomThemeProvider>
      <PairsProvider>
        <MainSignalProvider>
          <SignalProvider>
            <Routes />
          </SignalProvider>
        </MainSignalProvider>
      </PairsProvider>
    </CustomThemeProvider>
  );
}

export default Config.LOAD_STORYBOOK === 'true' ? StorybookUIRoot : App;
