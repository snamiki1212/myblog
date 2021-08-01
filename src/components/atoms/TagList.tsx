import React from 'react';
import styled from 'styled-components';
import {Tag} from './Tag';

type Props = {
  tags: string[];
};

export const TagList: React.FC<Props> = ({tags}) => {
  if (!tags) return <></>;
  return (
    <Wrapper>
      {tags.map((tag) => (
        <Tag tag={tag} key={tag} />
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
