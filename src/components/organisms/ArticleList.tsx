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
  flex-direction: row;
  flex-wrap: wrap;
`;

export const Child = styled.div`
  width: 46%;
  margin: 2%;
  border-radius: 10px;
  background: ${props => props.theme.color.white};
  
  transition: .5s;
  & :hover {
    transition: .5s;
    background: ${props => props.theme.color.primaryVivid};
  }
`;
