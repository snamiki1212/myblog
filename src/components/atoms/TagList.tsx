import React from 'react';
import kebabCase from 'lodash.kebabcase';
import {Link} from 'gatsby';
import styled from 'styled-components';
import {Button} from './Button';

type Props = {
  tags: string[];
};

export const TagList: React.FC<Props> = ({tags}) => {
  if (!tags) return <></>;
  return (
    <Wrapper>
      {tags.map((tag) => (
        <_Link key={tag} to={`/tags/${kebabCase(tag)}`}>
          <_Button>{`#${tag}`}</_Button>
        </_Link>
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

const _Link = styled(Link)`
  text-decoration: none;
`;

const _Button = styled(Button)`
  margin: 5px 2px 0;
  color: ${(props) => props.theme.color.white};
  background: ${(props) => props.theme.color.baseDark};
  & :hover {
    color: ${(props) => props.theme.color.primaryVivid};  
    background: ${(props) => props.theme.color.baseDark};
  }
`;
