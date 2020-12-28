import React from 'react';
import styled from 'styled-components';
import {PaginationContext, SubPageContext} from '../../../gatsby-node/types';
import {Paginator, ArticlesPreviewWrapper} from '../atoms';
import {AuthorCard, ArticlePreviewCard } from '../molecules';
import {MarkdownRemarkEdge} from '../../types';

type Props = {
  postEdges: MarkdownRemarkEdge[];
  context: PaginationContext & SubPageContext;
  description?: React.ReactNode;
};

export const ArticlePreviewList: React.FC<Props> = ({
  postEdges,
  context,
  description,
}) => {
  return (
    <Wrapper>
      <MainArea>
        {description}
        <ArticlesPreviewWrapper>
          {postEdges.map(
            (edge): React.ReactNode => (
              <ArticlePreviewCard
                key={edge.node.frontmatter.title}
                postInfo={edge}
              />
            )
          )}
        </ArticlesPreviewWrapper>
        <Paginator context={context} />
      </MainArea>

      <AsideArea>
        <AsideItem>
          <AuthorCard />
        </AsideItem>
      </AsideArea>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 0 ${props => props.theme.layout.marginVertical}px;
`;

const MainArea = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const AsideArea = styled.aside`
  flex: 0;
  flex-direction: column;
  justify-content: space-between;
  min-width: 300px;
  margin: 0 ${props => props.theme.layout.marginVertical};
`;

const AsideItem = styled.div`
  padding: 40px;
  border-radius: 10px;
  background-color: ${props => props.theme.color.white};
`
