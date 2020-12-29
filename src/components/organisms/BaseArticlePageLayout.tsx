import React from 'react';
import styled from 'styled-components';

type Props = {
  articles: React.ReactNode;
  profile: React.ReactNode;
  pagination: React.ReactNode;
};

export const BaseArticlePageLayout: React.FC<Props> = ({articles, profile, pagination}) => {
  return (
    <Wrapper>
      <ArticleArea>{articles}</ArticleArea>
      <PaginationArea>{pagination}</PaginationArea>
      <ProfileArea>{profile}</ProfileArea>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 0 ${(props) => props.theme.layout.marginVertical}px;
`;

const ArticleArea = styled.div``;
const PaginationArea = styled.div``;
const ProfileArea = styled.div``;
