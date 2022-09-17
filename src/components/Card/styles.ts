import styled from 'styled-components/native';

export const CardContainer = styled.View`
  background-color: ${({ theme }) => theme.colors.backgroundTertiary};

  shadow-color: '#000';
  border-radius: 15px;
  shadow-radius: 15px;
  shadow-opacity: 0.28;
  shadow-offset: 0 2px;
  elevation: 4;

  justify-content: space-around;
  align-items: flex-start;

  padding: ${({ theme: { sizes } }) => sizes.md};
  margin: ${({ theme: { sizes } }) => sizes.sm} 0;
`;
export const CardWrapper = styled.View``;
