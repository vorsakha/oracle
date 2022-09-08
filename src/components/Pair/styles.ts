import styled from 'styled-components/native';
import { NormalizedSignal } from '../../util';

export const PairName = styled.Text`
  font-size: ${({ theme }) => theme.sizes.lg};
  color: ${({ theme }) => theme.colors.textPrimary};
  font-weight: bold;
`;

export const PairPrice = styled.Text`
  font-size: 40px;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const PairSignal = styled.Text<{ isPositive: boolean }>`
  font-size: 40px;
  color: ${({ theme, signal }) => {
    if (signal === NormalizedSignal.NEUTRAL) return theme.colors.textPrimary;

    return theme.colors[
      signal === NormalizedSignal.BULLISH ? 'positive' : 'negative'
    ];
  }};
  margin-bottom: ${({ theme }) => theme.sizes.lg};
`;

export const PairChangeWrapper = styled.View`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.textPrimary};
  flex-direction: row;
`;

export const PairText = styled.Text`
  font-size: 20px;
  margin: ${({ theme }) => theme.sizes.xs} 0;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const PairChange = styled.Text<{ isPositive: boolean }>`
  font-size: 30px;
  font-weight: bold;
  color: ${({ theme, isPositive }) =>
    theme.colors[isPositive ? 'positive' : 'negative']};
  align-self: center;
  margin-left: ${({ theme }) => theme.sizes.xs};
`;

export const Separator = styled.View`
  margin: 0 12px;
`;

export const List = styled.FlatList`
  margin: ${({ theme }) => theme.sizes.md} 0;

  min-width: 300px;
  max-height: 220px;
`;
