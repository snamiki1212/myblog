import React from 'react';
import styled from 'styled-components';

type Props = {style?: object};

export const Card: React.FC<Props> = ({children, style = {}}) => {
  return <Container style={style}>{children}</Container>;
};

const Container = styled.div`
  background-color: var(--white);
`;
