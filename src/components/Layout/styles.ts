import styled from 'styled-components/native';
import { Container } from '../common';

export const LayoutContainer = styled.SafeAreaView`
  flex: 1;
  background: ${({ theme }) => theme.colors.backgroundPrimary};
`;

export const ContainerWrapper = styled(Container)`
  padding: ${({ theme }) => theme.sizes.md};
  padding-bottom: 0;
  padding-top: 0;
`;
