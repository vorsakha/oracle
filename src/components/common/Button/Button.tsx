import React, { ReactNode } from 'react';
import { TouchableOpacityProps } from 'react-native';
import Icon from '../Icon';

import { ButtonIconContainer, ButtonText } from './styles';

interface ButtonIconProps extends TouchableOpacityProps {
  icon: ReactNode;
  text?: string;
  color?: string;
  active?: boolean;
  size?: 'small' | 'regular';
}

function ButtonIcon({
  icon,
  text,
  active = false,
  size = 'regular',
  ...rest
}: ButtonIconProps) {
  return (
    <ButtonIconContainer {...rest}>
      <Icon as={icon} active={active} size={size} />
      {text && <ButtonText active={active}>{text}</ButtonText>}
    </ButtonIconContainer>
  );
}

export default ButtonIcon;
