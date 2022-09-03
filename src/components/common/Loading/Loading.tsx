import React from 'react';
import { ActivityIndicator } from 'react-native';
import { useTheme } from 'styled-components';
import { LoadingWrapper } from './styles';

function Loading() {
  const theme = useTheme();

  return (
    <LoadingWrapper>
      <ActivityIndicator
        size="large"
        color={theme.colors.backgroundSecondary}
      />
    </LoadingWrapper>
  );
}

export default Loading;
