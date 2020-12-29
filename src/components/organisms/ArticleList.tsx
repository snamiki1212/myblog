import React from 'react';
import styled from 'styled-components';
import {PaginationContext, SubPageContext} from '../../../gatsby-node/types';
import {Paginator, ArticlesPreviewWrapper} from '../atoms';
import {AuthorCard, ArticlePreviewCard} from '../molecules';
import {MarkdownRemarkEdge} from '../../types';

type Props = {
  postEdges: MarkdownRemarkEdge[];
  context: PaginationContext & SubPageContext;
  description?: React.ReactNode;
};

export const ArticleList: React.FC<Props> = ({
  postEdges,
  context,
  description,
}) => {
  return (
    <div>
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
    </div>
  );
};
