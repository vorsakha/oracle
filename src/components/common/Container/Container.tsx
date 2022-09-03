import React from 'react';
import { ScrollViewProps, ViewProps } from 'react-native';
import { ContainerScrollView, ContainerView } from './styles';

export type ContainerProps = {
  scroll?: boolean;
  position?: 'absolute' | 'relative';
  background?: string;
  flex?: number;
  center?: boolean;
} & (ViewProps | ScrollViewProps);

function Container({
  children,
  scroll,
  position = 'relative',
  background,
  center,
  flex,
  ...rest
}: ContainerProps) {
  return scroll ? (
    <ContainerScrollView
      flex={flex}
      position={position}
      background={background}
      center={center}
      {...rest}
    >
      {children}
    </ContainerScrollView>
  ) : (
    <ContainerView
      flex={flex}
      position={position}
      background={background}
      center={center}
      {...rest}
    >
      {children}
    </ContainerView>
  );
}

export default Container;
