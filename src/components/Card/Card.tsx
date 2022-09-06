import React, { PropsWithChildren } from 'react';
import { CardContainer, CardWrapper } from './styles';

function Card({ children }: PropsWithChildren) {
  return (
    <CardContainer>
      <CardWrapper>{children}</CardWrapper>
    </CardContainer>
  );
}

export default Card;
