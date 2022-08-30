import React, { useContext } from 'react';
import { ActivityIndicator } from 'react-native';
import { useTheme } from 'styled-components';
import { MainSignalContext } from '../../../context/mainSignal';
import { PairsContext } from '../../../context/pairs';
import { LoadingWrapper } from './styles';

function Loading() {
  const { mainSignalLoading } = useContext(MainSignalContext);
  const { pairsLoading } = useContext(PairsContext);
  const theme = useTheme();

  return (
    <LoadingWrapper>
      {(mainSignalLoading || pairsLoading) && (
        <ActivityIndicator
          size="large"
          color={theme.colors.backgroundSecondary}
        />
      )}
    </LoadingWrapper>
  );
}

export default Loading;
