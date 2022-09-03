import React, { PropsWithChildren, useContext } from 'react';
import { StatusBar } from 'react-native';
import { MainSignalContext } from '../../context/mainSignal';
import { PairsContext } from '../../context/pairs';
import { Container, Loading } from '../common';
import Navigation from '../Navigation';
import { ContainerWrapper, LayoutContainer } from './styles';

function Layout({ children }: PropsWithChildren) {
  const { mainSignalLoading } = useContext(MainSignalContext);
  const { pairsLoading } = useContext(PairsContext);

  const loading = mainSignalLoading || pairsLoading;

  return (
    <LayoutContainer>
      <StatusBar />

      <Container flex={8}>
        <ContainerWrapper flex={6}>
          {loading ? <Loading /> : children}
        </ContainerWrapper>
        <Navigation />
      </Container>
    </LayoutContainer>
  );
}

export default Layout;
