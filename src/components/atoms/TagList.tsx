import React from 'react';
import styled from 'styled-components';
import {DarkTip} from './DarkTip';
import kebabCase from 'lodash.kebabcase';

type Props = {
  tags: string[];
};

export const TagList: React.FC<Props> = ({tags}) => {
  if (!tags) return <></>;
  return (
    <Wrapper>
      {tags.map((tag) => (
        <DarkTip name={tag} key={tag} path={`/tags/${kebabCase(tag)}`} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-content: center;
  justify-content: center;
  align-items: center;
`;
