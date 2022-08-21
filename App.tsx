import React from 'react';
import { CustomThemeProvider } from './src/context/theme';
import { Routes } from './src/routes';

function App() {
  return (
    <CustomThemeProvider>
      <Routes />
    </CustomThemeProvider>
  );
}

export default App;
