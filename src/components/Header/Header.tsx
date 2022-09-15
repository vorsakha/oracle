import React, { useContext } from 'react';
import { HeaderContainer } from './styles';
import Button from '../common/Button';
import { CustomThemeContext } from '../../context/theme';
import { Theme } from '../../styles/theme';

import Sun from '../../assets/sun.svg';
import Moon from '../../assets/moon.svg';

export default function Navigation() {
  const { currentTheme, toggleTheme } = useContext(CustomThemeContext);

  return (
    <HeaderContainer>
      <Button
        onPress={toggleTheme}
        icon={currentTheme === Theme.light ? Moon : Sun}
        active
      />
    </HeaderContainer>
  );
}
