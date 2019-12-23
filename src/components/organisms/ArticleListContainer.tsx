import React from 'react';
import styled from 'styled-components';
import {colors} from '../../../data/color';
import {PaginationContext, SubPageContext} from '../../../gatsby-node_';
import {Paginator, SubPageLinks, ArticlePreviewsContaienr} from '../atoms';
import {AuthorCard, ArticlePreviewCard} from '../molecules';

type Props = {
  postEdges: any;
  context: PaginationContext & SubPageContext;
};

export const ArticleListContainer: React.FC<Props> = ({postEdges, context}) => {
  return (
    <PageContainer>
      <ArticleArea>
        <ArticlePreviewsContaienr>
          {postEdges.map(
            (edge): JSX.Element => (
              <ArticlePreviewCard
                key={edge.node.frontmatter.title}
                postInfo={edge}
              />
            )
          )}
        </ArticlePreviewsContaienr>
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
`;

export default ArticleListContainer;
