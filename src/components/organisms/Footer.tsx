import React from 'react';
import styled from 'styled-components';
import config from '../../../data/SiteConfig';
import {Logo} from '../atoms/Logo';
import {Link} from 'gatsby';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  height: 500px;
  padding: 0 20px;

  background: ${props => props.theme.color.baseDark};
`;

const getURL = (snsName: 'github' | 'twitter' | 'linkedin'): string =>
  config.mySocials?.find((_) => _.icon === snsName)?.url ?? '';

const SiteLinks = () => {
  const githubURL = getURL('github');
  const twitterURL = getURL('twitter');
  const linkedinURL = getURL('linkedin');

  return (
    <NavWrapper>
      <Box>
        <PrimaryText>Lunash</PrimaryText>
        <LinkText to="/about">経歴・仕事依頼</LinkText>
      </Box>
      <Box>
        <PrimaryText>Blog</PrimaryText>
        <LinkText to="/categories">カテゴリ 一覧</LinkText>
        <LinkText to="/tags">タグ 一覧</LinkText>
      </Box>
      <Box>
        <PrimaryText>SNS</PrimaryText>
        <LinkText to={twitterURL}>Twitter</LinkText>
        <LinkText to={githubURL}>Github</LinkText>
        <LinkText to={linkedinURL}>Linkedin</LinkText>
      </Box>
    </NavWrapper>
  );
};

const NavWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 50px 0;
  width: 100%;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
`;

const PrimaryText = styled.div`
  font-family: ${props => props.theme.fontFamily.primary};
  color: ${props => props.theme.color.primaryVivid};
  font-weight: bold;
`;

const LinkText = styled(Link)`
  font-family: ${props => props.theme.fontFamily.primary};
  color: ${props => props.theme.color.baseLight};

  &:hover {
    color: ${props => props.theme.color.primaryVivid};
    border-bottom: 1px solid ${props => props.theme.color.primaryVivid};
  }
`;

export const Footer: React.FC = () => {
  return (
    <Wrapper>
      <Link to="/">
        <Logo size={146} />
      </Link>

      <SiteLinks />

      <Bottom>
        <HR />
        <Copyright>{config.copyright}</Copyright>
      </Bottom>
    </Wrapper>
  );
};

const Bottom = styled.div`
  width: 80%;
`

const HR = styled.hr`
  border: 1px solid ${props => props.theme.color.primaryVivid};
`;

const Copyright = styled.footer`
  color: ${props => props.theme.color.baseLight};
  padding: 10px 0;
`;
