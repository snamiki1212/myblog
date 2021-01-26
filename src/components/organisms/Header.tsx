import React from 'react';
import styled from 'styled-components';
import {HeadNav} from '../molecules/HeadNav';
import {Town} from '../molecules/Town';

type Props = {
  withTown?: boolean;
};

export const Header: React.FC<Props> = ({withTown = true}) => {
  return (
    <Wrapper>
      <HeadNav />
      {withTown && <Town fill="light" />}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: ${(props) => props.theme.color.baseDark};
`;
