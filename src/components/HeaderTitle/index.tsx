import React from 'react';
import styled from 'styled-components';
import config from '../../../data/SiteConfig';
import {colors} from '../../../data/color';

const HeaderTitle = (): JSX.Element => {
  return <Wrapper href="/">{config.siteTitleTop}</Wrapper>;
};

const Wrapper = styled.a`
  padding: 8px 20px;
  font-size: 32px;
  letter-spacing: 3px;
  color: ${colors['fc-vivid-1']};
  font-family: 'Megrim', 'Yu Gothic M', 'Raleway';
  transition: 0.3s;
  margin: auto 0;
  &:hover {
    color: ${colors['fc-white-1']};
    font-size: 38px;
  }
`;

export default HeaderTitle;
