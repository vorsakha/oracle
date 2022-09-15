import React, { ReactNode } from 'react';
import { TouchableOpacityProps } from 'react-native';

import { ButtonIconContainer, ButtonText, Icon } from './styles';

interface ButtonIconProps extends TouchableOpacityProps {
  icon: ReactNode;
  text?: string;
  color?: string;
  active?: boolean;
}

function ButtonIcon({ icon, text, active = false, ...rest }: ButtonIconProps) {
  return (
    <ButtonIconContainer {...rest}>
      <Icon as={icon} active={active} />
      {text && <ButtonText active={active}>{text}</ButtonText>}
    </ButtonIconContainer>
  );
}

export default ButtonIcon;
