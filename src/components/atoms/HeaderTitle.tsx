import React from 'react';
import styled from 'styled-components';
import config from '../../../data/SiteConfig';
import {colors} from '../../../data/color';

export const HeaderTitle: React.FC = () => {
  return (
    <Title href="/">
      <Inner>{config.siteTitle}</Inner>
    </Title>
  );
};

const beforeColor = colors.white1;

const Inner = styled.span`
  transition: color 0.3s ease;
  &:hover {
    color: ${colors.vivid1};
    text-shadow: -1px -1px 0 ${beforeColor}, 1px -1px 0 ${beforeColor},
      -1px 1px 0 ${beforeColor}, 1px 1px 0 ${beforeColor}; // 縁取り文字:REF https://css-tricks.com/adding-stroke-to-web-text/
  }
`;

const Title = styled.a`
  padding: 8px 20px;
  font-size: 32px;
  letter-spacing: 3px;
  font-family: 'Megrim', 'Yu Gothic M', 'Raleway';
  transition: color 0.3s ease;
  margin: auto 0;
  &:link {
    color: ${beforeColor};
  }
  &:visited {
    color: ${beforeColor};
  }
`;
