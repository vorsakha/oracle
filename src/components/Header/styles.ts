import styled from 'styled-components/native';

export const HeaderContainer = styled.View`
  height: 60px;
  background-color: ${({ theme }) => theme.colors.backgroundPrimary};

  justify-content: center;
  align-items: flex-end;
  padding: ${({ theme }) => theme.sizes.sm};
`;
