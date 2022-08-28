import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import React, { createContext, ReactNode, useEffect, useState } from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import { theme, Theme } from '../styles/theme';

interface CustomThemeContextProps {
  toggleTheme: () => void;
  currentTheme: Theme;
}

interface ThemeProviderTypes {
  children: ReactNode;
}

export const CustomThemeContext = createContext<CustomThemeContextProps>(
  {} as CustomThemeContextProps,
);

export function CustomThemeProvider({ children }: ThemeProviderTypes) {
  const [currentTheme, setCurrentTheme] = useState<Theme>(Theme.light);

  const { getItem, setItem } = useAsyncStorage('@theme');

  const toggleTheme = () => {
    setCurrentTheme(currentTheme === Theme.light ? Theme.dark : Theme.light);
  };

  const handleCachedTheme = async () => {
    const cachedTheme = await getItem();

    if (cachedTheme !== 'null') setCurrentTheme(cachedTheme as Theme);
  };

  useEffect(() => {
    setItem(currentTheme);
  }, [currentTheme]);

  useEffect(() => {
    handleCachedTheme();
  }, []);

  return (
    <ThemeProvider
      theme={
        {
          ...theme,
          colors: theme.colors[currentTheme],
        } as DefaultTheme
      }
    >
      <CustomThemeContext.Provider value={{ toggleTheme, currentTheme }}>
        {children}
      </CustomThemeContext.Provider>
    </ThemeProvider>
  );
}
