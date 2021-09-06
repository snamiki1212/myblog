import React from 'react';
import styled from 'styled-components';

type Props = {style?: object};

export const Card: React.FC<Props> = ({children, style = {}}) => {
  return <Container style={style}>{children}</Container>;
};

const Container = styled.div`
  border-radius: 10px;
  background-color: var(--white);
  box-shadow: 2px 2px 10px lightgrey;
`;
