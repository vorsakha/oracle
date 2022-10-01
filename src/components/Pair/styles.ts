import styled from 'styled-components/native';
import { NormalizedSignal } from '../../util';

export const PairName = styled.Text`
  font-size: ${({ theme }) => theme.sizes.xl};
  color: ${({ theme }) => theme.colors.textPrimary};
  font-family: ${({ theme }) => theme.fonts.primaryBlack};

  margin-bottom: ${({ theme }) => theme.sizes.sm};
`;

export const PairPrice = styled.Text`
  font-size: 40px;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-family: ${({ theme }) => theme.fonts.primary};
`;

export const PairSignal = styled.Text<{ isPositive: boolean }>`
  font-size: 40px;
  color: ${({ theme, signal }) => {
    if (signal === NormalizedSignal.NEUTRAL) return theme.colors.textPrimary;

    return theme.colors[
      signal === NormalizedSignal.BULLISH ? 'positive' : 'negative'
    ];
  }};
  font-family: ${({ theme }) => theme.fonts.primaryBlack};
  margin-bottom: ${({ theme }) => theme.sizes.lg};
`;

export const PairChangeWrapper = styled.View`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.textPrimary};
  flex-direction: row;
`;

export const PairText = styled.Text`
  font-size: 20px;
  margin: ${({ theme }) => theme.sizes.sm} 0;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-family: ${({ theme }) => theme.fonts.primary};
`;

export const PairChange = styled.Text<{ isPositive: boolean }>`
  font-size: 30px;
  color: ${({ theme, isPositive }) =>
    theme.colors[isPositive ? 'positive' : 'negative']};
  align-self: center;
  margin-left: ${({ theme }) => theme.sizes.sm};
  font-family: ${({ theme }) => theme.fonts.primaryBold};
`;

export const Separator = styled.View`
  margin: 0 12px;
`;

export const List = styled.FlatList`
  min-width: 300px;
  max-height: 220px;
`;
