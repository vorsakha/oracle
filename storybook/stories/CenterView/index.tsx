import React from 'react';
import styled from 'styled-components/native';

export default function CenterView({ children, color = '#F5FCFF' }) {
  return <CustomView color={color}>{children}</CustomView>;
}

const CustomView = styled.View<{ color: string }>`
  padding: 24px;
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ color }) => color};
`;
