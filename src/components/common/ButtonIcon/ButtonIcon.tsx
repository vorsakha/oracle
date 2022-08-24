import React, { ReactNode } from 'react';
import { TouchableOpacityProps } from 'react-native';

import { ButtonIconWrapper } from './styles';

interface ButtonIconProps extends TouchableOpacityProps {
  icon: ReactNode;
  color?: string;
}

function ButtonIcon({ icon, ...rest }: ButtonIconProps) {
  return <ButtonIconWrapper {...rest}>{icon}</ButtonIconWrapper>;
}

export default ButtonIcon;
