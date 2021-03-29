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
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const InnerContainer = styled.div`
  flex: 1 0 400px;
  margin: 2%;
  border-radius: 10px;
  box-shadow: 2px 2px 10px lightgrey;
  background: ${(props) => props.theme.color.white};

  transition: 0.5s;
  & :hover {
    transition: 0.5s;
    opacity: 0.8;
    transform: scale(1.04);
  }
`;
