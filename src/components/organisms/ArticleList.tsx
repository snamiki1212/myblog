import React from 'react';
import styled from 'styled-components';
import {ArticlePreviewLine} from '../organisms/ArticlePreviewLine';
import {MarkdownRemarkEdge} from '../../types';

type Props = {
  postEdges: MarkdownRemarkEdge[];
};

export const ArticleList: React.FC<Props> = ({postEdges}) => {
  return (
    <Wrapper>
      {postEdges.map((edge) => (
        <Child>
          <ArticlePreviewLine postInfo={edge} />
        </Child>
      ))}
    </Wrapper>
  );
};

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Child = styled.div`
  flex: 1 0 auto;
`;
