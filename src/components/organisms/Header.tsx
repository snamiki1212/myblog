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
    var(--base-dark),
    var(--base-dark-CC),
    var(--base-dark)
  );
  display: flex;
  justify-content: center;
`;
