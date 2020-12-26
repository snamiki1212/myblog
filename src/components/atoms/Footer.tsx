import React from 'react';
import styled from 'styled-components';
import config from '../../../data/SiteConfig';
import {colors} from '../../../data/color';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  height: 500px;

  color: ${colors.grayLight};
  background: ${colors.black1};
`;

const Navigations = () => {
  return <div>

  </div>
}

export const Footer: React.FC = () => {
  return (
    <Wrapper>
      <Navigations />
      <Copyright />
    </Wrapper>
  );
};

const Copyright: React.FC = () => {
  return <footer>{config.copyright}</footer>;
};
