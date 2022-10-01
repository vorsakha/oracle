import styled from 'styled-components/native';

export const ButtonIconContainer = styled.TouchableOpacity`
  flex: 1;
  height: 42px;
  width: 42px;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text<{ active: boolean }>`
  margin-top: 5px;
  color: ${({ active, theme: { colors } }) =>
    active ? colors.textPrimary : colors.backgroundPrimary};
  font-family: ${({ theme }) => theme.fonts.primary};
`;
