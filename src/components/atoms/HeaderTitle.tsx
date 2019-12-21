import React from 'react';
import styled from 'styled-components';
import config from '../../../data/SiteConfig';
import {colors} from '../../../data/color';

export const HeaderTitle: React.FC = () => {
  return <Title href="/">{config.siteTitle}</Title>;
};

const _color = colors.fontWhite1;
const Title = styled.a`
  padding: 8px 20px;
  font-size: 32px;
  letter-spacing: 3px;
  font-family: 'Megrim', 'Yu Gothic M', 'Raleway';
  transition: 0.3s;
  margin: auto 0;
  color: ${_color};
  &:link {
    color: ${_color};
  }
  &:visited {
    color: ${_color};
  }
  &:hover {
    color: ${_color};
    font-size: 36px;
  }
`;
