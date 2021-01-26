import React from 'react';
import styled from 'styled-components';
import {ArticleCard} from './ArticleCard';
import {MarkdownRemarkEdge} from '../../types';

type Props = {
  postEdges: MarkdownRemarkEdge[];
};

export const ArticleList: React.FC<Props> = ({postEdges}) => {
  return (
    <Wrapper>
      {postEdges.map((edge) => (
        <Child>
          <ArticleCard postInfo={edge} />
        </Child>
      ))}
    </Wrapper>
  );
};

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Child = styled.div`
  min-width: 350px;
  width: 46%;
  margin: 2%;
  border-radius: 10px;
  box-shadow: 2px 2px 10px lightgrey;
  background: ${props => props.theme.color.white};
  
  transition: .5s;
  & :hover {
    transition: .5s;
    opacity: .8;
    transform: scale(1.04);
  }
`;
