import React from 'react';
import {PaginationContext, SubPageContext} from '../../../gatsby-node/types';
import {ArticlesPreviewWrapper} from '../atoms';
import {ArticlePreviewCard} from '../molecules';
import {MarkdownRemarkEdge} from '../../types';

type Props = {
  postEdges: MarkdownRemarkEdge[];
  context: PaginationContext & SubPageContext;
  description?: React.ReactNode;
};

export const ArticleList: React.FC<Props> = ({postEdges, description}) => {
  return (
    <div>
      {description}
      <ArticlesPreviewWrapper>
        {postEdges.map((edge) => (
          <ArticlePreviewCard
            key={edge.node.frontmatter.title}
            postInfo={edge}
          />
        ))}
      </ArticlesPreviewWrapper>
    </div>
  );
};
