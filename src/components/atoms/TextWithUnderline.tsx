import React from 'react';
import styled from 'styled-components';

import {colors} from '../../../data/color';

export const TextWithUnderline: React.FC = ({children}) => (
  <Container>
    {children}
    <Undeline />
  </Container>
);

const Container = styled.div`
  font-size: 32px;
  color: gray;
  text-align: center;
  padding: 20px 0;
`;

const Undeline = styled.div`
  background: linear-gradient(to right, ${colors.vivid1}, ${colors.vivid2});
  height: 3px;
`;
