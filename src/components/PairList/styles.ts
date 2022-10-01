import styled from 'styled-components/native';

export const Separator = styled.View`
  margin: ${({ theme }) => theme.sizes.xs} 0;
`;

export const List = styled.FlatList`
  margin: ${({ theme }) => theme.sizes.md} 0;
`;

export const PairText = styled.Text`
  font-size: ${({ theme }) => theme.sizes.lg};
  color: ${({ theme }) => theme.colors.textPrimary};
  font-family: ${({ theme }) => theme.fonts.primaryBold};
`;
export const PairDescription = styled.Text`
  margin: ${({ theme }) => theme.sizes.xs} 0;
  font-size: ${({ theme }) => theme.sizes.md};
  color: ${({ theme }) => theme.colors.textPrimary};
  font-family: ${({ theme }) => theme.fonts.primary};
`;
export const ItemWrapper = styled.TouchableOpacity`
  padding: ${({ theme }) => theme.sizes.md};
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  border-radius: 6px;
`;
export const ItemText = styled.Text`
  font-size: 20px;
  text-align: center;
  color: ${({ theme }) => theme.colors.textTertiary};
  font-family: ${({ theme }) => theme.fonts.primary};
`;
