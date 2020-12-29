import React from 'react';
import styled from 'styled-components';
import config from '../../../data/SiteConfig';
import {Logo} from './Logo';
import {Link} from 'gatsby';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  height: 500px;
  padding: 0 20px;

  background: ${props => props.theme.color.baseDark};
`;

const getURL = (snsName: 'github' | 'twitter' | 'linkedin'): string =>
  config.mySocials?.find((_) => _.icon === snsName)?.url ?? '';

const Navigations = () => {
  const githubURL = getURL('github');
  const twitterURL = getURL('twitter');
  const linkedinURL = getURL('linkedin');

  return (
    <NavWrapper>
      <Box>
        <Link to="/">
          <Logo size={146} />
        </Link>
      </Box>
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
  justify-content: space-around;
  padding: 50px 0;
  width: 100%;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
`;

const PrimaryText = styled.div`
  color: ${props => props.theme.color.primaryVivid};
`;
const LinkText = styled(Link)`
  color: ${props => props.theme.color.baseLight};
`;

export const Footer: React.FC = () => {
  return (
    <Wrapper>
      <Navigations />
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
