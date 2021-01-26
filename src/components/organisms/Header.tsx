import React from 'react';
import styled from 'styled-components';
import {HeadNav} from '../molecules/HeadNav';
import {TownIconLeft} from '../atoms/TownIconLeft';
import {TownIconRight} from '../atoms/TownIconRight';

type Props = {
  withTown?: boolean;
};

export const Header: React.FC<Props> = ({withTown = true}) => {
  return (
    <Wrapper>
      <HeadNav />
      {withTown && (
        <Town>
          <TownIconLeft />
          <TownIconRight />
        </Town>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: ${(props) => props.theme.color.baseDark};
`;

const Town = styled.div`
  display: flex;
  justify-content: space-between;
`;
