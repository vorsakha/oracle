import styled from 'styled-components/native';

export const HeaderContainer = styled.View`
  height: 60px;
  background-color: ${({ theme }) => theme.colors.backgroundPrimary};

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.sizes.sm};
  margin-bottom: ${({ theme }) => theme.sizes.sm};
`;
