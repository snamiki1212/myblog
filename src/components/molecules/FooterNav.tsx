import React from 'react';
import styled from 'styled-components';
import {Link} from 'gatsby';
import {useConfigMySocialLinks} from '../../hooks/config'

export const FooterNav: React.FC = () => {
  const githubURL = useConfigMySocialLinks('github');
  const twitterURL = useConfigMySocialLinks('twitter');
  const linkedinURL = useConfigMySocialLinks('linkedin');

  return (
    <Wrapper>
      <Box>
        <SubTitle>Lunash</SubTitle>
        <LinkText to="/about">経歴・仕事依頼</LinkText>
      </Box>
      <Box>
        <SubTitle>Blog</SubTitle>
        <LinkText to="/categories">カテゴリー 一覧</LinkText>
        <LinkText to="/tags">タグ 一覧</LinkText>
      </Box>
      <Box>
        <SubTitle>SNS</SubTitle>
        <LinkText to={twitterURL}>Twitter</LinkText>
        <LinkText to={githubURL}>Github</LinkText>
        <LinkText to={linkedinURL}>Linkedin</LinkText>
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
