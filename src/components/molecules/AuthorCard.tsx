import React from 'react';
import {Link} from 'gatsby';
import styled from 'styled-components';
import config from '../../../data/SiteConfig';
import {MyLinks} from '../atoms';
import {AuthorCardLayout} from './AuthorCardLayout';

type Props = {
  disableMore?: boolean;
};

export const AuthorCard: React.FC<Props> = ({disableMore = false}) => {
  const _More = disableMore ? (
    <></>
  ) : (
    <Link to="/about">
      <ProfileLinkText>Read More</ProfileLinkText>
    </Link>
  );

  return (
    <AuthorCardLayout
      avator={
        <Link to="/about">
          <Avator
            src={config.userAvatar}
            alt={config.autherName}
            loading="lazy"
          />
        </Link>
      }
      name={<Name>{config.autherName}</Name>}
      sns={<MyLinks />}
      description={<Discription>{config.userDescription}</Discription>}
      toProfile={_More}
    />
  );
};

const Avator = styled.img`
  width: ${(props) => props.theme.layout.autherAvatorSizeNum}px;
  border-radius: 100%;
  transition: 0.3s;
  opacity: 0.8;
  & :hover {
    transition: 0.3s;
    opacity: 1;
  }
`;

const Name = styled.span`
  font-size: ${(props) => props.theme.fontSize.tmp_1}px;
  font-family: ${(props) => props.theme.fontFamily.logoEn};
`;

const Discription = styled.div`
  font-size: ${(props) => props.theme.fontSize.tmp_2}px;
  font-family: ${(props) => props.theme.fontFamily.primary};
`;

const ProfileLinkText = styled.span`
  font-family: ${(props) => props.theme.fontFamily.logoEn};
  border-radius: 10px;
  padding: 10px;

  display: inline-block;
  opacity: 0.7;
  transition: 0.2s;
  & :hover {
    opacity: 1;
    transition: 0.2s;
    background-color: ${(props) => props.theme.color.baseLight};
  }
`;
