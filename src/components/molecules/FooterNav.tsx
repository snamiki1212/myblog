import React from 'react';
import styled from 'styled-components';
import {Link} from 'gatsby';
import {useConfigMySocialLinks} from '../../hooks/config';

export const FooterNav: React.FC = () => {
  const githubURL = useConfigMySocialLinks('github');
  const twitterURL = useConfigMySocialLinks('twitter');
  const linkedinURL = useConfigMySocialLinks('linkedin');

  return (
    <Wrapper>
      <Box>
        <SubTitle>Lunash</SubTitle>
        <InternalLink to="/about">経歴・仕事依頼</InternalLink>
      </Box>
      <Box>
        <SubTitle>Blog</SubTitle>
        <InternalLink to="/categories">カテゴリー 一覧</InternalLink>
        <InternalLink to="/tags">タグ 一覧</InternalLink>
      </Box>
      <Box>
        <SubTitle>SNS</SubTitle>
        <ExternalLink href={twitterURL}>Twitter</ExternalLink>
        <ExternalLink href={githubURL}>Github</ExternalLink>
        <ExternalLink href={linkedinURL}>Linkedin</ExternalLink>
      </Box>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
`;

const SubTitle = styled.div`
  font-family: ${(props) => props.theme.fontFamily.primary};
  color: var(--vivid1);
  font-weight: bold;
  font-family: ${(props) => props.theme.fontFamily.logoEn};
`;

const InternalLink = styled(Link)`
  margin-top: 7px;
  font-size: 20px;
  font-family: ${(props) => props.theme.fontFamily.primary};
  color: var(--base-light);
  border-bottom: 1px solid transparent;

  transition: 0.5s;
  &:hover {
    color: var(--vivid1);
    border-color: var(--vivid1);
    transition: 0.5s;
  }
`;

const ExternalLink = styled.a`
  margin-top: 7px;
  font-size: 20px;
  font-family: ${(props) => props.theme.fontFamily.primary};
  color: var(--base-light);
  border-bottom: 1px solid transparent;

  transition: 0.5s;
  &:hover {
    color: var(--vivid1);
    border-color: var(--vivid1);
    transition: 0.5s;
  }
`;
