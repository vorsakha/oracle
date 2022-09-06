import styled from 'styled-components/native';

export const PairWrapper = styled.View`
  margin-top: ${({ theme }) => theme.sizes.md};
`;

export const PairName = styled.Text`
  font-size: 38px;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const PairSignal = styled.Text`
  font-size: 30px;
  color: ${({ theme }) => theme.colors.textTertiary};
  margin-bottom: ${({ theme }) => theme.sizes.lg};
`;

export const PairPrice = styled.Text`
  font-size: 35px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.textSecondary};
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
  margin-top: ${({ theme }) => theme.sizes.md};

  min-width: 300px;
  max-height: 220px;
`;
