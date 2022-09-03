import styled from 'styled-components/native';

export const PairWrapper = styled.View`
  margin-top: ${({ theme }) => theme.sizes.md};
`;

export const PairName = styled.Text`
  font-size: 38px;
  margin-bottom: 24px;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const PairSignal = styled.Text`
  font-size: 30px;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const PairPrice = styled.Text`
  font-size: 35px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const PairChangeWrapper = styled.Text`
  font-size: 25px;
  margin-top: ${({ theme }) => theme.sizes.sm};
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const PairChange = styled.Text<{ isPositive: boolean }>`
  font-size: 30px;
  font-weight: bold;
  color: ${({ theme, isPositive }) =>
    theme.colors[isPositive ? 'positive' : 'negative']};
  align-self: center;
`;
