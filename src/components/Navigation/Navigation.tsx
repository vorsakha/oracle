import React, { useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NavigationWrapper } from './styles';
import Button from '../common/Button';
import {
  BitcoinIcon,
  MoonIcon,
  SearchIcon,
  SunIcon,
} from '../common/Button/styles';
import { CustomThemeContext } from '../../context/theme';
import { Theme } from '../../styles/theme';

export default function Navigation() {
  const { currentTheme, toggleTheme } = useContext(CustomThemeContext);

  const { navigate } = useNavigation();

  return (
    <NavigationWrapper>
      <Button onPress={() => navigate('Home')} icon={<BitcoinIcon />} />
      <Button icon={<SearchIcon />} />
      <Button
        onPress={toggleTheme}
        icon={currentTheme === Theme.light ? <MoonIcon /> : <SunIcon />}
      />
    </NavigationWrapper>
  );
}
