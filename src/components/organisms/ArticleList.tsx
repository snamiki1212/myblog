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
  align-items: center;
  gap: 1rem;
`;

const InnerContainer = styled.div`
  border-radius: 10px;
  box-shadow: 2px 2px 10px lightgrey;
  background: ${(props) => props.theme.color.white};
  opacity: 0.7;
  transition: 0.2s;
  width: 100%;
  max-width: 700px;
  & :hover {
    transition: 0.2s;
    transform: scale(1.01);
    opacity: 1;
  }
`;
