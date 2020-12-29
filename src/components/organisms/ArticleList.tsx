import React from 'react';
import styled from 'styled-components';
import {ArticleCard} from '../molecules';
import {MarkdownRemarkEdge} from '../../types';

type Props = {
  postEdges: MarkdownRemarkEdge[];
};

export const ArticleList: React.FC<Props> = ({postEdges}) => {
  return (
    <Wrapper>
      {postEdges.map((edge) => (
        <ArticleCard key={edge.node.frontmatter.title} postInfo={edge} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  align-content: space-between;
`;
