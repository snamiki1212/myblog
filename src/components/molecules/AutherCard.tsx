import React from 'react';
import styled from 'styled-components';
import config from '../../../data/SiteConfig';
import {colors} from '../../../data/color';

export const AuthorCard = (): JSX.Element => (
  <Wrapper>
    <Avator src={config.userAvatar} alt={config.sidebarUserName} />
    <Name>{config.sidebarUserName}</Name>
    <Discription>{config.userDescription}</Discription>
  </Wrapper>
);

const Wrapper = styled.div`
  width: 100%;
  color: ${colors['fc-gray-1']};
`;

const Avator = styled.img`
  width: 100%;
  border-radius: 50%;
`;

const Name = styled.div`
  font-size: 32px;
  color: ${colors['fc-black-1']};
  border-bottom: 1px solid ${colors['fc-vivid-1']};

  font-family: 'Megrim', 'Yu Gothic M', 'Raleway'; // TODO: megrim import
  text-align: center;
  padding: 20px 0;
`;

const Discription = styled.div`
  padding-top: 10px;
  font-size: 15px;
`;
