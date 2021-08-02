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
  background: linear-gradient(
    145deg,
    ${(props) => props.theme.color.baseDark},
    ${(props) => `${props.theme.color.baseDark}CC`},
    ${(props) => props.theme.color.baseDark}
  );
  margin: 0 auto;
`;
