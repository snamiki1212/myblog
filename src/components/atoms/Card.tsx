import React from 'react';
import styled from 'styled-components';

export const Card: React.FC = ({children}) => {
  return <Container>{children}</Container>;
};

const Container = styled.div`
  border-radius: 10px;
  background-color: var(--white);
  box-shadow: 2px 2px 10px lightgrey;
`;
