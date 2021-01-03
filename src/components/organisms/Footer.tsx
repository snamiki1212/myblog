import React from 'react';
import styled from 'styled-components';
import config from '../../../data/SiteConfig';
import {Logo} from '../atoms/Logo';
import {Link} from 'gatsby';
import {mixinSpinAnimate} from '../atoms/SpinAnimation';

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
        <LinkText to="/categories">カテゴリー 一覧</LinkText>
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
  font-family: ${(props) => props.theme.fontFamily.primary};
  color: ${(props) => props.theme.color.primaryVivid};
  font-weight: bold;
`;

const LinkText = styled(Link)`
  margin-top: 7px;
  font-size: 20px;
  font-family: ${(props) => props.theme.fontFamily.primary};
  color: ${(props) => props.theme.color.baseLight};
  border-bottom: 1px solid transparent;

  transition: 0.5s;
  &:hover {
    color: ${(props) => props.theme.color.primaryVivid};
    border-color: ${(props) => props.theme.color.primaryVivid};
    transition: 0.5s;
  }
`;

export const Footer: React.FC = () => {
  return (
    <Wrapper>
      <Content>
        <Link to="/">
          <HoverForSpinArea>
            <LogoWrapper>
              <Logo size={146} />
            </LogoWrapper>
          </HoverForSpinArea>
        </Link>

        <SiteLinks />

        <Bottom>
          <HR />
          <Copyright>{config.copyright}</Copyright>
        </Bottom>
      </Content>
    </Wrapper>
  );
};

const LogoWrapper = styled.div``;

const HoverForSpinArea = styled.div`
  & :hover {
    ${LogoWrapper} {
      ${mixinSpinAnimate}
    }
  }
`;

const Bottom = styled.div`
  width: 100%;

`;

const HR = styled.hr`
  border: 1px solid ${(props) => props.theme.color.primaryVivid};
`;

const Copyright = styled.footer`
  color: ${(props) => props.theme.color.baseLight};
  padding: 10px 0;
  text-align: center;
`;

const Wrapper = styled.div`
  height: 600px;
  background: ${(props) => props.theme.color.baseDark};
`;

const Content = styled.div`
  height: 100%;
  width: 80%;
  margin: 0 auto;

  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
