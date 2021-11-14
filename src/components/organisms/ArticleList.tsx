import React from 'react';
import styled from 'styled-components';
import {ArticleCard} from './ArticleCard';
import {MarkdownRemarkEdge} from '../../types';

type Props = {
  postEdges: MarkdownRemarkEdge[];
};

export const ArticleList: React.FC<Props> = ({postEdges}) => {
  return (
    <Container>
      {postEdges.map((edge, idx) => (
        <InnerContainer key={idx}>
          <ArticleCard postInfo={edge} />
        </InnerContainer>
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const InnerContainer = styled.div`
  border-radius: 10px;
  filter: drop-shadow(1px 5px 5px lightgrey);
  background: var(--white);
  opacity: 0.7;
  transition: 0.2s;
  width: 100%;
  & :hover {
    transition: 0.2s;
    transform: scale(1.01);
    opacity: 1;
    filter: drop-shadow(1px 5px 20px lightgrey);
  }
`;
