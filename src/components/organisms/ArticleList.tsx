import React from 'react';
import styled from 'styled-components';
import {ArticleCard} from '../molecules';
import {ArticlePreviewLine} from '../organisms/ArticlePreviewLine';

import {Wrapper, Child} from '../molecules/DynamicSquare';
import {MarkdownRemarkEdge} from '../../types';

type Props = {
  postEdges: MarkdownRemarkEdge[];
};

export const ArticleList: React.FC<Props> = ({postEdges}) => {
  return (
    <Wrapper>
      {postEdges.map((edge) => (
        <Child>
          {/* <ArticleCard key={edge.node.frontmatter.title} postInfo={edge} /> */}
          <ArticlePreviewLine postInfo={edge} />
        </Child>
      ))}
    </Wrapper>
  );
};