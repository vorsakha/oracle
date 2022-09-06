import styled from 'styled-components/native';

export const NavigationWrapper = styled.View`
  height: 100px;
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  border-radius: ${({ theme }) => theme.sizes.lg};
  margin: ${({ theme }) => theme.sizes.md};

  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding: ${({ theme }) => theme.sizes.md};
`;
