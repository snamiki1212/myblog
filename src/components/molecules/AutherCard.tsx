import React from 'react';
import {Link} from 'gatsby';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';

import config from '../../../data/SiteConfig';
import {colors} from '../../../data/color';
import {MyLinks} from '../atoms';
import {AuthorCardLayout} from '../atoms/AuthorCardLayout';

export const AuthorCard: React.FC = () => (
  <AuthorCardLayout
    avator={
      <Link to="/about">
        <Avator src={config.userAvatar} alt={config.autherName} />
      </Link>
    }
    name={<Name>{config.autherName}</Name>}
    sns={<MyLinks />}
    description={<Discription>{config.userDescription}</Discription>}
    toProfile={<Link to="/about">プロフィールもっと読む</Link>}
  />
);

const Avator = styled.img`
  width: ${(props) => props.theme.layout.autherAvatorSizeNum}px;
  border-radius: 100%;
`;

const Name = styled.span`
  font-size: ${(props) => props.theme.fontSize.tmp_1}px;
  font-family: ${(props) => props.theme.fontFamily.primary};
`;

const Discription = styled.div`
  font-size: ${(props) => props.theme.fontSize.tmp_2}px;
  font-family: ${(props) => props.theme.fontFamily.primary};
`;
