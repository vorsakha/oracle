import React, { PropsWithChildren } from 'react';
import { StatusBar } from 'react-native';
import { Container, Loading } from '../common';
import Navigation from '../Navigation';
import { ContainerWrapper, LayoutContainer } from './styles';

function Layout({ children }: PropsWithChildren) {
  return (
    <LayoutContainer>
      <StatusBar />

      <Container flex={8}>
        <ContainerWrapper flex={6}>
          <Loading />
          {children}
        </ContainerWrapper>
        <Navigation />
      </Container>
    </LayoutContainer>
  );
}

export default Layout;
