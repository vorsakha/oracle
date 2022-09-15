import React, { PropsWithChildren, useContext } from 'react';
import { StatusBar } from 'react-native';
import { MainSignalContext } from '../../context/mainSignal';
import { PairsContext } from '../../context/pairs';
import { SignalContext } from '../../context/signal';
import { Container, Loading } from '../common';
import { ContainerWrapper, LayoutContainer } from './styles';

function Layout({ children }: PropsWithChildren) {
  const { mainSignalLoading } = useContext(MainSignalContext);
  const { pairsLoading } = useContext(PairsContext);
  const { signalLoading } = useContext(SignalContext);

  const loading = mainSignalLoading || pairsLoading || signalLoading;

  return (
    <LayoutContainer>
      <StatusBar />

      <Container flex={8}>
        <ContainerWrapper flex={6}>
          {loading ? <Loading /> : children}
        </ContainerWrapper>
      </Container>
    </LayoutContainer>
  );
}

export default Layout;
