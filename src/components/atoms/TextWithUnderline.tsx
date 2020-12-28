import React from 'react';
import styled from 'styled-components';

import {colors} from '../../../data/color';

export const TextWithUnderline: React.FC = ({children}) => (
  <Wrapper>
    {children}
    <Undeline />
  </Wrapper>
);

const Wrapper = styled.div`
  font-size: 32px;
  color: gray;
  text-align: center;
  padding: 20px 0;
`;

const Undeline = styled.div`
  background: linear-gradient(to right, ${colors.DEPRECATED_vivid1}, ${colors.DEPRECATED_vivid2});
  height: 3px;
`;
