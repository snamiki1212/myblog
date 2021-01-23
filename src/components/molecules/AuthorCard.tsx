import React from 'react';
import {Link} from 'gatsby';
import styled from 'styled-components';
import config from '../../../data/SiteConfig';
import {MyLinks} from '../atoms';
import {AuthorCardLayout} from '../atoms/AuthorCardLayout';

type Props = {
  disableMore?: boolean;
};

export const AuthorCard: React.FC<Props> = ({disableMore = false}) => {
  const _More = disableMore ? (
    <></>
  ) : (
    <Link to="/about">
      <ProfileLinkText>もっと詳しく</ProfileLinkText>
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
  transition: .5s;
  & :hover{
    transition: .5s;
    opacity: .6;
  }
`;

const Name = styled.span`
  font-size: ${(props) => props.theme.fontSize.tmp_1}px;
  font-family: ${(props) => props.theme.fontFamily.primary};
`;

const Discription = styled.div`
  font-size: ${(props) => props.theme.fontSize.tmp_2}px;
  font-family: ${(props) => props.theme.fontFamily.primary};
`;

const ProfileLinkText = styled.span`
  font-family: ${(props) => props.theme.fontFamily.primary};
  border-radius: 10px;
  padding: 10px;
  border: 1px solid ${(props) => props.theme.color.grayDark};

  transition: 0.5s;
  & :hover {
    opacity: .6;
    transition: 0.5s;
  }
`;
