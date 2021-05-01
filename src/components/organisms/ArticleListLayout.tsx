import React from 'react';
import styled from 'styled-components';

type Props = {
  articleListHeader?: React.ReactNode;
  articles: React.ReactNode;
  profile: React.ReactNode;
  pagination: React.ReactNode;
};

export const ArticleListLayout: React.FC<Props> = ({
  articleListHeader,
  articles,
  profile,
  pagination,
}) => {
  return (
    <Wrapper>
      {articleListHeader && <div>{articleListHeader}</div>}
      <ArticleAndSidebar>
        <ArticleArea>
          <div>{articles}</div>
          <div>{pagination}</div>
        </ArticleArea>
        <ProfileSection>
          <Sticky>{profile}</Sticky>
        </ProfileSection>
      </ArticleAndSidebar>
    </Wrapper>
  );
};

const Sticky = styled.div`
  position: sticky;
  top: 1rem;
`;

const Wrapper = styled.div`
  display: grid;
  gap: 1rem;
  padding: ${(props) => props.theme.layout.marginVertical}px;
`;

const ArticleAndSidebar = styled.div`
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 2rem;
`;

const ArticleArea = styled.div`
  grid-column: 1 / 2;
  @media (max-width: 700px) {
    /* // TODO: dont use magic num */
    grid-column: 1 / 3;
  }
`;

const ProfileSection = styled.div`
  grid-column: span 1;
  @media (max-width: 700px) {
    /* // TODO: dont use magic num */
    grid-column: span 2;
  }
`;
