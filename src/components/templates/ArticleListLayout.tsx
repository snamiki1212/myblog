import React from 'react';
import styled from 'styled-components';
import {InnerLayout} from './InnerLayout';

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
      <InnerLayout
        header={articleListHeader}
        section={
          <div>
            <div>{articles}</div>
            <div>{pagination}</div>
          </div>
        }
        aside={profile}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  gap: 1rem;
  padding: ${(props) => `${props.theme.layout.marginVertical}px`};
`;
