import React from 'react';
import { ScrollViewProps, ViewProps } from 'react-native';
import { ContainerScrollView, ContainerView } from './styles';

export type ContainerProps = {
  scroll?: boolean;
  position?: 'absolute' | 'relative';
  background?: string;
  flex?: number;
} & (ViewProps | ScrollViewProps);

function Container({
  children,
  scroll,
  position,
  background,
  flex,
  ...rest
}: ContainerProps) {
  return scroll ? (
    <ContainerScrollView
      flex={flex}
      position={position}
      background={background}
      {...rest}
    >
      {children}
    </ContainerScrollView>
  ) : (
    <ContainerView
      flex={flex}
      position={position}
      background={background}
      {...rest}
    >
      {children}
    </ContainerView>
  );
}

export default Container;
