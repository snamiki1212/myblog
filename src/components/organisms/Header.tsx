import React from 'react';
import styled from 'styled-components';
import {HeadNav} from '../molecules/HeadNav';

export const Header: React.FC = () => {
  return (
    <Wrapper>
      <HeadNav />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: ${(props) => props.theme.color.baseDark};
`;
