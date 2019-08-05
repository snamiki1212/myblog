import React from 'react';
import styled from 'styled-components';
import Author from '../Author';
import {colors} from '../../../data/color';

const Sidebar = (): JSX.Element => {
  return (
    <Wrapper>
      <Author />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  flex: 1;
  width: 100%;
  min-width: 250px;
  padding: 24px;

  background-color: ${colors['bg-white-2']};
`;

export default Sidebar;
