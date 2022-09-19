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
  const [currentTheme, setCurrentTheme] = useState<Theme>(Theme.dark);

  const { getItem, setItem } = useAsyncStorage('@theme');

  const toggleTheme = async () => {
    const newTheme = currentTheme === Theme.light ? Theme.dark : Theme.light;

    await setItem(newTheme);

    setCurrentTheme(newTheme);
  };

  const handleCachedTheme = async () => {
    const cachedTheme = await getItem();

    if (cachedTheme !== 'null') setCurrentTheme(cachedTheme as Theme);
  };

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
