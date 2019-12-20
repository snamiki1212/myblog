import React from 'react';
import styled from 'styled-components';
import {colors} from '../../../data/color';
import {PaginationContext, SubPageContext} from '../../../gatsby-node_';
import {Paginator, SubPageLinks} from '../atoms';
import {AuthorCard, PostPreviewCard} from '../molecules';

type Props = {
  postEdges: any;
  context: PaginationContext & SubPageContext;
};

export const Body: React.FC<Props> = ({postEdges, context}) => {
  return (
    <PageContainer>
      <ArticleArea>
        <PostPreviewCardContaienr>
          {postEdges.map(
            (edge): JSX.Element => (
              <PostPreviewCard
                key={edge.node.frontmatter.title}
                postInfo={edge}
              />
            )
          )}
        </PostPreviewCardContaienr>
        <Paginator context={context} />
      </ArticleArea>

      <AsideArea>
        <AuthorCard />
        <SubPageLinks context={context} />
      </AsideArea>
    </PageContainer>
  );
};

const AsideArea = styled.aside`
  flex: 1;
  width: 100%;
  min-width: 250px;
  padding: 24px;

  background-color: ${colors['backgroundWhite2']};
`;

const PageContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const ArticleArea = styled.div`
  flex: 4;
  min-width: 500px;
`;

export const PostPreviewCardContaienr = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  padding: 10px;
`;
