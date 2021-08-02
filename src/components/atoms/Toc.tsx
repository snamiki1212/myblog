import React from 'react';
import styled from 'styled-components';
import {Card} from '../atoms/Card';

export const Toc: React.FC<{toc: React.ReactNode}> = ({toc}) => {
  return (
    <Card>
      <Outer>
        <Title>目次</Title>
        {toc}
      </Outer>
    </Card>
  );
};

const Outer = styled.div`
  max-width: 300px; /* TODO: should change */
  max-height: 400px; /* TODO: should change */
  overflow: auto;
  padding: 1rem;
`;

const Title = styled.div`
  font-weight: 900;
  font-size: 1.5rem;
  color: ${(props) => props.theme.color.baseDark};
`;
