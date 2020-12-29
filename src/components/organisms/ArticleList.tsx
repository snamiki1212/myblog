import React from 'react';
import {ArticlesPreviewWrapper} from '../atoms/ArticlesPreviewWrapper';
import {ArticlePreviewCard} from '../molecules';
import {MarkdownRemarkEdge} from '../../types';

type Props = {
  postEdges: MarkdownRemarkEdge[];
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
