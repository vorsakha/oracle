import React, { useContext } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { NavigationWrapper } from './styles';
import Button from '../common/Button';
import { CustomThemeContext } from '../../context/theme';
import { Theme } from '../../styles/theme';
import { routes } from '../../routes';

import Bitcoin from '../../assets/bitcoin.svg';
import Search from '../../assets/search.svg';
import Sun from '../../assets/sun.svg';
import Moon from '../../assets/moon.svg';

export default function Navigation() {
  const { currentTheme, toggleTheme } = useContext(CustomThemeContext);

  const { navigate } = useNavigation();

  const { name } = useRoute();

  return (
    <NavigationWrapper>
      <Button
        onPress={() => navigate(routes.HOME)}
        icon={Bitcoin}
        text={routes.HOME}
        active={name === routes.HOME}
      />
      <Button
        onPress={() => navigate(routes.SEARCH)}
        icon={Search}
        text={routes.SEARCH}
        active={name === routes.SEARCH}
      />
      <Button
        onPress={toggleTheme}
        icon={currentTheme === Theme.light ? Moon : Sun}
        text="Theme"
      />
    </NavigationWrapper>
  );
}
