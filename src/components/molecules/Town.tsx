import React from 'react';
import styled, {ThemeContext} from 'styled-components';
import {TownIconLeft} from '../atoms/TownIconLeft';
import {TownIconRight} from '../atoms/TownIconRight';

type Props = {
  fill: 'light' | 'dark';
};

export const Town: React.FC<Props> = ({fill}) => {
  const ctx = React.useContext(ThemeContext);

  const dark = ctx.color.baseDark;
  const light = ctx.color.baseLight;

  const _fill = fill === 'light' ? light : dark;

  return (
    <Wrapper>
      <TownIconLeft fill={_fill} />
      <TownIconRight fill={_fill} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
