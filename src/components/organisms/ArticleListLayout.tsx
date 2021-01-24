import React from 'react';
import styled from 'styled-components';

type Props = {
  articleListHeader?: React.ReactNode;
  articles: React.ReactNode;
  profile: React.ReactNode;
  pagination: React.ReactNode;
};

export const ArticleListLayout: React.FC<Props> = ({articleListHeader, articles, profile, pagination}) => {
  return (
    <Wrapper>
      {articleListHeader && <ArticleListHeader>{articleListHeader}</ArticleListHeader>}
      <ArticlesArea>{articles}</ArticlesArea>
      <PaginationArea>{pagination}</PaginationArea>
      <ProfileArea>{profile}</ProfileArea>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  align-content: space-between;
  flex-wrap: wrap;
  margin: 0 ${(props) => props.theme.layout.marginVertical}px;
`;

const ArticleListHeader = styled.div`
  width: 100%;
`;

const ArticlesArea = styled.div`
  width: 100%;
`;

const PaginationArea = styled.div`
  width: 100%;
`;

const ProfileArea = styled.div`
  width: 100%;
`;
